import { AirlineService } from "~/server/services/airline/AirlineService";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = Number(query.code);
  const body = await readBody(event);
  const service = new AirlineService();
  const rec = await service.update(code, body);
  return { status: "success", data: rec };
});
