import { CarrentHeaderService } from "~/server/services/carrent_header/CarrentHeaderService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CarrentHeaderService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
