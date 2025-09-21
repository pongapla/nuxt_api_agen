import { AirTicketPicsService } from "~/server/services/airticket_pics/AirTicketPicsService";

export default defineEventHandler(async (event) => {
  const code = Number(getQuery(event).code);
  const service = new AirTicketPicsService();
  const result = await service.delete(code);
  return { status: "success", data: result };
});
