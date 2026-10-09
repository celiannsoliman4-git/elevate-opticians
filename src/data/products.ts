// Checkout is handled by Spreadshop — printing, payment, and shipping all
// happen on their side.
export const STORE_URL = "https://elevateopticians.myspreadshop.com"

export type Product = {
  name: string
  price: string
  category: "Apparel" | "Headwear" | "Accessories"
  // Spreadshirt's image CDN blocks off-site requests, so product photos have
  // to be self-hosted. Download from Spreadshop into public/merch/ and set
  // the path here — cards fall back to a branded tile until then.
  image?: string
  url?: string // defaults to the store front
}

// Prices are the lowest listed for each item; size and color can change them.
export const products: Product[] = [
  { name: "Premium Hoodie", price: "$40.99", category: "Apparel" },
  { name: "Premium Sweatshirt", price: "$41.99", category: "Apparel" },
  { name: "Women's V-Neck T-Shirt", price: "$26.49", category: "Apparel" },
  { name: "Classic T-Shirt", price: "$23.49", category: "Apparel" },
  { name: "Snapback Baseball Cap", price: "$22.49", category: "Headwear" },
  { name: "Bucket Hat", price: "$20.99", category: "Headwear" },
  { name: "Travel Toiletry Bag", price: "$20.99", category: "Accessories" },
  { name: "Gaming Mousepad", price: "$19.99", category: "Accessories" },
  { name: "Round Keychain", price: "$15.99", category: "Accessories" },
  { name: "Tennis Socks", price: "$12.99", category: "Accessories" },
  { name: "Rectangle Magnet", price: "$6.99", category: "Accessories" },
]

export const shopHeadline = "Wear the mission"

export const shopIntro =
  "Our logo on hoodies, tees, caps, and more — printed and shipped by Spreadshop. Every purchase helps keep our study sessions free and open to every optician."
