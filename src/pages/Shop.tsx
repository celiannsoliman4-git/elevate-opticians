import { ExternalLink, ShoppingBag } from "lucide-react"
import {
  products,
  shopHeadline,
  shopIntro,
  STORE_URL,
  type Product,
} from "@/data/products"

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url || STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        // Branded fallback so the grid reads as intentional until photos
        // are self-hosted.
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-gold/30 to-bronze/20 px-4 text-center">
          <img
            src="/seal.png"
            alt=""
            className="size-14 opacity-80 transition-transform duration-300 group-hover:scale-105 sm:size-16"
          />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/40">
            {product.category}
          </span>
        </div>
      )}

      <div className="px-4 py-4 sm:px-5">
        <p className="font-display text-sm font-bold leading-snug text-ink sm:text-base">
          {product.name}
        </p>
        <p className="mt-1 text-sm font-medium tabular-nums text-accent">
          From {product.price}
        </p>
      </div>
    </a>
  )
}

export function Shop() {
  return (
    <section id="shop" className="bg-ink pb-24 pt-20 text-white sm:pt-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-gold">
            Shop
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {shopHeadline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {shopIntro}
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-bronze px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag className="size-4" />
            Visit the Shop
            <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Storefront preview */}
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-16 block overflow-hidden rounded-2xl ring-1 ring-white/15 transition-all hover:ring-gold/50"
        >
          <img
            src="/merch/shop-preview.jpg"
            alt="A selection of Elevate Opticians merchandise from the shop"
            className="w-full"
            onError={(e) => {
              const link = e.currentTarget.closest("a")
              if (link) link.style.display = "none"
            }}
          />
          <span className="flex items-center justify-center gap-2 bg-white/5 px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-gold">
            A look inside the shop
            <ExternalLink className="size-3.5" />
          </span>
        </a>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-white/40">
          Printed and shipped by Spreadshop. Prices vary by size and color.
        </p>
      </div>
    </section>
  )
}
