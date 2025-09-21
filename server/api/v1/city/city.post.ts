import { CityService } from "~/server/services/city/CityService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CityService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
