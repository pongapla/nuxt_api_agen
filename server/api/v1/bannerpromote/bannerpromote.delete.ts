import { BannerPromoteService } from "~/server/services/bannerpromote/BannerPromoteService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerPromoteService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
