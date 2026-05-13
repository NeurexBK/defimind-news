type Props = {

  coins:any[]

}

export default function Trending({
  coins
}:Props){

  return(

 <section
 id="trending"
 className="
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

        <h2 className="
        text-3xl
        font-bold
        ">
          🔥 Trending
        </h2>

        <div className="
        text-purple-400
        ">
          Mercado em movimento
        </div>

      </div>

      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      ">

        {coins.slice(0,6).map((coin,index)=>(

          <div
            key={index}
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            hover:border-purple-500
            transition
            duration-300
            "
          >

            <div className="
            flex
            items-center
            gap-4
            mb-4
            ">

              <img
                src={coin.image}
                alt={coin.name}
                className="
                w-12
                h-12
                rounded-full
                "
              />

              <div>

                <h3 className="
                text-xl
                font-bold
                ">
                  {coin.name}
                </h3>

                <div className="
                text-white/50
                uppercase
                ">
                  {coin.symbol}
                </div>

              </div>

            </div>

            <div className="
            text-3xl
            font-black
            mb-2
            ">
              ${coin.current_price}
            </div>

            <div className={`
            text-lg
            font-bold
            ${
              coin.price_change_percentage_24h > 0
              ? "text-green-400"
              : "text-red-400"
            }
            `}>

              {coin.price_change_percentage_24h?.toFixed(2)}%

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

