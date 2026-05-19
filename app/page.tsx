k"use client"

import Newsletter from "@/components/Newsletter"
import SearchBar from "@/components/SearchBar"
import { useEffect, useState } from "react"
import Trending from "@/components/Trending"
import Ticker from "@/components/Ticker"
import Header from "@/components/Header"
import TrendingMarkets from "@/components/TrendingMarkets"
import { motion } from "framer-motion"

export default function Home() {

  const [search, setSearch] = useState("")

  const [market, setMarket] = useState<any[]>([])

  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {

    async function loadMarket() {

      try {

        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        )

        const data = await response.json()

        setMarket(data)

      } catch (error) {

        console.log(error)

      }

    }

    async function loadArticles() {

      try {

        const response = await fetch("/api/articles")

        const data = await response.json()

        setArticles(Array.isArray(data) ? data : [])

      } catch (error) {

        console.log(error)

      }

    }

    loadMarket()

    loadArticles()

  }, [])

  const filteredNews = Array.isArray(articles)

    ? articles.filter((item) => {

        const query = search.toLowerCase()

        return (

          item.title?.toLowerCase().includes(query) ||

          item.excerpt?.toLowerCase().includes(query) ||

          item.content?.toLowerCase().includes(query)

        )

      })

    : []

  return (

    <main className="
    min-h-screen
    bg-[#030712]
    text-white
    overflow-x-hidden
    ">

      <div className="
      fixed
      inset-0
      bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_45%)]
      pointer-events-none
      z-0
      " />

      <Header />

      <Ticker coins={market} />

      <section
        id="noticias"
        className="
        max-w-7xl
        mx-auto
        px-6
        pb-24
        pt-12
        relative
        z-10
        "
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            mb-8
            backdrop-blur-xl
            "
          >

            🚀 Financial Intelligence Platform

          </div>

          <h1
            className="
            text-6xl
            md:text-7xl
            font-black
            tracking-tight
            leading-[1.02]
            mb-8
            "
          >

            Inteligência Financeira
            <br />

            <span className="
            bg-gradient-to-r
            from-purple-400
            to-violet-200
            bg-clip-text
            text-transparent
            ">

              em Tempo Real

            </span>

          </h1>

          <p
            className="
            text-xl
            text-white/70
            leading-9
            max-w-2xl
            mb-12
            "
          >

            Crypto, Wall Street, IA,
            ETFs, macroeconomia e
            mercados globais em um
            único feed inteligente.

          </p>

          <SearchBar
            onSearch={setSearch}
          />

          <div className="
          flex
          items-center
          gap-4
          mt-10
          flex-wrap
          ">

            <a
              href="#noticias"
              className="
              inline-flex
              items-center
              justify-center
              bg-gradient-to-r
              from-purple-600
              to-violet-600
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-purple-500/20
              transition-all
              duration-300
              px-8
              py-4
              rounded-2xl
              font-bold
              text-lg
              "
            >

              Explorar Notícias

            </a>

            <div className="
            text-sm
            text-white/40
            ">
              Atualizado ao vivo • IA + Dados Financeiros
            </div>

          </div>

        </motion.div>

      </section>

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        pb-24
        relative
        z-10
        "
      >

        <div
          className="
          flex
          items-center
          justify-between
          mb-12
          flex-wrap
          gap-4
          "
        >

          <div>

            <h2 className="
            text-4xl
            font-black
            tracking-tight
            ">
              Últimas Notícias
            </h2>

            <p className="
            text-white/50
            mt-2
            ">
              Mercado financeiro atualizado em tempo real
            </p>

          </div>

          <div className="
          flex
          items-center
          gap-2
          text-emerald-400
          text-sm
          bg-emerald-500/10
          border
          border-emerald-500/20
          px-4
          py-2
          rounded-full
          ">

            <div className="
            w-2
            h-2
            rounded-full
            bg-emerald-400
            animate-pulse
            " />

            Atualizado ao vivo

          </div>

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-7
          "
        >

          {Array.isArray(filteredNews) && filteredNews.map((item, index) => (

            <motion.a
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.03
              }}
              key={index}
              href={/noticias/${item?.slug}}
              className="
              group
              relative
              overflow-hidden
              block
              p-7
              rounded-3xl
              border
              border-white/5
              bg-gradient-to-b
              from-white/[0.06]
              to-white/[0.02]
              hover:border-purple-500/30
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-purple-500/10
              transition-all
              duration-300
              backdrop-blur-xl
              "
            >

              <div className="
              absolute
              inset-0
              bg-gradient-to-br
              from-purple-500/0
              to-purple-500/5
              opacity-0
              group-hover:opacity-100
              transition
              duration-300
              " />

              <div
                className="
                relative
                z-10
                flex
                justify-between
                items-center
                mb-5
                "
              >

                <div
                  className="
                  text-purple-400
                  text-xs
                  font-semibold
                  tracking-wide
                  uppercase
                  "
                >
                  Neurex AI
                </div>

                <div
                  className="
                  text-white/40
                  text-xs
                  capitalize
                  "
                >
                  {item?.sentiment}
                </div>

              </div>

              <h2
                className="
                relative
                z-10
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                mb-5
                group-hover:text-purple-200
                transition
                "
              >
                {item?.title}
              </h2>

              <p
                className="
                relative
                z-10
                text-white/65
                leading-7
                text-[15px]
                "
              >
                {item?.excerpt}
              </p>

              <div className="
              relative
              z-10
              flex
              items-center
              justify-between
              mt-8
              pt-6
              border-t
              border-white/5
              ">

                <div className="
                text-xs
                text-white/35
                ">
                  Economia Global
                </div>

                <div className="
                text-purple-300
                text-sm
                font-medium
                group-hover:translate-x-1
                transition
                ">
                  Ler mais →
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </section>

      <div className="mt-10">

        <Trending coins={market || []} />

      </div>

      <TrendingMarkets />

      <Newsletter />

      <footer
        className="
        border-t
        border-white/5
        py-14
        mt-24
        relative
        z-10
        "
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          "
        >

          <div>

            <div className="
            text-3xl
            font-black
            tracking-tight
            ">
              DefiMind
            </div>

            <div className="
            text-white/40
            mt-3
            max-w-md
            leading-7
            ">
              Financial Intelligence Platform
              focada em crypto, economia,
              IA e mercados globais em tempo real.
            </div>

          </div>

          <div
            className="
            flex
            items-center
            flex-wrap
            gap-6
            text-white/50
            "
          >

            <a
              href="/privacy-policy"
              className="hover:text-purple-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-purple-400 transition"
            >
              Terms
            </a>

            <a
              href="/contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>

            <a
              href="/about"
              className="hover:text-purple-400 transition"
            >
              About
            </a>

          </div>

        </div>

      </footer>

    </main>

  )

}
