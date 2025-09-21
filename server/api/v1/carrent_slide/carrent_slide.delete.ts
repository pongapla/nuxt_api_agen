import { CarrentSlideService } from "~/server/services/carrent_slide/CarrentSlideService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CarrentSlideService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
