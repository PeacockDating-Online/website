export const LINKS = {
  meetup: 'https://www.meetup.com/peacock-dating/',
  events: 'https://www.meetup.com/peacock-dating/events/',
  facebook: 'https://www.facebook.com/groups/1313564493759522',
} as const;

export type LinkKey = keyof typeof LINKS;