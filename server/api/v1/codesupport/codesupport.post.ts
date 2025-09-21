import { CodeSupportService } from "~/server/services/codesupport/CodeSupportService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CodeSupportService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
