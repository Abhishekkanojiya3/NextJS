import {NextResponse} from "next/server";

const DataUrl = 'https://jsonplaceholder.typicode.com/posts'
export const GET = async(req) => {
    try{
        const res = await fetch(DataUrl);
        const post = await res.json()

        return NextResponse.json(post)

    }catch(err){
       return NextResponse.json({message: 'Error', err})
    }
}