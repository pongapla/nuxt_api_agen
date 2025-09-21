import { TbDocumentHdService } from "~/server/services/tb_document_hd/TbDocumentHdService";
import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id ? Number(query.id) : null;

  if (!id) return { status: "error", message: "ID is required" };
  const service = new TbDocumentHdService();
  const result = await service.delete(id);
  return { status: "success", data: result };
});
