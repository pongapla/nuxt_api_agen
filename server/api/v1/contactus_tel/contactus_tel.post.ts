import { ContactUsTelService } from "~/server/services/contactus_tel/ContactUsTelService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ContactUsTelService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
