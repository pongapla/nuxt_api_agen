import { PaymentDateService } from "~/server/services/paymentdate/PaymentDateService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PaymentDateService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
