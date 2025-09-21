import { BannerHomeService } from "~/server/services/bannerhome/BannerHomeService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerHomeService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
