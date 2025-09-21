import { CarrentPeriodService } from "~/server/services/carrent_period/CarrentPeriodService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CarrentPeriodService();
  const rec = await service.delete(Number(code));
  return { status: "success", data: rec };
});
