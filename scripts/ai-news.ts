import Parser from "rss-parser"
import OpenAI from "openai"
import { createClient } from "@supabase/supabase-js"

const parser = new Parser()

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY

})

const supabase = createClient(

  process.env.NEXT_PUBLIC_SUPABASE_URL!,

  process.env.SUPABASE_SERVICE_ROLE_KEY!

)

async function generateNews(){

const feeds = [

"https://techcrunch.com/feed/",

"https://www.theverge.com/rss/index.xml",

"https://feeds.arstechnica.com/arstechnica/index",

"https://www.wired.com/feed/rss",

"https://decrypt.co/feed",

  "https://feeds.finance.yahoo.com/rss/2.0/headline?s=%5EGSPC&region=US&lang=en-US",

  "https://www.coindesk.com/arc/outboundfeeds/rss/",

  "https://cointelegraph.com/rss",

  "https://www.cnbc.com/id/100003114/device/rss/rss.html",

  "https://feeds.a.dj.com/rss/RSSMarketsMain.xml"

]

let allItems:any[] = []

for(const url of feeds){

  try{

    const feed = await parser.parseURL(url)

    allItems.push(...feed.items)

  }catch(error){

    console.log("Erro RSS:",url)

  }

}

const keywords = [

  "bitcoin",
  "ethereum",
  "solana",
  "xrp",
  "crypto",
  "etf",
  "fed",
  "inflation",
  "interest rates",
  "recession",
  "wall street",
  "nasdaq",
  "s&p 500",

  "openai",
  "anthropic",
  "nvidia",
  "xai",
  "gemini",
  "meta ai",
  "artificial intelligence",
  "ai startup",

  "uniswap",
  "aave",
  "hyperliquid",
  "jupiter",
  "pancakeswap",
  "dex",
  "defi",

  "stripe",
  "revolut",
  "robinhood",
  "fintech",
  "startup",
  "venture capital",

  "hack",
  "liquidation",
  "market crash",
  "breaking",

]


const scoredItems = allItems.map((item)=>{

  const text = `

    ${item.title || ""}

    ${item.contentSnippet || ""}

  `.toLowerCase()

  let score = 0

  keywords.forEach((keyword)=>{

    if(text.includes(keyword)){

      score += 10

    }

  })

  return {

    item,

    score

  }

})

scoredItems.sort((a,b)=> b.score - a.score)

const topItems = scoredItems.slice(0,10)

const randomIndex = Math.floor(
  Math.random() * topItems.length
)

const randomItem = topItems[randomIndex]?.item

console.log("Notícia escolhida:")
console.log(randomItem?.title)



if(!randomItem){

  console.log("Nenhuma notícia encontrada.")

  return

}


if(!randomItem) return

  const prompt = `

  Crie uma notícia profissional em português sobre:

${randomItem.title}

  Resumo:

${randomItem.contentSnippet}

  Gere:

  - título
  - resumo curto
  - conteúdo profissional
  - sentimento (positivo, negativo ou neutro)

  Retorne em JSON.

  `

  const response = await openai.chat.completions.create({

    model: "gpt-4o-mini",

    messages: [

      {

        role: "user",

        content: prompt

      }

    ]

  })

  const text = response.choices[0].message.content || "{}"

console.log(text)

const cleaned = text

  .replace(/```json/g,"")

  .replace(/```/g,"")

  .trim()

const parsed = JSON.parse(cleaned)


const title = parsed.title || parsed.titulo

const summary = parsed.summary || parsed.resumo_curto

const content = parsed.content || parsed.conteudo_profissional

const sentiment = parsed.sentiment || parsed.sentimento

const slug = title

  .toLowerCase()

  .replace(/[^a-z0-9]+/g,"-")


const sourceTitle = randomItem.title
  ?.toLowerCase()
  .slice(0,80)

const { data: existing } = await supabase

  .from("articles")

  .select("id,title")

if(existing){

  const duplicated = existing.some((article:any)=>{

    return article.title
      ?.toLowerCase()
      .includes(sourceTitle)

  })

  if(duplicated){

    console.log("Notícia parecida já existe.")

    return

  }

}

  await supabase

    .from("articles")

    .insert({

title: title,

      slug,


excerpt: summary,

content: content,
sentiment: sentiment,

      category: "Mercado",

      source: "Yahoo Finance"

    })

  console.log("Notícia publicada:", parsed.title)

}

generateNews()
