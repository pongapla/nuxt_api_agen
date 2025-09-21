import { MenusService } from "~/server/services/menus/MenusService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MenusService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
