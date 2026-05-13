import OpenAI from "openai"

const openai = new OpenAI({
 apiKey:process.env.OPENAI_API_KEY
})

export async function generateArticle(content:string){

 const response = await openai.chat.completions.create({

  model:"gpt-4o-mini",

  messages:[

   {
    role:"system",
    content:`

    Você é a Neurex AI.

    Gere notícias premium sobre crypto.

    Faça:
    - título forte
    - resumo
    - análise de impacto
    - SEO
    - linguagem moderna
    - explicação simples

    `
   },

   {
    role:"user",
    content
   }

  ]

 })

 return response.choices[0].message.content

}
