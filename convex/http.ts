import { httpRouter } from "convex/server";
import { createRouteHandler } from "uploadthing/convex-helpers";
import { internal } from "./_generated/api";


const http = httpRouter();

createRouteHandler(http, internal.uploadthing.handler);

export default http;
