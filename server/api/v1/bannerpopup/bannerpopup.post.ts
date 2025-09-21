import { BannerPopupService } from "~/server/services/bannerpopup/BannerPopupService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerPopupService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
