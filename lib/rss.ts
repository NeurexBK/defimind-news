import Parser from "rss-parser"

const parser = new Parser()

const feeds = [
 "https://cointelegraph.com/rss",
 "https://decrypt.co/feed",
 "https://www.coindesk.com/arc/outboundfeeds/rss/"
]

export async function getNews(){

 const articles:any[] = []

 for(const url of feeds){

  try{

   const feed = await parser.parseURL(url)

   const items = feed.items.map((item:any)=>({

    title:item.title,
    content:item.contentSnippet || "",
    link:item.link

   }))

   articles.push(...items)

  }catch(err){
   console.log(err)
  }

 }

 return articles.slice(0,12)

}
