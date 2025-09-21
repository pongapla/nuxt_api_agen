import { BannerLineService } from "~/server/services/bannerline/BannerLineService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerLineService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
