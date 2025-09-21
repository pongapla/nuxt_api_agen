import { CountryService } from "~/server/services/country/CountryService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CountryService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
