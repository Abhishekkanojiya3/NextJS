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

export const POST = async(request) => {
         try{
            const {title, body, userId} = await request.json()
            const res = await fetch(DataUrl,{
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body:JSON.stringify({
                    title,
                    body,
                    userId
                })

            })
            if(res.status === 201){
                const newPost = await res.json();
                return NextResponse.json(newPost)
            }else{
                console.log("error h re")
                return NextResponse.error("POST request failed")
            }

         }catch(err){
            return NextResponse.json({message: 'Error', err})

         }
}

export const PUT = async(req)=> {
    try{
        const {id, title, body, userId} = await req.json()
        const res = await fetch(`${DataUrl}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                id,
                title,
                body,
                userId
            })
        })
        if(res.status === 200){
            const updatedPost = await res.json()
            return NextResponse.json(updatedPost)
        }else{
            return NextResponse.error("put request failed")
        }

    }catch(err){
        return NextResponse.json({message: 'Error', err})

    }
}

export const DELETE = async(req) => {
    try{

        const {id} = await req.json();
        const res = await fetch(`${DataUrl}${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            },
        })
        return NextResponse.json("Data Deleted")

    }catch(err){
        return NextResponse.json({message: 'Error', err})

    }
}