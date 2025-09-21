import { BanksService } from "~/server/services/banks/BanksService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BanksService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
