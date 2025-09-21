import { LanguagesService } from "~/server/services/languages/LanguagesService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new LanguagesService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
