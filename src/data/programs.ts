export const JOIN_EMAIL = "elevateopticians@gmail.com"

export type Program = {
  id: string
  name: string
  description: string
  icon: "study" | "practice" | "mentor" | "library"
}

export const programs: Program[] = [
  {
    id: "study",
    name: "Weekly Study Sessions",
    description: "Peer-led review of optics, anatomy, and dispensing — broken down week by week.",
    icon: "study",
  },
  {
    id: "practice",
    name: "Practice Exam Nights",
    description: "Timed mock exams followed by group review, so you know where you stand.",
    icon: "practice",
  },
  {
    id: "mentor",
    name: "Mentor Pairing",
    description: "Paired 1:1 with a licensed optician who's already passed the exam.",
    icon: "mentor",
  },
  {
    id: "library",
    name: "Resource Library",
    description: "Shared notes, flashcards, and practice questions — free, forever.",
    icon: "library",
  },
]

export const pathway = [
  {
    step: "01",
    title: "Study",
    description: "Join weekly peer sessions covering everything on the ABO and NCLE blueprints.",
  },
  {
    step: "02",
    title: "Practice",
    description: "Sit timed mock exams and get honest feedback before the real thing.",
  },
  {
    step: "03",
    title: "Get mentored",
    description: "Work 1:1 with a licensed optician who answers your specific questions.",
  },
  {
    step: "04",
    title: "Get licensed",
    description: "Walk into exam day ready — and come back to help the next class.",
  },
]

export const whoWeServe = [
  "Apprentice Opticians",
  "ABO Candidates",
  "NCLE Candidates",
  "CE Renewal",
  "Career Changers",
  "Mentors & Volunteers",
] as const
