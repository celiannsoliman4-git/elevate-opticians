import { ExternalLink, ShoppingBag } from "lucide-react"
import { products, shopNote } from "@/data/products"

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

        {products.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-ink/25 bg-white p-10 text-center">
            <ShoppingBag
              className="mx-auto size-8 text-ink/30"
              strokeWidth={1.5}
            />
            <p className="mt-4 font-display text-lg font-bold text-ink">
              Merchandise coming soon
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-foreground/60">
              We're putting the first pieces together. Check back shortly, or
              join our list to hear when it drops.
            </p>
            <a
              href="#join"
              className="mt-6 inline-block rounded-md bg-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              Notify Me
            </a>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  ) : product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-bronze px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
                    >
                      Buy Now
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
