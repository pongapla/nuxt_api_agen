import { BanksService } from "~/server/services/banks/BanksService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BanksService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
