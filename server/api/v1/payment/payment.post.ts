import { PaymentService } from "~/server/services/payment/PaymentService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PaymentService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
