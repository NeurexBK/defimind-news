export async function getMarket(){

  try{

    const response = await fetch(

      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",

      {
        next:{ revalidate:60 }
      }

    )

    if(!response.ok){

      throw new Error("Erro CoinGecko")

    }

    return response.json()

  }catch(error){

    console.log("CoinGecko falhou")

    return [

      {
        id:"bitcoin",
        symbol:"btc",
        current_price:108000,
        market_cap_rank:1,
        price_change_percentage_24h:2.4
      },

      {
        id:"ethereum",
        symbol:"eth",
        current_price:5200,
        market_cap_rank:2,
        price_change_percentage_24h:1.8
      },

      {
        id:"solana",
        symbol:"sol",
        current_price:240,
        market_cap_rank:5,
        price_change_percentage_24h:5.2
      },

      {
        id:"xrp",
        symbol:"xrp",
        current_price:2.8,
        market_cap_rank:6,
        price_change_percentage_24h:3.1
      },

      {
        id:"bnb",
        symbol:"bnb",
        current_price:890,
        market_cap_rank:4,
        price_change_percentage_24h:1.1
      },

      {
        id:"doge",
        symbol:"doge",
        current_price:0.41,
        market_cap_rank:8,
        price_change_percentage_24h:7.9
      }

    ]

  }

}
