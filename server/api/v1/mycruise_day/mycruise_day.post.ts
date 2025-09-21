import { MyCruiseDayService } from "~/server/services/mycruise_day/MyCruiseDayService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseDayService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
