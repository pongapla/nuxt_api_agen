import { BillsService } from "~/server/services/bills/BillsService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BillsService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
