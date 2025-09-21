import { CarrentDetailService } from "~/server/services/carrent_detail/CarrentDetailService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CarrentDetailService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
