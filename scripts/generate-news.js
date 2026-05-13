require("dotenv").config({
 path:".env.local"
})

const fs = require("fs")

const OpenAI = require("openai")

const openai = new OpenAI({
 apiKey:process.env.OPENAI_API_KEY
})

async function generateNews(){

 const completion = await openai.chat.completions.create({

  model:"gpt-4o-mini",

  messages:[

   {
    role:"system",

    content:`
    Você é a Neurex AI.

    Gere notícias crypto profissionais.

    Retorne JSON válido:
    {
      "slug":"",
      "title":"",
      "excerpt":"",
      "category":"",
      "sentiment":"",
      "content":""
    }
    `
   },

   {
    role:"user",

    content:`
    Gere uma notícia crypto nova sobre Bitcoin,
    Ethereum, Solana, ETFs ou mercado institucional.
    `
   }

  ]

 })

 const response =
 completion.choices[0].message.content

 const article = JSON.parse(response)

 let currentNews = []

 if(fs.existsSync("data/generated-news.json")){

  const file =
  fs.readFileSync(
   "data/generated-news.json",
   "utf-8"
  )

  currentNews = JSON.parse(file)

 }

 currentNews.unshift(article)

 fs.writeFileSync(

  "data/generated-news.json",

  JSON.stringify(currentNews,null,2)

 )

 console.log("✅ notícia criada")

}

generateNews()
