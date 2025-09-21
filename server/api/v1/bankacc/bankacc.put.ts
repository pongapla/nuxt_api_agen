import { BankAccService } from "~/server/services/bankacc/BankAccService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BankAccService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
