import fs, { createReadStream } from "fs";

import { Storage } from "@google-cloud/storage";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const storage = new Storage({
    keyFilename: process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEYFILE as string,
  });

  const formData = await req.formData();
  const file = formData.get("file") as Blob | null;
  const buffer = Buffer.from(await file?.arrayBuffer()!);
  fs.writeFileSync("sample.png", buffer);

  try {
    const bucket = process.env.GCS_BUCKET as string;
    const dest = "cbt-careers/sample-uploaded.png";
    let result = await storage.bucket(bucket).upload("sample.png", {
      destination: dest,
      gzip: true,
      metadata: {
        cacheControl: "public, max-age=31536000",
      },
    });

    fs.unlinkSync("sample.png");

    let [file]: any = await storage.bucket(bucket).file(dest).download();

    fs.writeFileSync("sample-uploaded.png", file);

    return new NextResponse(file as Blob, {
      status: 200,
      statusText: "ok",
      headers: {
        "Content-Type": "image/*",
      },
    });
  } catch (e: any) {
    console.dir(e);
    return NextResponse.json({ status: "NOT OK" });
  }
}
