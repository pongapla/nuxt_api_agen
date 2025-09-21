import { CarrentPeriodService } from "~/server/services/carrent_period/CarrentPeriodService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CarrentPeriodService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
