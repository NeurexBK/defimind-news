"use client"

export default function Ticker({ coins }: any) {

  const rwaAssets = [

    {
      symbol: "ONDO",
      price: "$1.24",
      change: "+12.4%",
    },

    {
      symbol: "POLYX",
      price: "$0.42",
      change: "+8.1%",
    },

    {
      symbol: "XDC",
      price: "$0.09",
      change: "+5.8%",
    },

    {
      symbol: "XAUT",
      price: "$3210",
      change: "+1.2%",
    },

  ]

  const allAssets = [

    ...(coins || []).map((coin: any) => ({

      symbol: coin.symbol?.toUpperCase(),

      price: `$${Number(
        coin.current_price || 0
      ).toLocaleString()}`,

      change: `${Number(
        coin.price_change_percentage_24h || 0
      ).toFixed(2)}%`,

    })),

    ...rwaAssets,

  ]

  return (

    <div
      className="
      overflow-hidden
      border-y
      border-white/10
      "
    >

      <div
        className="
        flex
        gap-8
        py-4
        whitespace-nowrap
        animate-pulse
        "
      >

        {[...allAssets, ...allAssets].map((item, index) => (

<div className="ticker-track py-4 gap-8 whitespace-nowrap">

            <div className="font-bold">
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
