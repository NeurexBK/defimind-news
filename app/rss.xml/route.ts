import generatedNews from "@/data/generated-news.json"

export async function GET(){

 const xml = `

 <rss version="2.0">

 <channel>

 <title>DefiMind</title>

 <link>https://defimindnews.cloud</link>

 <description>Crypto Intelligence</description>

 ${generatedNews.map(item=>`

 <item>

 <title>${item.title}</title>

 <link>
 https://defimindnews.cloud/noticias/${item.slug}
 </link>

 <description>${item.excerpt}</description>

 </item>

 `).join("")}

 </channel>

 </rss>
 `

 return new Response(xml,{

  headers:{
   "Content-Type":"application/xml"
  }

 })

}
