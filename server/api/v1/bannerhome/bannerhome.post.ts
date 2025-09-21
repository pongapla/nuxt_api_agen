import { BannerHomeService } from "~/server/services/bannerhome/BannerHomeService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerHomeService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
