import { MyCarrentDetailService } from "~/server/services/mycarrent_detail/MyCarrentDetailService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyCarrentDetailService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
