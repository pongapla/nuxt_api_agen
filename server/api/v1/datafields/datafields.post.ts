import { DataFieldsService } from "~/server/services/datafields/DataFieldsService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new DataFieldsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
