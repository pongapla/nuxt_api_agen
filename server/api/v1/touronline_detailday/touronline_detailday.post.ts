import { TouronlineDetaildayService } from "~/server/services/touronline_detailday/TouronlineDetaildayService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TouronlineDetaildayService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
