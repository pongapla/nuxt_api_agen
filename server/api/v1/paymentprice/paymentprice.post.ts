import { PaymentPriceService } from "~/server/services/paymentprice/PaymentPriceService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PaymentPriceService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
