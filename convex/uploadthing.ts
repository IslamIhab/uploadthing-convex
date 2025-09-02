"use node";

import { createInternalAction, createUploadthing, FileRouter } from "uploadthing/convex";
import crypto from "node:crypto";
import { api } from "./_generated/api";

globalThis.crypto = crypto as Crypto;

const f = createUploadthing();

const router = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async (opts) => {
      const identity = await opts.ctx.auth.getUserIdentity();

      return { userId: identity?.subject };
    })
    .onUploadComplete(async (opts) => {
      await opts.ctx.runMutation(api.media.add, { url: opts.file.ufsUrl });
      return { uploadedBy: opts.metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof router;

export const handler = createInternalAction({ router });
