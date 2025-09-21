import { CarrentSlideService } from "~/server/services/carrent_slide/CarrentSlideService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CarrentSlideService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
