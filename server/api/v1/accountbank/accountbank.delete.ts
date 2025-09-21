import { AccountBankService } from "~/server/services/accountbank/AccountBankService";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = Number(query.code);
  const service = new AccountBankService();
  const res = await service.delete(code);
  return { status: "success", data: res };
});
