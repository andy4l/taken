import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  const twat = await prisma.twat.findMany();
  return NextResponse.json(twat, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  //console.log(body)
  const {
    date,
    title,
    intro,
    featuredRaid,
    featuredNightfall,
    featuredGuardian,
  } = body;

  const jsDate = new Date(date);
  const existingTwat = await prisma.twat.findMany({
    where: {
      date: jsDate,
    },
  });
  if (existingTwat.length > 0) {
    return NextResponse.json(
      { error: "There already exists a twat with this date" },
      { status: 400 }
    );
  }

  const twatCreated = await prisma.twat.create({
    data: {
      date: jsDate,
      title: title,
      intro: intro,
      featuredRaid: featuredRaid,
      featuredNightfall: featuredNightfall,
      featuredGuardian: featuredGuardian,
    },
  });

  return NextResponse.json(twatCreated);
}
