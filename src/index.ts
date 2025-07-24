import handler from "./api";
import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = process.env.PORT || 5000;

createServer((req: IncomingMessage, res: ServerResponse) => {
  // @ts-ignore
  handler(req, res);
}).listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
