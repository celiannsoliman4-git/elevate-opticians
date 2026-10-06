export type Tier = {
  name: string
  price: string
  cadence: string
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
      "Four all-access passes to Elevate events",
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

export const valueProps: { title: string; description: string }[] = [
  {
    title: "Industry-Wide Authority & Goodwill",
    description:
      "Champion the elevation of opticianry education, professional credentialing, and workforce development.",
  },
  {
    title: "Targeted Audience Access",
    description:
      "Put your products and technologies in front of dedicated eyecare professionals and practice leaders actively seeking modern optical solutions.",
  },
  {
    title: "Multichannel Brand Presence",
    description:
      "Consistent placement across Elevate's web assets, event programming, and community communications.",
  },
]

export const activationSteps: string[] = [
  "Review and confirm agreement details with the Elevate partnerships team.",
  "Provide high-resolution vector logo files and brand usage guidelines.",
  "Schedule your educational webcast and member spotlight dates.",
]

export const neutralityNote =
  "Elevate Opticians is committed to maintaining an open, inclusive educational platform. Every sponsorship is structured as a non-exclusive partnership, welcoming leading brands across the entire optical spectrum."
