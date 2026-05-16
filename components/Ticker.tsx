"use client"

export default function Ticker({ coins }: any){

  const rwaAssets = [

    {
      symbol:"ONDO",
      price:"$1.24",
      change:"+12.4%"
    },

    {
      symbol:"POLYX",
      price:"$0.42",
      change:"+8.1%"
    },

    {
      symbol:"XDC",
      price:"$0.09",
      change:"+5.8%"
    },

    {
      symbol:"XAUT",
      price:"$3 210",
      change:"+1.2%"
    },

    {
      symbol:"NASDAQ",
      price:"19 540",
      change:"+2.1%"
    },

    {
      symbol:"S&P500",
      price:"5 420",
      change:"+1.4%"
    }

  ]

  const allAssets = [

    ...coins.map((coin:any)=>({

      symbol:coin.symbol?.toUpperCase(),

      price:`$${Number(
        coin.current_price
      ).toLocaleString()}`,

      change:`${coin.price_change_percentage_24h?.toFixed(2)}%`

    })),

    ...rwaAssets

  ]

  return(

    <div
      className="
      border-y
      border-white/10
      overflow-hidden
      "
    >

      <div
        className="
        flex
        gap-10
        whitespace-nowrap
        py-4
        px-6
        overflow-x-auto
        "
      >

        {allAssets.map((item,index)=>(

          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            min-w-fit
            "
          >

            <div className="font-bold text-2xl">
              {item.symbol}
            </div>

            <div className="text-white/70 text-2xl">
              {item.price}
            </div>

            <div
              className={`
                text-xl
                ${
                  item.change.includes("-")
                  ? "text-red-400"
                  : "text-green-400"
                }
              `}
            >
              {item.change}
            </div>

          </div>

        ))}

      </div>

    </div>

  )

}
