import { MyCruiseCabinService } from "~/server/services/mycruise_cabin/MyCruiseCabinService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseCabinService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
