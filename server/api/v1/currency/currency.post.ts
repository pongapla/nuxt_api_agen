import { CurrencyService } from "~/server/services/currency/CurrencyService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CurrencyService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
