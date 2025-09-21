import { BannerCruiseService } from "~/server/services/bannercruise/BannerCruiseService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BannerCruiseService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
