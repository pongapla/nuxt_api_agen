import { BankAccService } from "~/server/services/bankacc/BankAccService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BankAccService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
