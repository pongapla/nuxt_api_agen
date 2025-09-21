import { PaymentNoticeService } from "~/server/services/paymentnotice/PaymentNoticeService";
import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const service = new PaymentNoticeService();
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;

  if (code) {
    const rec = await service.getById(code);
    if (!rec) return { status: "error", message: "Not found" };
    return { status: "success", data: rec };
  }

  const all = await service.getAll();
  return { status: "success", data: all };
});
