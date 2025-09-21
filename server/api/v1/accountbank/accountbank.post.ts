import { AccountBankService } from "~/server/services/accountbank/AccountBankService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new AccountBankService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
