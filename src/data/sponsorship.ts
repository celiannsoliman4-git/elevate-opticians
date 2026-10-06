export type Tier = {
  name: string
  // price/cadence are kept for reference only — they are intentionally NOT
  // shown on the site. Sponsors are asked to contact us for pricing.
  price?: string
  cadence?: string
  summary: string
  benefits: string[]
  featured?: boolean
}

// Highest tier first. `featured` gives the card the highlighted treatment.
export const tiers: Tier[] = [
  {
    name: "Platinum Partner",
    price: "$5,000",
    cadence: "per year",
    summary:
      "Our premier partnership level, built for organizations that want maximum visibility and a leadership role in our educational programming.",
    benefits: [
      "Dedicated educational session or co-host slot",
      "Top-tier logo placement across digital, web, and event signage",
      "Two dedicated member spotlights per year",
      "Four all-access passes to Elevate Opticians events",
      "Featured premier profile in the partner directory",
      "Official Platinum Partner digital badge",
      "Non-exclusive alignment",
    ],
    featured: true,
  },
  {
    name: "Gold Partner",
    price: "$2,500",
    cadence: "per year",
    summary:
      "Strong visibility across our programming and communications, with co-sponsor recognition at educational events.",
    benefits: [
      "Group mention and co-sponsor recognition",
      "Secondary web and event logo placement",
      "One shared newsletter mention",
      "Two event passes",
      "Standard partner directory listing",
      "Non-exclusive alignment",
    ],
  },
  {
    name: "Silver Partner",
    price: "$1,000",
    cadence: "per year",
    summary:
      "An accessible entry point for organizations that want to support opticianry education and stay visible to our community.",
    benefits: [
      "Partner directory listing",
      "One event pass",
      "Non-exclusive alignment",
    ],
  },
]

// Individual-giving program. Levels exist (Gold / Silver / Bronze) but the
// amounts are intentionally not published — sponsors are asked to get in touch.
export const sponsorAnOptician = {
  title: "Sponsor an optician",
  summary:
    "Not every optician can afford the path to certification. A sponsorship directly supports someone working toward their American Board of Opticianry (ABO) credential — helping cover what stands between them and a licensed career.",
  points: [
    "Support an optician on their way to becoming ABO certified",
    "Back a volunteer-led community that mentors and educates at no cost",
    "Several giving levels are available, including Gold, Silver, and Bronze",
  ],
}

export const valueProps: { title: string; description: string }[] = [
  {
    title: "Industry-Wide Authority & Goodwill",
    description:
      "Champion the elevation of opticianry education, professional credentialing, and workforce development.",
  },
  {
    title: "Targeted Audience Access",
    description:
      "Put your brand in front of dedicated eyecare professionals and practice leaders actively seeking modern optical solutions.",
  },
  {
    title: "Multichannel Brand Presence",
    description:
      "Consistent placement across Elevate Opticians' web assets, event programming, and community communications.",
  },
]

export const activationSteps: string[] = [
  "Reach out to the Elevate Opticians partnerships team for a tailored proposal and investment details.",
  "Provide high-resolution vector logo files and brand usage guidelines.",
  "Schedule your educational webcast and member spotlight dates.",
]

export const becomeASponsor = {
  title: "Become a sponsor",
  body: "As a sponsor of Elevate Opticians, you have the opportunity to make a real difference in the lives of the opticians we serve. Your support helps us expand our programs, reach more professionals working toward certification, and strengthen the profession for everyone who comes next. Contact us today to learn more about becoming a sponsor.",
}

export const neutralityNote =
  "Elevate Opticians is committed to maintaining an open, inclusive educational platform. Every sponsorship is structured as a non-exclusive partnership, welcoming leading brands across the entire optical spectrum."
