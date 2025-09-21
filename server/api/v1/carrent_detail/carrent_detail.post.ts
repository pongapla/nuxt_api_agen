import { CarrentDetailService } from "~/server/services/carrent_detail/CarrentDetailService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CarrentDetailService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
