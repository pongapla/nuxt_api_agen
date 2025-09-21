import { AboutUsService } from "~/server/services/aboutus/AboutUsService";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = Number(query.code);
  const body = await readBody(event);
  const service = new AboutUsService();
  const rec = await service.update(code, body);
  return { status: "success", data: rec };
});
