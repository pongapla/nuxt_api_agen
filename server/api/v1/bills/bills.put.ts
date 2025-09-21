import { BillsService } from "~/server/services/bills/BillsService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BillsService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
