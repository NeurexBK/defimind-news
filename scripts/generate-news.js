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

    Você é um jornalista profissional
    especializado em:

    - Bitcoin
    - Ethereum
    - Solana
    - ETFs
    - Inteligência Artificial
    - Blockchain
    - Mercado institucional
    - Criptomoedas

    Gere notícias altamente profissionais,
    modernas, realistas e virais.

    IMPORTANTE:

    - Retorne apenas JSON válido
    - Não use markdown
    - Não explique nada
    - Não escreva texto fora do JSON

    O conteúdo deve parecer:
    - CoinDesk
    - Bloomberg
    - The Block
    - Decrypt

    Gere notícias:
    - muito realistas
    - com SEO otimizado
    - títulos fortes
    - linguagem profissional
    - português brasileiro
    - conteúdo humano
    - altamente clicável

    Retorne exatamente neste formato:

    {
      "slug":"",
      "title":"",
      "excerpt":"",
      "category":"",
      "sentiment":"",
      "content":""
    }

    Regras:

    slug:
    - minúsculo
    - usar hífens
    - sem espaços

    sentiment:
    - positivo
    - negativo
    - neutro

    category:
    - Bitcoin
    - Ethereum
    - ETFs
    - IA
    - Mercado
    - Altcoins

    content:
    - mínimo 4 parágrafos
    - extremamente profissional
    - parecer notícia real
    `
   },

   {
    role:"user",

    content:`
    Gere uma nova notícia viral sobre:

    - Bitcoin
    - Ethereum
    - ETFs
    - IA
    - Solana
    - Mercado institucional
    - adoção crypto
    - grandes empresas

    A notícia deve parecer publicada hoje.
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
