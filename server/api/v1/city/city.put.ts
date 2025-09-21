import { CityService } from "~/server/services/city/CityService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CityService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
