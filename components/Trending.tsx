type Props = {
  coins:any[]
}

export default function Trending({coins}:Props){

  if(!coins || coins.length === 0){

    return(

      <section
        id="trending"
        className="
        max-w-7xl
        mx-auto
        px-6
        pb-24
        "
      >

        <h2 className="
        text-4xl
        font-black
        mb-10
        ">
          🔥 Trending
        </h2>

        <div className="text-white/50">
          Carregando mercado...
        </div>

      </section>

    )

  }

  return(

    <section
      id="trending"
      className="
      max-w-7xl
      mx-auto
      px-6
      pb-24
      "
    >

      <h2 className="
      text-4xl
      font-black
      mb-10
      ">
        🔥 Trending
      </h2>

      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      ">

        {coins.slice(0,6).map((coin:any)=>(

          <div
            key={coin.id}
            className="
            p-6
            rounded-3xl
            border
            border-white/10
            bg-white/5
            "
          >

            <div className="
            flex
            items-center
            justify-between
            mb-4
            ">

              <div className="
              text-2xl
              font-black
              uppercase
              ">
                {coin.symbol}
              </div>

              <div className="
              text-purple-400
              ">
                #{coin.market_cap_rank}
              </div>

            </div>

            <div className="
            text-4xl
            font-black
            mb-4
            ">
              $
              {coin.current_price?.toLocaleString()}
            </div>

            <div className="
            text-green-400
            text-lg
            ">
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </div>

          </div>

        ))}

      </div>

    </section>

  )

}
