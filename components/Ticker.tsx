type Props = {
 coins:any[]
}

export default function Ticker({coins}:Props){

 return(

  <div
   id="mercado"
   className="
   border-y
   border-white/5
   bg-black/20
   backdrop-blur-xl
   "
  >

   <div className="
   max-w-7xl
   mx-auto
   px-6
   py-3
   flex
   items-center
   gap-10
   overflow-x-auto
   ">

    {coins.slice(0,3).map((coin:any)=>(

     <div
      key={coin.id}
      className="
      flex
      items-center
      gap-3
      whitespace-nowrap
      "
     >

      <div className="font-bold">
       {coin.symbol.toUpperCase()}
      </div>

      <div className="text-white/70">
       ${coin.current_price.toLocaleString()}
      </div>

      <div className="
      text-sm
      text-purple-400
      ">
       {coin.price_change_percentage_24h?.toFixed(2)}%
      </div>

     </div>

    ))}

   </div>

  </div>

 )

}
