import { BannerPopupService } from "~/server/services/bannerpopup/BannerPopupService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerPopupService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
