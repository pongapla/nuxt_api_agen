import { ContactTeamTelService } from "~/server/services/contactteam_tel/ContactTeamTelService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ContactTeamTelService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
