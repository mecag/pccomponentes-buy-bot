import { ICard } from './src/models'
import Bot from './src/app'

// credit/debit card info. This is not required, but be sure to have at least one card available in
// your account, or else the bot will fail at purchasing the product when it becomes available
const card: ICard = {
  name: 'AMADOR RIVAS LOPEZ',
  num: '5137422665338597',
  expiryDate: '0421',
  cvc: '668'
}

// initialize the bot class with personal data.
// refreshRate is the rate in milliseconds that the bot will refresh the page till stock is available. Default: 5000 milliseconds
// maxPrice is the maximum price you are willing to pay. If price goes above this the bot will not buy
// WARNING: Phone and credit card are unrequired fields. Delete them if you don't want to use them
const app = new Bot({
  email: 'ncxheth03e@safemail.icu',
  password: 'testpassword',
  card: card,
  link: 'https://www.pccomponentes.com/evga-geforce-rtx-3060-ti-ftw3-ultra-8gb-gddr6',
  maxPrice: 500,
  refreshRate: 1000,
  debug: false
})

app.run()
