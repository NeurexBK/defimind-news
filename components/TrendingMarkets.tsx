export default function TrendingMarkets(){

  const assets = [

    {
      name:"ONDO",
      change:"+14%"
    },

    {
      name:"POLYX",
      change:"+9%"
    },

    {
      name:"XDC",
      change:"+7%"
    },

    {
      name:"CFG",
      change:"+6%"
    },

    {
      name:"MKR",
      change:"+5%"
    }

  ]

  return(

    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-16
      "
    >

      <div
        className="
        flex
        items-center
        justify-between
        mb-8
        "
      >

        <h2
          className="
          text-4xl
          font-black
          "
        >
          🔥 Maiores Altas
        </h2>

        <div className="text-white/50">
          Atualizado em tempo real
        </div>

      </div>

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-5
        gap-6
        "
      >

        {assets.map((asset,index)=>(

          <div
            key={index}
            className="
            p-6
            rounded-3xl
            border
            border-white/10
            bg-white/5
            "
          >

            <div
              className="
              text-3xl
              font-black
              mb-4
              "
            >
              {asset.name}
            </div>

            <div
              className="
              text-green-400
              text-2xl
              font-bold
              "
            >
              {asset.change}
            </div>

          </div>

        ))}

      </div>

    </section>

  )

}
