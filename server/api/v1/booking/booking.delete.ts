import { BookingService } from "~/server/services/booking/BookingService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BookingService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
