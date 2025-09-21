import { CarrentDetailService } from "~/server/services/carrent_detail/CarrentDetailService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CarrentDetailService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
