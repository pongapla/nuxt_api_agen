import { BannerLineService } from "~/server/services/bannerline/BannerLineService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerLineService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
