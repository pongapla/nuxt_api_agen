import { EmpPermissionService } from "~/server/services/employee/empPermission.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const code = Number(getQuery(event).code); // /api/v1/emp/emp_permission?code=1
  const service = new EmpPermissionService();
  return await service.updatePermission(code, body);
});
