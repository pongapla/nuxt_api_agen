import { CarrentPeriodService } from "~/server/services/carrent_period/CarrentPeriodService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CarrentPeriodService();
  const rec = await service.update(Number(code), body);
  return { status: "success", data: rec };
});
