import { TourOnlineService } from "~/server/services/tour_online/TourOnlineService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TourOnlineService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
