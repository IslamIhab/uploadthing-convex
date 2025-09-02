import { generateUploadButton } from "@uploadthing/react";

import type { OurFileRouter } from "@/convex/uploadthing";
import { env } from "@/env";

export const UploadButton = generateUploadButton<OurFileRouter>({
  url: env.NEXT_PUBLIC_CONVEX_SITE_URL,
});
