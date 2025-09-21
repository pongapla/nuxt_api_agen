import { AirTicketPicsService } from "~/server/services/airticket_pics/AirTicketPicsService";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = Number(query.code);
  const body = await readBody(event);
  const service = new AirTicketPicsService();
  const rec = await service.update(code, body);
  return { status: "success", data: rec };
});
