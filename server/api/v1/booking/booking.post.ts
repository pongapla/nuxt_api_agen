import { BookingService } from "~/server/services/booking/BookingService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BookingService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
