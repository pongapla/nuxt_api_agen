import { BannerPromoteService } from "~/server/services/bannerpromote/BannerPromoteService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerPromoteService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
