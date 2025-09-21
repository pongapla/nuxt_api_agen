import { AirTicketPicsService } from "~/server/services/airticket_pics/AirTicketPicsService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new AirTicketPicsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
