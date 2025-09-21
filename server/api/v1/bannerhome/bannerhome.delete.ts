import { BannerHomeService } from "~/server/services/bannerhome/BannerHomeService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerHomeService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
