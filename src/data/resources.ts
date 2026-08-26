export type Resource = {
  name: string
  url: string
  description: string
  image?: string
}

// Add new resources here — name, url, description, and an optional image.
export const resources: Resource[] = [
  {
    name: "Acing the ABO with Andrew Bruce",
    url: "https://www.uuniversity.com/AcingtheABO.html",
    description: "A free 7-week live ABO exam prep course led by nationally recognized instructor Andrew Bruce, covering ocular anatomy, optics, lens design, prism calculations, and dispensing standards.",
    image: "/andrew.png",
  },
]
