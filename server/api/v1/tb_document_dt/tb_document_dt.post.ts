import { TbDocumentDtService } from "~/server/services/tb_document_dt/TbDocumentDtService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TbDocumentDtService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
