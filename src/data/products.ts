// Checkout is handled by Spreadshop — printing, payment, and shipping all
// happen on their side.
export const STORE_URL = "https://elevateopticians.myspreadshop.com"

export type Product = {
  name: string
  price: string
  category: "Apparel" | "Headwear" | "Accessories"
  image?: string
  url?: string // defaults to the store front
}

// Featured products. Photos live in public/merch/ — Spreadshirt's CDN blocks
// off-site requests, so they're self-hosted rather than hotlinked.
// Prices are the lowest listed; size and color can change them.
export const products: Product[] = [
  {
    name: "Premium Hoodie",
    price: "$40.99",
    category: "Apparel",
    image: "/merch/hoodie.jpg",
  },
  {
    name: "Premium Sweatshirt",
    price: "$41.99",
    category: "Apparel",
    image: "/merch/sweatshirt.jpg",
  },
  {
    name: "Unisex Tri-Blend T-Shirt",
    price: "$28.49",
    category: "Apparel",
    image: "/merch/tri-blend-tee.jpg",
  },
  {
    name: "Women's V-Neck T-Shirt",
    price: "$26.49",
    category: "Apparel",
    image: "/merch/v-neck-tee.jpg",
  },
  {
    name: "Snapback Baseball Cap",
    price: "$22.49",
    category: "Headwear",
    image: "/merch/snapback-cap.jpg",
  },
  {
    name: "Coffee/Tea Mug",
    price: "$16.99",
    category: "Accessories",
    image: "/merch/mug.jpg",
  },
]

export const shopHeadline = "Wear the mission"

export const shopIntro =
  "Our logo on hoodies, tees, caps, and more — printed and shipped by Spreadshop. Every purchase helps keep our study sessions free and open to every optician."
