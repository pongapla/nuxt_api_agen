import { ProvinceService } from "~/server/services/province/ProvinceService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ProvinceService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
