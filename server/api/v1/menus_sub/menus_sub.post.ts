import { MenusSubService } from "~/server/services/menus_sub/MenusSubService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MenusSubService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
