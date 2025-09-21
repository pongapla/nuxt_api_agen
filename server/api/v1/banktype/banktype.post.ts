import { BankTypeService } from "~/server/services/banktype/BankTypeService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BankTypeService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
