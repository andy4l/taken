import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
    try{
        const latestTwat = await prisma.twat.findFirst({
            orderBy: {date: "desc"}
        })

        //console.log(latestTwat)

        return NextResponse.json(latestTwat)
    } catch(error){
        console.log(error)
        return NextResponse.json({error: "Could not fetch data"}, {status: 500})
    }
}