import { httpRouter } from "convex/server";
import { createRouteHandler } from "uploadthing/convex-helpers";
import { internal } from "./_generated/api";
import corsRouter from "convex-helpers/server/cors";

const http = httpRouter();

const cors = corsRouter(http, {
  allowedOrigins: ["http://localhost:3000"],
});

createRouteHandler({ http: cors, internalAction: internal.uploadthing.handler });

export default http;
