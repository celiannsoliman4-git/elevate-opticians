import { ExternalLink, ShoppingBag } from "lucide-react"
import {
  products,
  shopNote,
  storeHighlights,
  STORE_URL,
} from "@/data/products"

export function Shop() {
  return (
    <section id="shop" className="bg-gold/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Wear It Proudly
        </p>
        <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Shop
        </h2>
        {shopNote && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
            {shopNote}
          </p>
        )}

        {/* Storefront panel */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          <div className="flex flex-col gap-10 p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-accent">
                <ShoppingBag className="size-5" strokeWidth={1.75} />
                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                  Official Store
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                Elevate Opticians merchandise
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-foreground/70">
                Our logo design on hoodies, tees, mugs, and more. Printed and
                shipped by Spreadshop — browse the full range and check out
                securely on their site.
              </p>

              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-bronze px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
              >
                Visit the Shop
                <ExternalLink className="size-4" />
              </a>
            </div>

            {/* Item list */}
            {storeHighlights.length > 0 && (
              <div className="w-full lg:w-72">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
                  In the shop
                </p>
                <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {storeHighlights.map((h) => (
                    <li
                      key={h.item}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <span className="text-sm text-ink">{h.item}</span>
                      <span className="text-sm font-medium tabular-nums text-accent">
                        {h.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-ink/40">
                  Prices may vary by size and color.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Optional featured products with self-hosted photos */}
        {products.length > 0 && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white"
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-gold/20">
                    <ShoppingBag
                      className="size-10 text-ink/25"
                      strokeWidth={1.5}
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {product.price}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                    {product.description}
                  </p>

                  {product.soldOut ? (
                    <span className="mt-5 inline-block rounded-md border border-ink/15 px-4 py-2 text-center text-sm font-medium text-ink/40">
                      Sold Out
                    </span>
                  ) : (
                    <a
                      href={product.url || STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-bronze px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
                    >
                      Buy Now
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
