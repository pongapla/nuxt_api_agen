import { TbDocumentHdService } from "~/server/services/tb_document_hd/TbDocumentHdService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TbDocumentHdService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
