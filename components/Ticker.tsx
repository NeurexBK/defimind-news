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

    ...(coins || []).map((coin:any)=>({

      symbol:coin.symbol?.toUpperCase(),

      price:`$${Number(
        coin.current_price || 0
      ).toLocaleString()}`,

      change:`${Number(
        coin.price_change_percentage_24h || 0
      ).toFixed(2)}%`

    })),

    ...rwaAssets

  ]

  return(

    <div
      className="
      border-y
      border-white/10
      overflow-x-auto
      whitespace-nowrap
      "
    >

      <div
        className="
        flex
        gap-10
        px-6
        py-4
        min-w-max
        "
      >

        {allAssets.map((item,index)=>(

          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            "
          >

            <div className="font-bold text-xl">
              {item.symbol}
            </div>

            <div className="text-white/70">
              {item.price}
            </div>

            <div
              className={
                item.change.includes("-")
                ? "text-red-400"
                : "text-green-400"
              }
            >
              {item.change}
            </div>

          </div>

        ))}

      </div>

    </div>

  )

}
