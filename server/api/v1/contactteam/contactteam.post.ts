import { ContactTeamService } from "~/server/services/contactteam/ContactTeamService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ContactTeamService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
