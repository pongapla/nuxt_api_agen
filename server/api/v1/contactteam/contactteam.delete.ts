import { ContactTeamService } from "~/server/services/contactteam/ContactTeamService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new ContactTeamService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
