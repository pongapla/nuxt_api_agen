import { CarrentHeaderService } from "~/server/services/carrent_header/CarrentHeaderService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CarrentHeaderService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
