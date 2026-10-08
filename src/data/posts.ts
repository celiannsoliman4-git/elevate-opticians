export type Post = {
  title: string
  date: string // ISO format, e.g. "2026-10-07"
  category?: string // e.g. "Announcement", "Sponsor Spotlight", "Community"
  body: string // use \n\n between paragraphs
  image?: string // e.g. "/news/photo.jpg" — put files in public/news/
  imageAlt?: string
  link?: string // optional "read more" destination
  linkLabel?: string
}

// Newest posts go at the FRONT of this array.
export const posts: Post[] = []
