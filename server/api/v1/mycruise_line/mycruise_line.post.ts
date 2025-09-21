import { MyCruiseLineService } from "~/server/services/mycruise_line/MyCruiseLineService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseLineService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
