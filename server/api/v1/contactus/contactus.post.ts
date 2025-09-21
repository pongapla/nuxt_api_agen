import { ContactUsService } from "~/server/services/contactus/ContactUsService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ContactUsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
