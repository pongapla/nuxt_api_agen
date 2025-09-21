import { ZonetourService } from "~/server/services/zonetour/ZonetourService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ZonetourService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
