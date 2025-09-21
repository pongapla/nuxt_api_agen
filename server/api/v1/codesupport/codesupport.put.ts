import { CodeSupportService } from "~/server/services/codesupport/CodeSupportService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new CodeSupportService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
