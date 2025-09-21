import { CityService } from "~/server/services/city/CityService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CityService();
  const rec = await service.delete(Number(code));
  return { status: "success", data: rec };
});
