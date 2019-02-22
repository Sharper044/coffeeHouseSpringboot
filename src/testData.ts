export interface IComment {
  id: number;
  author: string;
  date: string;
  isAnswer: boolean;
  comment: string;
}

export interface IQuestion {
  id: number;
  title: string;
  question: string;
  date: string;
  isAnswered: boolean;
  rating: number;
  numberOfVotes: number;
  comments: IComment[];
  responders: IResponder[];
}

export interface IUser {
  id: number;
  name: string;
  subscribedQuestions: number[];
  super: boolean;
  delegatedQuestions: number[];
}

export interface IResponder {
  id: number;
  name: string;
  pictureUrl?: string;
  email?: string;
}

export const users: IUser[] = [
  {
    id: 1,
    name: 'Patrick Byrne',
    subscribedQuestions: [],
    super: true,
    delegatedQuestions: [],
  },
  {
    id: 2,
    name: 'Stuart Harper',
    subscribedQuestions: [0, 2, 4, 6],
    super: false,
    delegatedQuestions: [0, 1, 6],
  },
  {
    id: 3,
    name: 'Jace Copier',
    subscribedQuestions: [1, 3, 5],
    super: false,
    delegatedQuestions: [1, 6],
  }
];

export const questions: IQuestion[] = [
  {
    id: 0,
    title: 'Medici Blockchain Summit summary?',
    question: 'Will there be some kind of a summary or rundown of the presentations at the Medici Summit for empoyees who were not able to attend? I think it would be interesting to hear about what is happening with the blockchain companies who presented at the conference.',
    date: 'January 29, 2019',
    isAnswered: false,
    rating: 4.6,
    numberOfVotes: 5,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne',
      },
      {
        id: 2,
        name: 'Stuart Harper',
      }
    ],
    comments: []
  },
  {
    id: 1,
    title: 'If you had a time machine',
    question: 'Hindsight is 20/20. I am (and I think others as well are) interested on how decisions you made regarding Overstock Retail would be different.',
    date: 'January 13, 2019',
    isAnswered: false,
    rating: 4.5,
    numberOfVotes: 8,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne',
      },
      {
        id: 2,
        name: 'Stuart Harper',
      },
      {
        id: 3,
        name: 'Jace Copier',
      }
    ],
    comments: []
  },
  {
    id: 2,
    title: 'Communication and cross team collaboration goal 2019',
    question: 'Patrick, thanks for supporting this platform for feedback. I really appreciate that you find value in somehting like coffee house, as I think it\'s a fairly unique thing to find in a large corporation. \n\nOn to the question at hand. I am wondering if you would be supportive of creating a goal for 2019 that we as a company improve our communication and cross team collaboration skills? Also, do you see poor communication an collaboration as an issue in our company? \n\n The reason I ask is, because while Overstock is great at a wide variety of things and a place I enjoy working at, one area we tend to miss the mark is with cross team strategizing, and communication (IMHO). It seems to be somewhat accepted as if it is just who we are and probably can\'t change. What I have experienced is that this creates a lot of stress and frustration for people lower on the ladder (and probably up top too). At the worst of times, poor communication and collaboration can result in turnover. In best case scenarios, it results in unfinished projects, or duplicated efforts, which is also frustrating as it can feel as though time and energy have been wasted.  \n\nThank you for your time.',
    date: 'December 5, 2018',
    isAnswered: false,
    rating: 4.0,
    numberOfVotes: 7,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne'
      }
    ],
    comments: [
      {
        id: 0,
        author: 'Anonymous',
        date: '12/11/2018',
        isAnswer: false,
        comment: '++ Bring back project managers!'
      },
      {
        id: 1,
        author: 'Anonymous',
        date: '12/20/2018',
        isAnswer: false,
        comment: '+I have been reading the book Patrick recomended: leadership and self deception, and it would be kind of cool to implement some training along those lines as well.'
      },
    ]
  },
  {
    id: 3,
    title: 'No question. Just Thank You',
    question: 'No question. Just Thank YouEnd of added content \nI would like to say thank you Patrick for the great perks Overstock offers to it\'s employees:\n\n-Beautiful building. The building along with the greenhouse looks stunning at night. \n-Health center. By switching to a High deductible plan and using the onsite health center I have saved so much money using this particular perk alone\n-generous 401k match. 6% match is sweet!!\n-above market pay with great work/life balance\n-9*80 schedule. What a great perk this is. it was great while it lasted (hope it comes back again next year :) )\n-the coffee house initiative is amazing. Rarely have I seen a company where employees get to have a platform with such direct access to its CEO\n\nAlso, I wish you all the best with your blockchain initiatives like TZERO, MLG. I can tell that your heart is in the right place which is why i think you will be successful with initiatives like MLG that will eventually help so many poor/middle class people in developing countries in terms of unlocking massive capital and giving their lands the necessary legitimacy they need so desperately. I see the MLG initiative as no less important than what Bill Gates has been trying to do in third world countries with his toilet initiative to get basic sanitation to about 2.3 billion people around the world( https://www.cnn.com/2018/11/06/asia/bill-gates-revolutionizes-toilets-scli-intl/index.html ). We folks in developed countries like the US take these basic things like sanitation, land titling for granted but for people in developing countries, these things are like a privilege only available to the rich rather than a citizen right. I know this because I come from one such country.\n\nPlease also convey my special thanks to Saum/Jonathan who are leading these initiatives. I wish you and them all the success.',
    date: 'December 11, 2018',
    isAnswered: false,
    rating: 3.3,
    numberOfVotes: 7,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne'
      }
    ],
    comments: [
      {
        id: 2,
        author: 'Anonymous',
        date: '01/14/2019',
        isAnswer: false,
        comment: '+1 - Thanks for being as transparent as you can. In my few years here, it feels as though you care about the employees while you take care of business.  Thanks for giving us as much as you can! ... it\'s definitely a different feeling I\'ve had working in other companies.'
      },
    ]
  },
  {
    id: 4,
    title: '15 years with Overstock',
    question: 'Hello Patrick, myself and a few others I know are coming up on our 15 years with Overstock and I wanted to thank you for the opportunity to share this journey with you. I was wondering if we could have the option for the one month sabbatical or trade it in for a one time check like we do for the 10 yr., I\'m sure there are a few of us that could really use a little extra money for bills or whatever, especially for a few of us that have maxed out on our pay scale for a while, thank you for all you do for us. ',
    date: 'November 1, 2017',
    isAnswered: true,
    rating: 3.1,
    numberOfVotes: 23,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne'
      }
    ],
    comments: [
      {
        id: 3,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+ As one who is also nearing this, I honestly don\'t know WHAT I will do for an entire month off of work. In theory it\'s great, and I\'m definitely NOT ungrateful. If anything I\'m so impressed that Overstock offers a fantastic benefit like this at all. It would be great to have the money vs. leaving work for a month though.   '
      },
      {
        id: 4,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '- Getting paid for an extra month in addition to getting paid for the month and working, results in a substantial new cost to Overstock. I look forward to time off and understand the purpose of a Subbatical. I believe your "comment/question" should be added to idea lab for social voting. Patrick already provides us the opportunity to suggest and vote on benefit preferences and priorities.'
      },
      {
        id: 5,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+  I will also be approaching my 15 year soon and would be interested in other options instead of the paid sabbatical.  Keeping a regular schedule for me personally keeps my psych health in check and gives me a sense of purpose, I think I would exhaust my time off plans quickly and wind up doing nothing for a good portion of the month.  A month off would also be a burden on my teammates who would have to pick up my slack, additionally some would prefer to not have to go through the reacclimating process to get back into the loop after they return.  I think offering multiple choices would be beneficial as everyone is different, for example one could choose the full month off option or opt for something like a 50/50 split (half month off + monetary reward similar to the 10 year as stated).'
      },
      {
        id: 6,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+ I think the paid sabatical should be the only option. It is a benefit to the whole organization. Many of the people at 15 years are in management positions. The fact that they feel like they can\'t be away from their team for a month, shows me that there is a need to give the team a chance to step up and shine. These openings have given many people a chance to fill in their bosses shoes a bit and show what they have. It also acts as a shock to the 15-year employee\'s system. If you can\'t imagine a month outside of Overstock, than you are likely to gain new insights as you adapt to that month. Please find a way to find joy outside these walls because there is so much more to life than work.'
      },
      {
        id: 7,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: ' - In response to this statement. I\'m not management, I am approaching my 15 years. I don\'t feel like I need a break, I honestly feel like a month off would be a complete waste for me. I wouldn\'t get to go anywhere because I couldn\'t afford to even if I wanted to. I\'d literally be stuck at home doing nothing, and that sounds absolutely horrible to me. However, if you want to make it mandatory for people who are managers to take the time off, that\'s fine. However, those that aren\'t.. I\'d prefer the money and to still come into work, or whatever alternative option Overstock might be willing to offer. Some people just don\'t get the same benefit of taking that time off..'
      },
      {
        id: 8,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+I am coming up on my 15 year and I would greatly perfer the month off. '
      },
      {
        id: 9,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+ I will hit 15 years in 2023 But I would like to keep the sabbatical too! and can we bring back the 1 extra week of vacation after hitting 10 years please?'
      },
      {
        id: 10,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+I am approaching my 15 year in 2019 and I\'m in management. I would appreciate the choice between the money and/or time off (maybe a combo?). But, the point of a sabbatical is to refresh yourself. You\'ve put in a lot of time at one place, now it\'s time to do something different; then come back energized and renewed. You don\'t have to have money to accomplish the goal of rejuvination. You could spend your time on a project at home, or volunteer. Think of those moments when you say "If I just had more time" and utilize your sabbatical to accomplish something. If you think it would be a complete waste of YOU, then maybe take YOUrself out of it and do something for other people. That\'s what I plan to do. I would feel rejuvinated by contributing to society in a different way (something completely different than commerce).'
      },
      {
        id: 11,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '- So I can see your logic, but.. I\'m the person that would literally be worse off by doing this. Work is the ONLY time I get to sit down and focus on something other than other people in my life. I can focus on work, get stuff done and feel accomplished. When I go home, it\'s not relaxing for me at ALL... because I\'m always going or there is always someone that needs something. If I am not at work, everyone pulls me in a million different directions. Granted I allow it, but... for me, work is my sanctuary. It\'s not my whole life, but it is my sanctuary. I would like an option to choose. '
      },
      {
        id: 12,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '-- Find a sanctuary outside of your home -- volunteer perhaps? I plan to give back with my afforded time.'
      },
      {
        id: 13,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+What will happen with sabbaticals if we go through an acquisition?'
      },
      {
        id: 14,
        author: 'Anonymous',
        date: 'November 1, 2017',
        isAnswer: false,
        comment: '+I think a choice of any combination of time of and sabatical would be awesome. A month off to go on an awesome trip would be awesome, but not if you can\'t afford said trip. It would be awesome if you could choose instead to take a portion of the month off as pay, and a portion as sabatical, so you could use the portion as pay to pay for a trip (or whatever one chooses).'
      },
      {
        id: 15,
        author: 'Patrick Byrne',
        date: 'December 6, 2018',
        isAnswer: true,
        comment: '​I\'m not a big fan of setting a new precedent where we give cash to those who forego perks. I fear that it may be a slippery slope and only a matter of time before folks say "since I don\'t use the gym benefit offered, I\'d like to receive the $10 per month that you\'ve allocated for it... I don\'t take vacation, so i\'d just like a check instead... let\'s cancel the concert and just give out what we would have spent on each employee to them...etc." \n\nThese earned perks are meant to be used. After dedicating 15 years to the company, associates should dedicate a month to themselves.  In addition, we think the office will be better for it. So take the month off and contemplate the last 15 years and the next.'
      },
    ]
  },
  {
    id: 5,
    title: 'Using Blockchain on our Retail Business',
    question: 'Thanks for taking time to read through this. Blockchain is such a fascinating technology and its sure is interrupting or going to interrupt many areas and I was wondering if you had thought about using the block chain technology on our retail business and providing a platform that will give power on the hands of our partners to advertise their products and there by they controlling the price and inventory  the way they want and we incorporate the technology required for them to perform these using blockchain technology and provide only the software, services & support. Also, this would be great for our Cars and Insurance allowing the car manufactures and Insurance providers to advertise their cars and insurance with our blockchain technology.',
    date: 'January 3, 2018',
    isAnswered: true,
    rating: 2.9,
    numberOfVotes: 10,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne'
      }
    ],
    comments: [
      {
        id: 16,
        author: 'Patrick Byrne',
        date: 'December 5, 2018',
        isAnswer: true,
        comment: '​​I would lovet o hear more. Write me a letter at patrick@overstock.com.'
      },
    ]
  },
  {
    id: 6,
    title: 'Prop 2',
    question: 'Hello Patrick,\n\nOnce prop 2 goes into effect, Would ever consider dedicating a portion of the greenhouse into a grow house; if laws and zoning permit? Being able to go to the greenhouse on break for that would be convenient.\n\nThanks in advance.',
    date: 'November 26, 2018',
    isAnswered: true,
    rating: 3.0,
    numberOfVotes: 2,
    responders: [
      {
        id: 1,
        name: 'Patrick Byrne',
      },
      {
        id: 2,
        name: 'Stuart Harper',
      },
      {
        id: 3,
        name: 'Jace Copier',
      }
    ],
    comments: [
      {
        id: 17,
        author: 'Patrick Byrne',
        date: 'November 30, 2018',
        isAnswer: true,
        comment: '​​Yes, I\'d consider it, if within the law.'
      },
    ]
  },
];
