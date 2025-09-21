import { MyCarrentService } from "~/server/services/mycarrent/MyCarrentService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCarrentService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
