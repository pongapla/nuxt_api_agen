import { CarrentHeaderService } from "~/server/services/carrent_header/CarrentHeaderService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CarrentHeaderService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
