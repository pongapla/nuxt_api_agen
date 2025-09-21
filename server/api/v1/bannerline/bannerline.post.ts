import { BannerLineService } from "~/server/services/bannerline/BannerLineService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerLineService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
