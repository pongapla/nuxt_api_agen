import { HolidayService } from "~/server/services/holiday/HolidayService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new HolidayService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
