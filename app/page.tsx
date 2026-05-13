
import { news } from "@/data/news"
import Market from "@/components/Market"
import { getMarket } from "@/lib/coingecko"
import Ticker from "@/components/Ticker"
import Header from "@/components/Header"
import NewsCard from "@/components/NewsCard"
import { getNews } from "@/lib/rss"

export default async function Home(){
  
  const market = await getMarket()
  const news = await getNews()

  return(

    <main className="min-h-screen">

      <Header />
      
      <Ticker coins={market} />
      <section className="
      max-w-7xl
      mx-auto
      px-6
      py-24
      ">

        <div className="max-w-3xl">

          <div className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-purple-500/10
          text-purple-400
          mb-6
          ">
            🚀 Crypto Intelligence
          </div>

          <h1 className="
          text-6xl
          font-black
          leading-tight
          mb-6
          ">
            Notícias Crypto
            em Tempo Real
          </h1>

          <p className="
          text-xl
          text-white/70
          mb-10
          ">
            Tudo sobre Bitcoin,
            Ethereum, ETFs,
            DeFi e IA.
          </p>

          <button className="
          glow
          bg-purple-600
          px-8
          py-4
          rounded-2xl
          font-bold
          text-lg
          ">
            Explorar Agora
          </button>

        </div>


      </section>

      <section className="
      max-w-7xl
      mx-auto
      px-6
      pb-20
      ">

        <div className="
        flex
        items-center
        justify-between
        mb-10
        ">
          <h2 className="text-3xl font-bold">
            Últimas Notícias
          </h2>

          <div className="text-purple-400">
            Atualizado ao vivo
          </div>
        </div>

        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        ">

{news.map((item,index)=>(

 <NewsCard
  key={index}
  title={item.title}
  excerpt={item.excerpt}
  sentiment={item.sentiment}
  slug={item.slug}
 />

))}
        </div>

      </section>

    </main>

  )

}
