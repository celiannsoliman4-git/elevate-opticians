export type Product = {
  name: string
  price: string // e.g. "$25"
  description: string
  image?: string // e.g. "/merch/tote.jpg" — put files in public/merch/
  url?: string // where to buy it (external store listing)
  soldOut?: boolean
}

// Add merchandise here. Drop product photos in public/merch/ and reference
// them as "/merch/<file>". `url` should point at the item's listing in
// whichever store handles checkout.
export const products: Product[] = []

// Shown above the product grid. Set to "" to hide it.
export const shopNote =
  "Every purchase helps keep our study sessions free and open to every optician."
