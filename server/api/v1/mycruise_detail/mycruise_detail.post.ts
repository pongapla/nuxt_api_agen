import { MyCruiseDetailService } from "~/server/services/mycruise_detail/MyCruiseDetailService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseDetailService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
