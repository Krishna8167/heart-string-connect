
export interface Prompt {
  question: string;
  answer: string;
}

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  images: string[];
  prompts: Prompt[];
  occupation: string;
  education?: string;
  height?: string;
  lookingFor?: string;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Sophie",
    age: 28,
    location: "New York, NY",
    bio: "Coffee enthusiast, book lover, and hiking addict. Looking for someone who enjoys adventures and deep conversations.",
    occupation: "Marketing Manager",
    education: "NYU",
    height: "5'6\"",
    lookingFor: "Relationship",
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    prompts: [
      {
        question: "A life goal of mine",
        answer: "To visit all seven continents before I turn 35. Only Antarctica left!"
      },
      {
        question: "Best travel story",
        answer: "Getting lost in Tokyo and ending up at a tiny ramen shop that had the best food I've ever tasted."
      },
      {
        question: "I'm looking for",
        answer: "Someone who is passionate about something, anything really. Passion is attractive."
      }
    ]
  },
  {
    id: "2",
    name: "Alex",
    age: 30,
    location: "Los Angeles, CA",
    bio: "Musician, foodie, and dog dad. Let's go to a concert and get tacos after.",
    occupation: "Music Producer",
    education: "Berklee College of Music",
    height: "5'11\"",
    lookingFor: "Dating",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    prompts: [
      {
        question: "A fact about me that surprises people",
        answer: "I can play five different instruments but can't whistle to save my life."
      },
      {
        question: "My most irrational fear",
        answer: "Accidentally sending a text to the person I'm texting about."
      },
      {
        question: "Typical Sunday",
        answer: "Farmer's market, dog park, meal prep, and ending with a glass of wine and whatever show I'm binging."
      }
    ]
  },
  {
    id: "3",
    name: "Olivia",
    age: 26,
    location: "Chicago, IL",
    bio: "Art gallery curator by day, amateur chef by night. Let's debate whether pineapple belongs on pizza.",
    occupation: "Art Curator",
    education: "SAIC",
    height: "5'4\"",
    lookingFor: "Relationship",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1526080652727-5b77f07661cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    prompts: [
      {
        question: "Dating me is like",
        answer: "Having a personal tour guide to the best hidden art spots and restaurants in the city."
      },
      {
        question: "The one thing I want to know about you",
        answer: "What was the last book that changed your perspective on something?"
      },
      {
        question: "I'm weirdly attracted to",
        answer: "People who are passionate about random niche subjects. Tell me all about your weird hobby!"
      }
    ]
  },
  {
    id: "4",
    name: "James",
    age: 32,
    location: "Seattle, WA",
    bio: "Software engineer who spends too much time outdoors. Coffee snob and mountain biker.",
    occupation: "Software Engineer",
    education: "University of Washington",
    height: "6'0\"",
    lookingFor: "Dating",
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    prompts: [
      {
        question: "A perfect day",
        answer: "Morning trail ride, afternoon at a coffee roaster, evening cooking dinner with someone special."
      },
      {
        question: "Two truths and a lie",
        answer: "I've climbed Mt. Rainier, I once coded for 36 hours straight, I have a pet tarantula."
      },
      {
        question: "The key to my heart is",
        answer: "Sending me interesting articles you think I'd enjoy or recommending a trail I haven't hiked yet."
      }
    ]
  },
  {
    id: "5",
    name: "Emma",
    age: 29,
    location: "Austin, TX",
    bio: "Yoga instructor and part-time comedian. Will make you laugh and then make you stretch.",
    occupation: "Yoga Instructor",
    education: "UT Austin",
    height: "5'8\"",
    lookingFor: "Relationship",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    ],
    prompts: [
      {
        question: "Best travel story",
        answer: "I spent a month in Bali teaching yoga to locals and learned more from them than they did from me."
      },
      {
        question: "My simple pleasures",
        answer: "Sunrise yoga, oat milk lattes, and making strangers laugh with terrible puns."
      },
      {
        question: "I'll know it's time to delete the apps when",
        answer: "I find someone who laughs at my jokes and doesn't mind that I can touch my feet to my head."
      }
    ]
  }
];
