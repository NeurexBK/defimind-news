import OpenAI from "openai"

const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
})

export async function GET(){

 try{

  const response = await openai.chat.completions.create({

   model:"gpt-4o-mini",

   messages:[
    {
     role:"user",
     content:"Diga: Neurex AI online"
    }
   ]

  })

  return Response.json({
   success:true,
   data:response.choices[0].message.content
  })

 }catch(err){

  return Response.json({
   success:false,
   error:String(err)
  })

 }

}
