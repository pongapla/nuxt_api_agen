import { BankTypeService } from "~/server/services/banktype/BankTypeService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BankTypeService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
