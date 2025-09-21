import { DataDicsService } from "~/server/services/datadics/DataDicsService";
import { getQuery, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;
  const body = await readBody(event);

  if (!code) return { status: "error", message: "Code is required" };
  const service = new DataDicsService();
  const rec = await service.update(code, body);
  return { status: "success", data: rec };
});
