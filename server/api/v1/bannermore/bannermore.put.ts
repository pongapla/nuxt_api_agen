import { BannerMoreService } from "~/server/services/bannermore/BannerMoreService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerMoreService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
