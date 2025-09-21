import { MyCarrentPeriodService } from "~/server/services/mycarrent_period/MyCarrentPeriodService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCarrentPeriodService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
