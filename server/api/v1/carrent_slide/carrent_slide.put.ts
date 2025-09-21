import { CarrentSlideService } from "~/server/services/carrent_slide/CarrentSlideService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CarrentSlideService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
