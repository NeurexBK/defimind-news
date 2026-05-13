type Props = {
 coins:any[]
}

export default function Market({coins}:Props){

 return(

  <div className="
  card
  p-6
  mt-10
  ">

   <h2 className="
   text-2xl
   font-bold
   mb-6
   ">
    Mercado Ao Vivo
   </h2>

   <div className="space-y-4">

    {coins.map((coin:any)=>(

     <div
      key={coin.id}
      className="
      flex
      items-center
      justify-between
      border-b
      border-white/5
      pb-4
      "
     >

      <div>

       <div className="font-bold">
        {coin.symbol.toUpperCase()}
       </div>

       <div className="text-white/50 text-sm">
        {coin.name}
       </div>

      </div>

      <div className="text-right">

       <div className="font-bold">
        ${coin.current_price}
       </div>

       <div className="
       text-sm
       ">

        {coin.price_change_percentage_24h?.toFixed(2)}%

       </div>

      </div>

     </div>

    ))}

   </div>

  </div>

 )

}
