import { MyCarrentTypeService } from "~/server/services/mycarrent_type/MyCarrentTypeService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCarrentTypeService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
