import { ContactTeamService } from "~/server/services/contactteam/ContactTeamService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new ContactTeamService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
