"use client"

import Newsletter from "@/components/Newsletter"
import SearchBar from "@/components/SearchBar"
import { useEffect,useState } from "react"
import Trending from "@/components/Trending"
import Market from "@/components/Market"
import { getMarket } from "@/lib/coingecko"
import Ticker from "@/components/Ticker"
import Header from "@/components/Header"



 export default function Home(){

const [search,setSearch] = useState("")

const [market,setMarket] = useState<any[]>([])

const [articles,setArticles] = useState<any[]>([])

useEffect(()=>{

  async function loadMarket(){

    try{

      const response = await fetch(

        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

      )

      const data = await response.json()

      setMarket(data)

    }catch(error){

      console.log(error)

    }

  }

  async function loadArticles(){

    try{

      const response = await fetch("/api/articles")

      const data = await response.json()

      setArticles(data)

    }catch(error){

      console.log(error)

    }

  }

  loadMarket()

  loadArticles()

},[])



const filteredNews = articles.filter((item)=>{

  const query = search.toLowerCase()

  return (

    item.title.toLowerCase().includes(query) ||

    item.excerpt.toLowerCase().includes(query) ||

    item.content.toLowerCase().includes(query)

  )

})


  return(

    <main className="min-h-screen">

      <Header />

      <Ticker coins={market} />
       
<section
      id="noticias"
      className="
      max-w-7xl
      mx-auto
      px-6
      pb-20
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

    <SearchBar
      onSearch={setSearch}
    />

<a
 href="#noticias"
 className="
 glow
 inline-block
 bg-purple-600
 hover:bg-purple-500
 transition
 px-8
 py-4
 rounded-2xl
 font-bold
 text-lg
 "
>

  Explorar Agora

</a>


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
          {filteredNews.map((item,index)=>(

            <a
              key={index}
              href={`/noticias/${item.slug}`}
              className="
              block
              p-6
              rounded-3xl
              border
              border-white/10
              bg-white/5
              hover:border-purple-500
              transition
              duration-300
              "
            >

              <div className="
              flex
              justify-between
              mb-4
              ">

                <div className="
                text-purple-400
                text-xs
                ">
                  Por Neurex AI
                </div>

                <div className="
                text-white/50
                text-xs
                ">
                  {item.sentiment}
                </div>

              </div>

              <h2 className="
              text-2xl
              font-bold
              mb-4
              ">
                {item.title}
              </h2>

              <p className="
              text-white/70
              ">
                {item.excerpt}
              </p>

            </a>

          ))}

        </div>


      </section>

      <Trending coins={market || []} />

      <Newsletter />

      <footer
        className="
        border-t
        border-white/10
        py-10
        mt-20
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-wrap
          gap-6
          text-white/60
          "
        >

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms
          </a>

          <a href="/contact">
            Contact
          </a>

          <a href="/about">
            About
          </a>

        </div>

      </footer>

    </main>

  )

}
