import { BillsService } from "~/server/services/bills/BillsService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BillsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
