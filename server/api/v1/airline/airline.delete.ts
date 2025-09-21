import { AirlineService } from "~/server/services/airline/AirlineService";

export default defineEventHandler(async (event) => {
  const code = Number(getQuery(event).code);
  const service = new AirlineService();
  const result = await service.delete(code);
  return { status: "success", data: result };
});
