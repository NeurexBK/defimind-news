import cron from "node-cron"

import "./ai-news"

console.log("DefiMind AI iniciada...")

cron.schedule("*/15 * * * *", async () => {

  console.log("Gerando notícia automática...")

  await import("./ai-news")

})
