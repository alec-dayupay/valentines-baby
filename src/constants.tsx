export interface Photo {
  url: string;
  orientation: 'landscape' | 'portrait';
}

export interface Memory {
  id: string;
  title: string;
  images: Photo[];
  date?: string;
  caption?: string;
}

export const INITIAL_MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'Where it all began',
    date: 'February 2023',
    caption: 'That very first day we met, I knew my life was about to change forever.',
    images: [
      { url: new URL('assets/images/02-08-A.jpg', import.meta.url).href, orientation: 'landscape' },
      { url: new URL('assets/images/02-08-B.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '2',
    title: 'Summer Adventures',
    date: 'March 2023',
    caption: 'Exploring the world is so much better when I am holding your hand.',
    images: [
        { url: new URL('assets/images/03-21-B.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/03-21-C.jpg', import.meta.url).href, orientation: 'landscape' },
    ]
  },
  {
    id: '3',
    title: 'Quiet Moments',
    date: 'May 2023',
    caption: 'The best parts of my day are the ones spent doing absolutely nothing with you.',
    images: [
        { url: new URL('assets/images/05-24-B.jpg', import.meta.url).href, orientation: 'landscape' },
        { url: new URL('assets/images/05-24-A.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '4',
    title: 'Our Best Days',
    date: 'May-June 2023',
    caption: 'A collection of smiles that remind me why I am the luckiest person alive.',
    images: [
        { url: new URL('assets/images/06-19-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-17.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-19-D.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '5',
    title: 'Chasing Dreams',
    date: 'June 2023',
    caption: 'With you, every dream feels possible and every moment feels like magic.',
    images: [
        { url: new URL('assets/images/06-21-C.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-21-B.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-21-A.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '6',
    title: 'Winter Warmth',
    date: 'June-July 2023',
    caption: 'You are the warmth I need on the coldest of days.',
    images: [
        { url: new URL('assets/images/07-13-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/07-14-C.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '7',
    title: 'New Year, New Love',
    date: 'July 2023',
    caption: 'Every new day with you is a gift I do not take for granted.',
    images: [
        { url: new URL('assets/images/07-25.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/08-27.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '8',
    title: 'Forever & Always',
    date: 'August-November 2023',
    caption: 'From the first moment to this very second, you have been my greatest blessing.',
    images: [
        { url: new URL('assets/images/11-22.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/11-27-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/12-03.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/12-01.jpg', import.meta.url).href, orientation: 'landscape' },
    ]
  },
];

export const FINAL_LETTER = {
  greeting: "My Dearest...",
  body: "happy valentine's baby. i know we're so far apart, but i appreciate every moment we spend together!",
  signature: "— Forever yours, Your Love",
  footer: "Happy Valentine's Day 2026"
};

export const HeartIcon = ({ size = 24, color = "#f43f5e" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
