export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Robert Shaw",
    rating: 5,
    text: "Great job, came on time, first rate people, job well done.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI51NTePg4t6cN_p18CvVagsKS1mZJ2UH1212AAHlK57Opoxg=s120-c-rp-mo-br100",
  },
  {
    name: "Chance Carrick",
    rating: 5,
    // TODO: Replace with full review text from Google listing
    text: "Mark, Gillian, and the team at Go Electric are fantastic. They are professional, responsive, and do quality work. Highly recommend for any electrical needs in Palm Beach County.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLGG7-FRJQXUeo3M7UbMdvhlOoIXaU9CxE66FB20CyvATRJ3g=s120-c-rp-mo-br100",
  },
  {
    name: "robotcat23",
    rating: 5,
    // TODO: Replace with full review text from Google listing
    text: "I've had GO Electric install an outlet in my garage a while back and they did a great job — on time, clean work, and very professional. Will definitely use them again.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKGREWRAzezQqxuKZJG2MdBDli_yt2WK8gkX4SPKwSKwA26PA=s120-c-rp-mo-br100",
  },
  {
    name: "Palm Beach Homeowner",
    rating: 5,
    // TODO: Replace with real Google review
    text: "Mark is extremely knowledgeable — you can tell he spent decades working with electrical systems. The job was done right, permitted, and inspected. Wouldn't call anyone else.",
    avatar: "",
  },
  {
    name: "Jupiter Resident",
    rating: 5,
    // TODO: Replace with real Google review
    text: "GO Electric installed our whole-home Generac generator and handled every step from permitting to activation. Seamless process, great communication throughout.",
    avatar: "",
  },
  {
    name: "Singer Island Client",
    rating: 5,
    // TODO: Replace with real Google review
    text: "Veteran-owned, honest, and excellent work. They corrected code violations from a previous contractor and did it properly. Licensed, insured, and genuinely trustworthy.",
    avatar: "",
  },
];
