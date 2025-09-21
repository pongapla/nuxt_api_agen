import { BannerMoreService } from "~/server/services/bannermore/BannerMoreService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerMoreService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
