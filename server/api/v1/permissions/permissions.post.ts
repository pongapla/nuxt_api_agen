import { PermissionService } from "~/server/services/permissions/PermissionService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new PermissionService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
