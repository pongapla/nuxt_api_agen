import { BankAccService } from "~/server/services/bankacc/BankAccService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BankAccService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
