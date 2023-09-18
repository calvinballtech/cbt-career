import { NextResponse } from "next/server";
import { availablePositions } from "../data";

export async function GET(req: Request, { params }: any) {
  const { id }: any = params;
  const data = availablePositions.filter((item: any) => item.id == id);
  
  return NextResponse.json({ job: data.length ? data[0] : null })
}