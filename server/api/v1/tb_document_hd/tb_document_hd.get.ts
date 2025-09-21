import { TbDocumentHdService } from "~/server/services/tb_document_hd/TbDocumentHdService";
import { getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const service = new TbDocumentHdService();
  const query = getQuery(event);
  const id = query.id ? Number(query.id) : null;

  if (id) {
    const rec = await service.getById(id);
    if (!rec) return { status: "error", message: "Not found" };
    return { status: "success", data: rec };
  }

  const all = await service.getAll();
  return { status: "success", data: all };
});
