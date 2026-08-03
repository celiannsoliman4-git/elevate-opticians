export type Volunteer = {
  name: string
  roles: string[]
  photo?: string
  photoPosition?: string
}

export const volunteers: Volunteer[] = [
  { name: "Jordan Lee", roles: ["Founder & Lead Facilitator"] },
  { name: "Priya Anand", roles: ["Study Session Coordinator"] },
  { name: "Marcus Webb", roles: ["Mentor Program Lead"] },
  { name: "Sofia Ramirez", roles: ["Resource Library Curator"] },
]
