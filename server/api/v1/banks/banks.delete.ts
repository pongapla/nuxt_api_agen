import { BanksService } from "~/server/services/banks/BanksService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new BanksService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
