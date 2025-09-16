import { EmpPermissionService } from "~/server/services/employee/empPermission.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new EmpPermissionService();
  return await service.createPermission(body);
});
