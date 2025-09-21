import { ContactTeamTelService } from "~/server/services/contactteam_tel/ContactTeamTelService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new ContactTeamTelService();
  const rec = await service.delete(Number(code));
  return { status: "success", data: rec };
});
