import { PaymentNoticeService } from "~/server/services/paymentnotice/PaymentNoticeService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PaymentNoticeService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
