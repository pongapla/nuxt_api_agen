import { CarrentSlideService } from "~/server/services/carrent_slide/CarrentSlideService";

export default defineEventHandler(async (event) => {
  const service = new CarrentSlideService();
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;

  if (code) {
    const rec = await service.getById(code);
    if (!rec) return { status: "error", message: "Not found" };
    return { status: "success", data: rec };
  }

  const all = await service.getAll();
  return { status: "success", data: all };
});
