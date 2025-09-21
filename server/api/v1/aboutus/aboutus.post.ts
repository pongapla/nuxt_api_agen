import { AboutUsService } from "~/server/services/aboutus/AboutUsService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new AboutUsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
