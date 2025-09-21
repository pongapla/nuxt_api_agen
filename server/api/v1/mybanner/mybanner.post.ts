import { MyBannerService } from "~/server/services/mybanner/MyBannerService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MyBannerService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
