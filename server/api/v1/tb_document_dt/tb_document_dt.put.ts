import { TbDocumentDtService } from "~/server/services/tb_document_dt/TbDocumentDtService";
import { getQuery, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id ? Number(query.id) : null;
  const body = await readBody(event);

  if (!id) return { status: "error", message: "ID is required" };
  const service = new TbDocumentDtService();
  const rec = await service.update(id, body);
  return { status: "success", data: rec };
});
