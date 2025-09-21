import { RegionthService } from "~/server/services/regionth/RegionthService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new RegionthService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
