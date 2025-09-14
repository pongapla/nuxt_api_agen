import { EmpPermissionService } from "~/server/services/emp_permission.service";

export default defineEventHandler(async (event) => {
  const code = Number(getQuery(event).code); // /api/v1/emp/emp_permission?code=1
  const service = new EmpPermissionService();
  return await service.deletePermission(code);
});
