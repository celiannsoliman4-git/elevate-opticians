// Checkout is handled by Spreadshop — printing, payment, and shipping all
// happen on their side.
export const STORE_URL = "https://elevateopticians.myspreadshop.com"

// Item types carried in the shop, shown as a preview on the site.
// Spreadshop's image CDN blocks hotlinking, so these are text only. To show
// real photos here, download them from Spreadshop into public/merch/ and
// fill in the `products` array below.
export const storeHighlights: { item: string; price: string }[] = [
  { item: "Hoodie", price: "$45.99" },
  { item: "Sweatshirt", price: "$41.99" },
  { item: "Ringer T-Shirt", price: "$27.99" },
  { item: "T-Shirt", price: "$24.99" },
  { item: "Coffee/Tea Mug", price: "$16.99" },
  { item: "Buttons (5-pack)", price: "$7.99" },
]

export type Product = {
  name: string
  price: string
  description: string
  image?: string // e.g. "/merch/tote.jpg" — put files in public/merch/
  url?: string // link to the item's Spreadshop listing
  soldOut?: boolean
}

// Optional: feature specific items with your own photos. Leave empty to show
// just the storefront preview above.
export const products: Product[] = []

// Shown above the shop. Set to "" to hide it.
export const shopNote =
  "Every purchase helps keep our study sessions free and open to every optician."
