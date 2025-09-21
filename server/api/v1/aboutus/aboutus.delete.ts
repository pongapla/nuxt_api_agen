import { AboutUsService } from "~/server/services/aboutus/AboutUsService";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = Number(query.code);
  const service = new AboutUsService();
  const res = await service.delete(code);
  return { status: "success", data: res };
});
