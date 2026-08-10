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
    description: "Join weekly peer sessions covering everything on the American Board of Opticianry (ABO) blueprint.",
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

export type Audience = {
  title: string
  description: string
}

export const whoWeServe: Audience[] = [
  {
    title: "Apprentice Opticians",
    description: "Learn the fundamentals. Build confidence. Start your journey with support every step of the way.",
  },
  {
    title: "American Board of Opticianry (ABO) Candidates",
    description: "Study smarter, stay accountable, and prepare to earn your certification with confidence.",
  },
  {
    title: "Working Opticians",
    description: "Continue growing your skills, expanding your knowledge, and elevating your career.",
  },
  {
    title: "Career Changers",
    description: "Discover a rewarding profession and gain the guidance needed to successfully transition into optical.",
  },
  {
    title: "Any Experience Level",
    description: "No matter where you are on your journey, you'll find education, encouragement, and community here.",
  },
  {
    title: "Mentors & Volunteers",
    description: "Give back to the profession by helping others learn, grow, and achieve their goals.",
  },
]
