import { EmpPermissionService } from "~/server/services/emp_permission.service";

export default defineEventHandler(async (event) => {
  const service = new EmpPermissionService();

  // ดึงค่า query string ?code=1
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;

  if (code) {
    const perm = await service.getPermissionById(code);
    if (!perm) {
      return { status: "error", message: "Permission not found" };
    }
    return { status: "success", data: perm };
  }

  // ถ้าไม่มี code → คืนค่า array ทั้งหมด
  return { status: "success", data: await service.getAllPermissions() };
});
