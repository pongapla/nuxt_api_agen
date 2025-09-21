import { DataDicsService } from "~/server/services/datadics/DataDicsService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new DataDicsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
