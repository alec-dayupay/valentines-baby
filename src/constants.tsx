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
    title: "Last Valentine's Day",
    date: '8 February 2025',
    caption: "One of our best dates was going to Eastwood, navigating the theme-park-like layout, solving our first escape room, and eating gooood fried chicken at Frankie's!",
    images: [
      { url: new URL('assets/images/02-08-A.jpg', import.meta.url).href, orientation: 'landscape' },
      { url: new URL('assets/images/02-08-B.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '2',
    title: 'Natsumatsuri',
    date: '21 March 2025',
    caption: "Another fun night with friends, listening to great japanese music, playing carnival games, and drinking towers!",
    images: [
        { url: new URL('assets/images/03-21-B.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/03-21-C.jpg', import.meta.url).href, orientation: 'landscape' },
    ]
  },
  {
    id: '3',
    title: 'UPTC Trip',
    date: '24 May 2025',
    caption: "Lolll, the closest thing we'll ever get to hiking. We walked around sooo much, had cheap and yummy street food, saw great art at the museum, and slept as soon as we got home.",
    images: [
        { url: new URL('assets/images/05-24-B.jpg', import.meta.url).href, orientation: 'landscape' },
        { url: new URL('assets/images/05-24-A.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '4',
    title: 'Blue Rose and Photoshoots',
    date: '17-18 June 2025',
    caption: "One of our last days of college, grad rehearsals, taking pictures, collecting our grad photos, and saying our last goodbyes.",
    images: [
        { url: new URL('assets/images/06-19-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-17.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-19-D.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '5',
    title: 'Graduation',
    date: '19-20 June 2025',
    caption: "Our proudest moment yet, the reason for the past 4 years of work, and the start of our new journeys in life.",
    images: [
        { url: new URL('assets/images/06-21-C.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-21-B.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/06-21-A.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '6',
    title: 'Saying Goodbye',
    date: '12-14 July 2025',
    caption: "I miss you so muchhh, and every moment with you is so magical in the way we laugh and smile so effortlessly.",
    images: [
        { url: new URL('assets/images/07-12.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/07-13-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/07-14-C.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '7',
    title: 'Long Distance',
    date: '25 July - 31 August 2025',
    caption: "We do make the most of what we have right now, and sometimes it's a nice game of anagrams, and other times it's watching new series, playing roblox, or just laughing our asses off at each other.",
    images: [
        { url: new URL('assets/images/07-25.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/08-27.jpg', import.meta.url).href, orientation: 'portrait' },
    ]
  },
  {
    id: '8',
    title: 'A Taste of Home',
    date: '22 November - 3 December 2025',
    caption: "With both of our busy schedules, we did our best to see each other as much as possible, giving each other kisses as much as we could, and holding each other's hand just for a second longer.",
    images: [
        { url: new URL('assets/images/11-22.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/11-27-A.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/12-03.jpg', import.meta.url).href, orientation: 'portrait' },
        { url: new URL('assets/images/12-01.jpg', import.meta.url).href, orientation: 'landscape' },
    ]
  },
];

export const FINAL_LETTER = {
  greeting: "My Lovey...",
  body: "Happy Valentine's! I know we're so far apart, but I appreciate every moment we spend together! Everytime I look back at these pictures, it makes me feel more sure of us that we belong together. Thank you for the veryyy nicee breakfast surprise and I'll be sure to give you more gifts in the futuree!!",
  signature: "— Forever yours, Your Love",
  footer: "By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.\nThe Privacy Policy states that the user must police the owner of this website's private parts as the user deems fit.\nThe Cookie Policy states that for every inappropriate image sent to the owner of this website, a cookie will be given to the user. ©2026 Valentines-Lovey Incorporated. All Rights Reserved.",
};

export const HeartIcon = ({ size = 24, color = "#f43f5e" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
