import { AirlineService } from "~/server/services/airline/AirlineService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new AirlineService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
