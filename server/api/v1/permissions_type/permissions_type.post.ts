import { PermissionsTypeService } from "~/server/services/permissions_type/PermissionsTypeService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PermissionsTypeService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
