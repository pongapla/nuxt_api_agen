import { AirTicketService } from "~/server/services/airticket/AirTicketService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new AirTicketService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
