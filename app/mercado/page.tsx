import Header from "@/components/Header"
import Market from "@/components/Market"
import { getMarket } from "@/lib/coingecko"

export default async function Mercado(){

 const market = await getMarket()

 return(

  <main className="min-h-screen">

   <Header />

   <section className="
   max-w-7xl
   mx-auto
   px-6
   py-20
   ">

    <h1 className="
    text-5xl
    font-black
    mb-10
    ">
     Mercado Crypto
    </h1>

    <Market coins={market} />

   </section>

  </main>

 )

}
