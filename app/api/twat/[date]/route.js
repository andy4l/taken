import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    // console.log("api/twat/[date]");
    const { date } = params;
    // console.log(date);
    const jsDate = new Date(date);

    const twat = await prisma.twat.findMany({
      where: {
        date: jsDate,
      },
    });

    return NextResponse.json(twat, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Error fetching TWAT by date" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
  } catch {
    return NextResponse.json(
      { error: "Error updating TWAT by date" },
      { status: 500 }
    );
  }
}
