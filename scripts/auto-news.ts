import cron from "node-cron"

async function runNews(){

  console.log("Gerando notícia automática...")

  try{

    await import("./ai-news")

  }catch(error){

    console.log(error)

  }

}

console.log("DefiMind AI iniciada...")

runNews()

cron.schedule("*/10 * * * *", async ()=>{

  await runNews()

})
