import { createBot, logger } from '@discordeno/bot'
import { config } from 'dotenv'
config()

const bot = createBot({
  token: process.env.TOKEN,
  events: {},
})

logger.info(`[Startup] Starting bot.`)
await bot.start()
logger.info(`[Startup] Bot started successfully.`)
