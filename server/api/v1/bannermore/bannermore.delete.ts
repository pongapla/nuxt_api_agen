import { BannerMoreService } from "~/server/services/bannermore/BannerMoreService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerMoreService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
