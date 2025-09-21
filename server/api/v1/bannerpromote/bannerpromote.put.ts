import { BannerPromoteService } from "~/server/services/bannerpromote/BannerPromoteService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerPromoteService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
