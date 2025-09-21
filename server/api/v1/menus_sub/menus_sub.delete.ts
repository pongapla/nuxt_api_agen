import { MenusSubService } from "~/server/services/menus_sub/MenusSubService";
import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const code = query.code ? Number(query.code) : null;

  if (!code) return { status: "error", message: "Code is required" };
  const service = new MenusSubService();
  const result = await service.delete(code);
  return { status: "success", data: result };
});
