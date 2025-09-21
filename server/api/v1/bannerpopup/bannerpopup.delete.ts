import { BannerPopupService } from "~/server/services/bannerpopup/BannerPopupService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerPopupService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
