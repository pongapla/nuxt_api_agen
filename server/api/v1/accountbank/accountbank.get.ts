import { AccountBankService } from "~/server/services/accountbank/AccountBankService";

export default defineEventHandler(async (event) => {
  const service = new AccountBankService();
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;

  if (code) {
    const rec = await service.getById(code);
    if (!rec) {
      return { status: "error", message: "Record not found" };
    }
    return { status: "success", data: rec };
  }

  const all = await service.getAll();
  return { status: "success", data: all };
});
