import { MyCruiseService } from "~/server/services/mycruise/MyCruiseService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
