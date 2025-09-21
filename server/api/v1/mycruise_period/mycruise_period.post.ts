import { MyCruisePeriodService } from "~/server/services/mycruise_period/MyCruisePeriodService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruisePeriodService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
