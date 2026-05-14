import { NextResponse } from "next/server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(

 process.env.NEXT_PUBLIC_SUPABASE_URL!,

 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

)

export async function POST(req: Request){

 try{

  const body = await req.json()

  const email = body.email

  if(!email){

   return NextResponse.json({

    error:"Email obrigatório"

   },{ status:400 })

  }

  const { error } = await supabase

  .from("subscribers")

  .insert([

   {

    email

   }

  ])

  if(error){

   return NextResponse.json({

    error:error.message

   },{ status:500 })

  }

  return NextResponse.json({

   success:true

  })

 }catch(error){

  return NextResponse.json({

   error:"Erro interno"

  },{ status:500 })

 }

}
