import { MyCruiseShipService } from "~/server/services/mycruise_ship/MyCruiseShipService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCruiseShipService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
