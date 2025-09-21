import { ContactTeamTelService } from "~/server/services/contactteam_tel/ContactTeamTelService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new ContactTeamTelService();
  const rec = await service.update(Number(code), body);
  return { status: "success", data: rec };
});
