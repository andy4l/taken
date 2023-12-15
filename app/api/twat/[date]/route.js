import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  //const twat = await prisma.twat.findMany()

  const { date } = params;
  const jsDate = new Date(date)
  const twat = await prisma.twat.findMany({
    where: {
      date: jsDate,
    },
  });

  return NextResponse.json(twat, { status: 200 });
}
