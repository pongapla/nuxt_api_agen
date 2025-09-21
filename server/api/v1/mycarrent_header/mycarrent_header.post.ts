import { MyCarrentHeaderService } from "~/server/services/mycarrent_header/MyCarrentHeaderService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCarrentHeaderService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
