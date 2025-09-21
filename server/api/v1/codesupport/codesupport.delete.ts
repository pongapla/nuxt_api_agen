import { CodeSupportService } from "~/server/services/codesupport/CodeSupportService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CodeSupportService();
  const rec = await service.delete(Number(code));
  return { status: "success", data: rec };
});
