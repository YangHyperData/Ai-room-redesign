import { NextResponse } from "next/server";

export async function POST(req){

    const {imageUrl,roomType,designType,additionalReq} = await req.json();

    // Convert Image to AI Image
    



    return NextResponse.json({result:'Hello'})
}