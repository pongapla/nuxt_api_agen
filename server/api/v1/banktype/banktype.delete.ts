import { BankTypeService } from "~/server/services/banktype/BankTypeService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BankTypeService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
