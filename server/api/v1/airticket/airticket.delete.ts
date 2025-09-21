import { AirTicketService } from "~/server/services/airticket/AirTicketService";

export default defineEventHandler(async (event) => {
  const code = Number(getQuery(event).code);
  const service = new AirTicketService();
  const result = await service.delete(code);
  return { status: "success", data: result };
});
