import connectDB from "@/lib/mongoDb";
import contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {name, email, message} = await req.json();
    try{
        await connectDB()
        await contact.create({name, email, message});

        return NextResponse.json({"msg": 'i am connected to server'})

    }
    catch(err){
           return NextResponse.json({'msg': "unable to send message"})
    }


}