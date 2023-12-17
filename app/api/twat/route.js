import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  // Gets all TWATs from the database
  try {
    const twat = await prisma.twat.findMany();
    return NextResponse.json(twat, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Error fetching TWATs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "No Body provided" }, { status: 400 });
    }

    //console.log(body)
    const {
      date,
      title,
      intro,
      featuredRaid,
      featuredNightfall,
      featuredGuardian,
    } = body;

    if (
      !date ||
      !title ||
      !intro ||
      !featuredRaid ||
      !featuredNightfall ||
      !featuredGuardian
    ) {
      return NextResponse.json(
        { error: "Missing body parameters" },
        { status: 400 }
      );
    }

    const jsDate = new Date(date); // convert date string to date object

    const existingTwat = await prisma.twat.findMany({
      where: {
        date: jsDate,
      },
    });

    if (existingTwat.length > 0) {
      return NextResponse.json(
        { error: "There already exists a TWAT with this date" },
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
  } catch {
    return NextResponse.json({ error: "Error creating TWAT" }, { status: 500 });
  }
}
