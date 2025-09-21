import { MessagesService } from "~/server/services/messages/MessagesService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new MessagesService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
