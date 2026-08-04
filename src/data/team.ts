export const founder = {
  name: "Kiara Resplandor",
  title: "Founder & Facilitator",
  bio: "Kiara founded Elevate Opticians in 2020 after failing her first ABO attempt — and has personally led every study session since.",
  linkedin:
    "https://www.linkedin.com/in/mariechris-kiara-resplandor-aboc-abo-speaker-ldo-2ab55396/",
}

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I failed my first attempt and almost gave up. This group gave me the structure and support I needed to pass on my second try.",
    name: "Sample Graduate",
    detail: "ABO Certified",
  },
  {
    quote:
      "Studying with people who actually wanted me to succeed made all the difference.",
    name: "Sample Graduate",
    detail: "ABO Certified",
  },
  {
    quote:
      "I went from feeling completely lost to walking into my exam confident.",
    name: "Sample Graduate",
    detail: "ABO Certified",
  },
]

export const graduates: string[] = Array.from(
  { length: 23 },
  (_, i) => `Graduate ${i + 1}`
)
