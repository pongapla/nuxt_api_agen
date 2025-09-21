import { TouronlinePeriodService } from "~/server/services/touronline_period/TouronlinePeriodService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TouronlinePeriodService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
