require("dotenv").config({
 path: ".env.local"
})

const fs = require("fs")

const Parser = require("rss-parser")

const OpenAI = require("openai")

const parser = new Parser()

const openai = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
})

const feeds = [

 "https://cointelegraph.com/rss",

 "https://decrypt.co/feed",

 "https://www.coindesk.com/arc/outboundfeeds/rss/"

]

async function generateNews(){

 try{

  let articles = []

  for(const url of feeds){

   const feed = await parser.parseURL(url)

   articles.push(...feed.items.slice(0,2))

  }

  const selected =
  articles[Math.floor(Math.random()*articles.length)]

  const prompt = `

  Você é a Neurex AI.

  Gere uma notícia COMPLETA sobre crypto.

  Regras:

  - português
  - título forte
  - resumo
  - análise
  - impacto no mercado
  - linguagem simples
  - estilo Cointelegraph
  - SEO forte

  Conteúdo:
  ${selected.title}

  ${selected.contentSnippet}

  `

  const response =
  await openai.chat.completions.create({

   model:"gpt-4o-mini",

   messages:[
    {
     role:"user",
     content:prompt
    }
   ]

  })

  const aiNews =
  response.choices[0].message.content

  const slug =
  selected.title
   .toLowerCase()
   .replace(/[^a-z0-9]+/g,"-")

  const newArticle = `

{
 slug:"${slug}",

 title:"${selected.title.replace(/"/g,"")}",

 excerpt:"Notícia analisada pela Neurex AI.",

 category:"Crypto",

 sentiment:"Bullish",

 content:\`
${aiNews}
 \`
},

`

  fs.appendFileSync(
   "./data/generated-news.txt",
   newArticle
  )

  console.log("✅ notícia criada")

 }catch(err){

  console.log(err)

 }

}

generateNews()
