import React from 'react';
import { FaMusic, FaAnchor, FaMap } from 'react-icons/fa';

const DATA = {
  navBarList: ['Events', 'Team', 'Rates', 'FAQ'],
  hero: {
    heroImg: 'misc/IMG_0535.JPG',
    header: 'FSW23',
    teaser: `Your story starts with us. This is a simple example of a Landing
            Page you can build It features multiple CSS components based on
            the Tailwindcss design system.`,
  },
  cardInfo: [
    {
      title: 'New routes per journey',
      description: 'We explore new paths each edition.',
      icon: 'fa_map',
    },
    {
      title: 'Curated playlist',
      description: 'A selection of Forró classics as well as new modern hits.',
      icon: 'fa_music',
    },
    {
      title: 'Paradise scenery',
      description: 'Life is best spent outside. Dancing connected with nature',
      icon: 'fa_anchor',
    },
  ],

  homeDataAboutUS: {
    head: 'A neverending passion',
    text: `The extension comes with three pre-built pages to help you
    get started faster. You can change the text and images and
    you're good to go.`,
    img: './assets/img/img_002.jpeg',
    bulletPoints: [
      {
        icon: <FaMusic />,
        shortText: 'Carefully curated songs',
      },
      {
        icon: <FaMap />,
        shortText: 'Amazing route/navigation in our journey',
      },
      {
        icon: <FaAnchor />,
        shortText: 'Stops Along the way',
      },
    ],
  },

  ourValuesList: {
    head: 'All aboard!',
    text: `Next steps to join our crew. Beware of our phase.
           `,
    values: [
      {
        head: 'Booking Phase',
        stage: true,
        text: `
                  - Pay until end of December 2021 save 50€.
                  - If there are not enough people within a budget to build a boat, those people will be downgraded and get the difference in money back
                  - No reimbursement possible (you may give or sell your place to a friend).
                `,
      },
      {
        head: 'Boat Reservation Phase',
        stage: false,
        text: 'Every Budget level will build a pot (gold, silver, bronze). With those pots we will book the best boats & skipper possible (more people, better bargain)',
      },
      {
        head: 'Crew Allocation Phase',
        stage: false,
        text: 'By the end of March all necessary boats will be chartered and the forrózeiros will get to know the boats they will be in as well as their fellow sailing crew & skipper. The people will be allocated in order of payment booking to the available boats',
      },
    ],
  },

  fotoCard: {
    title: 'Top Notch Services',
    description:
      'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.',
    url: './assets/img/img_002.jpeg',
  },

  socialLinks: [
    {
      name: 'Facebook',
      stl: 'fa_face',
      link: 'https://www.facebook.com/profile.php?id=100036867115395',
      color: 'rgba(37, 99, 235, 1)',
    },
    {
      name: 'Youtube',
      stl: 'fa_youtube',
      link: '',
      color: 'rgba(255, 0, 0, 1)',
    },
    {
      name: 'Instagram',
      stl: 'fa_insta',
      link: 'https://www.instagram.com/forrosailing/',
      color: 'rgba(244, 114, 182, 1)',
    },
  ],

  otherLinks: {
    'Useful Links': [
      {
        name: 'About Us',
        link: '',
      },
      {
        name: 'Blog',
        link: '',
      },
      {
        name: 'Github',
        link: 'https://github.com/',
      },
      {
        name: 'Tickets',
        link: '',
      },
    ],
    'Other Resources': [
      {
        name: 'Terms & Conditions',
        link: '',
      },
      {
        name: 'Privacy Policy',
        link: '',
      },
      {
        name: 'Contact Us',
        link: '',
      },
    ],
  },

  faqInfo: [
    {
      subject: 'Booking & Payment',
      topics: [
        {
          question: 'I am a solo traveler/dancer. Can I book a spot?',
          answer:
            'Yes, you can and should! Our Sailing week is designed to make it as simple and uncomplicated as possible for you. Just decide for your prefered budget option and go for it. \n In case you have a prefered person to share a cabin with, who will or might join the Sailing week aswell, you can tell this during the booking process, otherwise you will be assigned some other forrozeiro of same gender to share the cabin with.',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
        {
          question: 'I want to join for the second time. Do I get a discount?',
          answer:
            'Yes. We give special promotions and offer discount codes to our FSW veterans, and these are shared in our ALTERHASEN Whatsapp group. You may also contact us directly to get this discount.',
        },
        {
          question: 'Is it possible to book a whole boat?',
          answer:
            'Yes, if you manage to gather a group together of at least 8 people, you can reserve a separate boat for your group (if so desired) and get a 50€ discount to every member of the group. For that use the promo code "FULL BOAT" in our ticket system. \n PS: You need to gather INFO from all attendees to answer the mandatory questions at the survey during the booking process for the group.',
        },
      ],
    },
    {
      subject: 'Budget',
      topics: [
        {
          question: 'What are the total costs I have to consider for the FSW?',
          answer:
            "Check the RATES page to know what is or isn't included in the FSW ticket. \n Apart from the Ticket Budget (bronze, silver or gold) of your choice, you shall also account on following extra expenses: \n 1) Travel arrangements: \n 1.1) transportation to and from the port where your boat will depart/arrive... usually flight or ferry + inland transportation. \n 1.2) depending on your travel arrangements, potentially further housing costs prior or after the sailing week \n 2) Boats kitty costs (ca. 150-250€ per person for the week), which covers: \n 2.1) split groceries costs for everything you eat/cook & drink in the boat \n 2.2) boat fuel and marina costs, which vary according to the boat size and of course the fuel consumption (save money and set your sails!! ;) \n 3) Restaurants or other program you decide to do (eg. renting scooters, bycicle, tourist programs...)",
        },
        {
          question: "How much should I plan in for the boat's joint expenses?",
          answer:
            "Experience shows that something between 150-300€ per person for the whole week should be enough to account for boat fuel, marina fees, onboard food and potentially even a skipper Tipp at the end of the week. \n In the yachting industry it's best practice to pay ca. 10% of the ticket price as tipp, but each person can and should decide for himself. \n\n Those are all variable costs, which depends on the actual consumption (how much sailing vs motoring, anchoring vs sleeping with the boat in a marina, how much food/drinks are bought and finally if you find your skipper deserves a Tipp.",
        },
        {
          question: "How are the boat's joint expenses managed?",
          answer:
            "It's best practice to do a group fund KITTY in the check in day, where each person puts ca. 150-300€ cash and an appointed kitty manager can manage the boat's money. The boat's common expenses are withdrawn from the kitty. \n In case the kitty money dries out before the end of the week, people have to hand in more money. The money that remains at the end of the week should be split back to all payers. The person who manages the kitty shall keep the receipts to cross check at the end of the week. \n An alternative to the kitty is to use some App, but the kitty has proven more efficient in most cases.",
        },
      ],
    },
    {
      subject: 'Liability',
      topics: [
        {
          question:
            'Does the boat have insurance? What about the deductible/damage deposit?',
          answer:
            'Yes, charter boats have by default an insurance, so that even in worse case scenario the crew would be only liable for the deductible. \n\n The FSW opted from 2023 onwards to also ADD an insurance for this deductible (so called damage deposit) as default in our events, so that even in case of damage to the boat or boat apparel (eg. dinghies, fenders, winches...), you should not have any further debts. This extra insurance costs in avg. 50€ per person and is already included in your ticket price.',
        },
        {
          question: 'Is the Skipper insured?',
          answer:
            'Yes, each FSW skipper must have a third party liability insurance in case of accidents (eg. with other boats or a marina or swimmer...)',
        },
      ],
    },
    {
      subject: 'Accomodation',
      topics: [
        {
          question:
            'How and when will the allocation of participants to the boats happen?',
          answer:
            '1) Once the due date for registering is finished we book the boats. \n 2) When the boats are booked we then allocate the people to the boats in order of reservation date and according to the budget booked. \n 3) We publish the Boats x crew list, when the above is finished...usually around 2 months prior to departure.',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
        {
          question: 'Where do we sleep during the Forró Sailing Week?',
          answer:
            'In the boat, so there are no hotel expenses! Each boat has around 4/5 cabins. Usually 2 people can sleep per cabin. To be able to offer lower ticket prices overall, we usually make use of the saloon beds and bow cabins as well, which are also sleeping spots in the boats, with some peculiarities (more INFO in our rates session).',
        },
        {
          question: 'How big are the cabins and beds?',
          answer:
            'Most of the beds in the boats are double beds. In some rare cases there are bunk beds on top of each other. ',
        },
        {
          question: 'Will I have to sleep in a double bed with a stranger?',
          answer:
            'In the registration process you have the option of also naming a person with whom you would like to share a cabin. \n If no preference is given, we will try to place people from the same gender within a cabin. Over 80% of our crew come by themselves and we did not face any compatibility problems, since our public is always the best. :) \n If you prefer to have a cabin for yourself, you can consider taking a Bow cabin ticket in a catamaran or booking 2 tickets (whole cabin for yourself).',
        },
        {
          question:
            'How many people can sleep on a boat and how many toillets per boat?  ',
          answer:
            'Almost every boat have saloon tables, which turn to beds and people can sleep on. These spots are also sold in our event, so that we can offer overall cheaper prices.',
        },
        {
          question: 'How many sailing boats will be part of our group?',
          answer:
            'The number of sailing boats vary depending on the dancers/travellers who register. We usually sail out 3-5 sailing boats. We all sail out and moor together.',
        },
      ],
    },
    {
      subject: 'Sailing boat',
      topics: [
        {
          question: "What's the deal with food on board?",
          answer:
            'Before the departure, every boat group should write down a grocery list for the week and some crew members go to the market and buy it (expenses to be shared through the kitty). Every boat has a full equipped kitchen (fridge, oven/stove...), but be mindfull there is limited space (especially monohauls). \n PS1: It would be nice to plan at least two days to have dinner on land in a nice harbour city and there are chances of re-supply during the week. \n PS2: me mindfull to vegan or vegetarian people in the boat',
        },
        {
          question: 'What about cooking and cleaning?',
          answer:
            "We advise to build kitchen teams  per day for cooking and dish washing or divide tasks to have a cooking manager onboard, but each boat shall set up it's own arrangements.",
        },
        {
          question: 'Will I get seasick sailing?',
          answer:
            "It is hard to tell, some people tend to get seasick more easily than others. But after many seasons at sea, sailing with all kinds of people and with a lot of 'newbees' aswell, this was never a problem. If you have fear of getting seasick, there are many pills and tapes in the market that help in this matter.",
        },
        {
          question: 'Sailing without any boat/sailing experiences?',
          answer:
            "That is not a problem. We will have experienced skippers/sailors in every boat taking care of that. There is a safety briefing in the beginning of the week to brief you on what you have to watch out for. And every skipper is always happy with some extra pro-active hands onboard. If you want to learn more about sailing share this interest with your skipper and he will be glad to share his knowledge with you. It's a great chance to informally acquire valuable sailing experience and knowledge.",
        },
        {
          question: 'Is it possible to learn how to sail during the trip?',
          answer:
            "Yes it is an excellent opportunity to get 'on the job' experience. You will have a knowledgeable skipper with you the whole week and definetly many opportunities to learn sailing and sometimes absorb knowledge only from seeing what is happening. You can try out different sailing positions within a big keel boat. From sails trimmer, to navigator and helmsman. \n If you are eager to learn more tell your skipper you would like to be his deck hand. Every skipper needs help from at least 2 people, when coming into or out of a port or anchoring manouvers...and these people usually need extra instructions.",
        },
      ],
    },
    {
      subject: 'Forró',
      topics: [
        {
          question: 'Will we have Forró workshops?',
          answer:
            'YES!!! Our Forró teachers will give their best to make at least one proper Forró workshop per day. The place might be on the beach, on the harbor, on a square (wherever we feel comfortable). According to the level of our participants, we will organize different classes.',
        },
        {
          question: 'Where will we dance Forró?',
          answer:
            'The staff boat is a big catamaran boat, with a big saloon, we will remove the table and have a „dance floor“. We can join all the boats in a "raft" and we\'ll have more possibilities to dance. And of course we will also dance on land.',
        },
        {
          question: 'How do I reserve a spot or cabin?',
          answer:
            'Booking can be easily done through our registration form. If you need to make a question, send us an email at info@swingnsail.com',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },

    {
      subject: 'General',
      topics: [
        {
          question: 'What other activities can we do during the trip?',
          answer:
            'There will be multiple options to go swimming and snorkeling, sunbathing on deck or on the beach, to go for a walk or hiking on land, finding some time to do Yoga etc.',
        },
        {
          question: 'Sailing without any sailing experiences?',
          answer:
            'That is not a problem! We will have experienced skippers and some experienced sailors in our. If you are still in doubt ask the crew from 2019.',
        },
        {
          question: 'How do I reserve a spot or cabin?',
          answer:
            'Booking can be easily done through our registration form. If you need to make a question, send us an email at info@swingnsail.com',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no refund will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
        {
          question: 'What is your cancellation policy?',
          answer:
            'If you decide to cancel your trip, no \n refund \n will be given but you can “sell” your pass to another traveller/dancer of the same dancing role. We will do our best to inform our dancers of the availability of your spot so you have better chances.',
        },
      ],
    },
  ],

  teamData: {
    title: 'Here is our crew!',
    description: `According to the National Oceanic and Atmospheric Administration,
                  Ted, Scambos, NSIDClead scientists, forró is for all.`,
    team: [
      {
        name: 'Bernardo Low-Beer',
        position: 'Organizer & Captain',
        social: [
          { facebook: 'https://www.facebook.com/lowbeer' },
          { insta: 2 },
          { linkedin: '' },
        ],
        foto: 'team-1-800x800.jpg',
      },
      {
        name: 'Romina Hadid',
        position: 'Marketing specialist',
        social: [
          { facebook: '' },
          { insta: '' },
          { linkedin: '' },
          { tiktok: '' },
          { youtube: '' },
        ],
        foto: 'team-2-800x800.jpg',
      },
      {
        name: 'Alexa Smith',
        position: 'Associate',
        social: [{ facebook: '' }, { insta: '' }, { tiktok: '' }],
        foto: 'team-3-800x800.jpg',
      },
      {
        name: 'Milena-Marie Zöller',
        position: 'Founder and Ceo',
        social: [
          { facebook: 'https://www.facebook.com/milenamarie.zoller' },
          { linkedin: '' },
        ],
        foto: 'team-4-470x470.png',
      },
    ],
  },
  teamDataFull: [
    {
      id: 'bernardo-low-beer',
      name: 'Bernardo Lichtenberg Low-Beer',
      description: `Bernardo always wanted to unite his passions for sailing and dancing Forró, after meeting Milena this was the last push needed to make
      it happen. Since 2018 they jointly organize the Forró Sailing Week. Bernardo is also sailing since his young ages in the optimist class and later
      even participated in the Rio Pan-American Games. With lots of experience in big boats as well, he is one of the FSW skippers. As a passionate
      Forró dancer, he was also teaching classes in Essen, then was founder of Forró in Münster (Germany) and Forró in Pavia (Italy).
      His main job is a logistics engineer, which enables him to pull this all together.`,
      groupName: 'Corestaff',
      role: 'Founder, Organizer & Skipper',
      imgPath: 'team/IMG_2924.JPEG',
      editions: ['fsw19', 'fsw20', 'fsw21', 'fsw22'],
    },
    {
      id: 'milena-marie-zoeller',
      name: 'Milena-Marie Zöller',
      description: `Milena always loved to dance and to be connected with the ocean. This combination brought her to live in Lisbon, where
      she finally discovered her passion for Forró. After meeting Bernardo in 2017 and dancing together a lot since then, he introduced her
      to a wonderful new world: sailing. It happend that they were on a family- and friends-sailing-trip in Sardinia in 2018, where the concrete
      idea was born and the plan was set: more people need to fall in love with this beautiful combination! Nowadays Milena is working on her first
      sailing license. She lives in Berlin and in her main profession she works with Communications, Politics and Events – a combination, that also
      the Forró Sailing Week benefits from.`,
      groupName: 'Corestaff',
      role: 'Founder, Organizer & Marketing',
      imgPath: 'team/IMG_3558.jpg',
      editions: ['fsw19', 'fsw20', 'fsw21', 'fsw22'], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'gerrit-fachinger',
      name: 'Gerrit Fachinger',
      description: `Gerrit started dancing Forró in 2019 in Aachen and got infected immediately. In early 2020 when all festivals got cancelled
      due to covid his participation in the fsw (2nd ed) also got postponed. However in summer 2020 bernardo offered him a spot on a boat in
      croatia that lead to a memorable sailing trip which sparked his curiosity in learning more about sailing aswell. In the subsequent 2 years
      he finished the legal requirents regarding sailing and radio licenses to stir a sailing vessel. In that time he also befriended Bernardo
      and Milena and participated as co-skipper in the FSW (2nd ed). In 2022 he finally joined the FSW (3rd ed) as a qualified skipper himself,
      hoping for future events to come.`,
      groupName: 'Corestaff',
      role: 'Skipper & Organizer',
      imgPath: 'team/IMG_0482-min.jpeg',
      editions: ['fsw20', 'fsw21', 'fsw22'], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'sven-de-causmaecker',
      name: 'Sven De Causmaecker',
      description: `Sven has been dancing all his life. He started forro back in 2016 and since then has never stopped. He is particularilly
      fond of the roots music and dancing style. Speaking about roots, thanks to his Belgian roots, he has always had a strong connection
      to the sea and he has explored many different ways of combining the wind and the sea to have a good time. Sailing boats have slowly
      started replacing surf boards and in this he is continuing a long standing family tradition. His Father and Grandfather have also been
      sailors in their time. So combining sailing, dancing forro and good friends sounded like a great idea to him from the start and he has
      participated in all previous sailing weeks as a skipper of one of our boats. `,
      groupName: 'Skippers & Co-Skippers',
      role: 'Skipper',
      imgPath: 'team/cl-596-min.jpg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'iljya-kalai',
      name: 'Iljya Kalai',
      description: `Iljya's fascination with Brazil dates back to an Intro to Jazz class, where he heard his first Bossa Nova. Soon after, he
      started learning Portuguese and traveled to Brazil where he discovered forró. Years later, an audacious plan was born: to buy a sailboat
      and sail to Brazil. Now he is grateful to contribute his experience as a skipper to such a wonderful and out of the ordinary community
      of sailor dancers.`,
      groupName: 'Skippers & Co-Skippers',
      role: 'Skipper',
      imgPath: 'team/IMG-20160312-WA0021.jpg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'josip-drinovac',
      name: 'Josip Drinovac',
      description: `Josip is a full time professional skipper and owner of the Lighouse Sailing - Yacht Charter.
      He supports us by providing us great charter deals and also jumps on board now and then as a skipper.
      The FSW also profits from his expert advices in the Yachting industry.`,
      groupName: 'Skippers & Co-Skippers',
      role: 'Skipper',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'thomas-florian',
      name: 'Thomas Florian',
      description: `Thomas got into dinghy sailing in 2009, into dancing Forró 2015. FSW combines both of these passions. Secret power
      is knowing an inappropriate joke for every situation. Likes to prepare morning pancakes. `,
      groupName: 'Skippers & Co-Skippers',
      role: 'Skipper',
      imgPath: 'team/IMG_0763-min.jpg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'nastasia-oppermann',
      name: 'Nastasia Oppermann',
      description: `Sven has been dancing all his life. He started forro back in 2016 and since then has never stopped. He is particularilly
      fond of the roots music and dancing style. Speaking about roots, thanks to his Belgian roots, he has always had a strong connection
      to the sea and he has explored many different ways of combining the wind and the sea to have a good time. Sailing boats have slowly
      started replacing surf boards and in this he is continuing a long standing family tradition. His Father and Grandfather have also been
      sailors in their time. So combining sailing, dancing forro and good friends sounded like a great idea to him from the start and he has
      participated in all previous sailing weeks as a skipper of one of our boats. `,
      groupName: 'Skippers & Co-Skippers',
      role: 'Co-Skipper',
      imgPath: 'team/WhatsApp Image1.jpeg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'fernando-pierobon',
      name: 'Fernando Pierobon',
      description: `Fernando started dancing forró and sailing on the first Forró Sail Week and has been with us ever since. Very talented mechanical
      craftsmanship and always kind to help others, he is a big added value to the FSW. He has the patience of a saint and if you want to learn
      some sailing basics are also some other random stuff, there is quite some knowledge you can absorb from this guy.`,
      groupName: 'Skippers & Co-Skippers',
      role: 'Co-Skipper',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'sami-barasi',
      name: 'Sami Barasi',
      description: `Josip is a full time professional skipper and owner of the Lighouse Sailing - Yacht Charter.
      He supports us by providing us great charter deals and also jumps on board now and then as a skipper.
      The FSW also profits from his expert advices in the Yachting industry.`,
      groupName: 'Skippers & Co-Skippers',
      role: 'Skipper',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'matheus-antunes',
      name: 'Matheus Antunes',
      description: `Matheus Antunes is a Forró dance teacher living in Germany.
      Born in Belo Horizonte/MG, Brazil, he started having dance classes at Pé Descalço in 2012. Two years later,
      for the first time living abroad (Germany), he met several Forró Festivals in Europe, attending to workshops
      of teachers of many diverse styles, besides being a regular student for some time at Munique Dança Forró and
      for a year at Forró de Colônia, where he had his first guided teaching experiences in 2015.
      In 2016, back in BH, Matheus started teaching at the university UFMG. And besides spreading his passion and
      knowledge about Forró, he started expanding it again in 2017 at the school Simbora Dançar, this time specially
      focused on a dance style commonly referred to as “roots”.
      In 2018 he decided to move back to Germany, where he became teacher and vice-president at Forró de Colônia,
      even creating a new filial of the school in 2019 in Duisburg. Finally, in the end of 2021, Matheus moved to
      Berlin and founded his own forró group, where he still teaches today.`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Forró Teacher',
      imgPath: 'team/IMG_12346.jpg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'diana-richter',
      name: 'Diana Richter',
      description: `Diana Richter, born and raised in Düsseldorf, dances passionately since she's three years old. She works as a professional
      dancer, teacher and choreographer in different solo and couple dances. She has been teaching styles like contemporary dance, modern
      dance, elementary dance and much more for 13 years now. \n
      Before, she also practiced ballet, cheerleading and Discodance and participated in many competitions. She became a dancer and choreographer of a dance theater ensemble, which produced successful performances throughout the last years, in 2015.
      Diana studied sports and dance in Cologne and also finished a three year long dancer's education. \n
      Diana started dancing Forró in 2015. Since the beginning of 2017, she is teaching regular Forró and Ladystyling classes in Düsseldorf,
      as well as at national and international Festivals all over the world. She also has knowledge about Zouk, Samba de Gafieira and more couple
      dances. Because her love and passion for dance is so inspiring and important to her, it is an honor for her to share this passion and her
      knowledge with other people.`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Forró Teacher',
      imgPath: 'team/IMG_1234.jpeg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'anax-caracol',
      name: 'Anax Caracol',
      description: `Anax Caracol is a nortista brasileiro, born in the heart of Brazil in the state of Tocantins. Between
      the amazon and the Northeast of the country. His passion for dance was sparked from a very early age, inspired by his
      family who taught him the value and importance of the rich cultural heritage of the North and North-East of Brazil. \n
      Anax's interests grew once he moved to the cultural Coco town of Arcoverde in the back lands of the state of Pernambuco at
      the age 8 years old. From there, he explored and learned many types of popular dances such as Coco, Maracatu, Jongo, Samba
      de Roda, Brazilian contemporary, Orixas dances and of course Forró. \n
      Anax has trained with folkloric dance masters such as Antonio Nobrega, Lula Calixto, Omolu and others who inspired him in his
      life and career as a dancer. His experiences led to his participation in one of the top Afro companies in the country, the Bale
      Folclorico da Bahia and the well-known classic company of Carmen Serra in Spain. \n
      Since moving to London in 2009, Anax became a key part of the Forró scene in the UK, teaching regular classes in London, Birmingham,
      Bristol and in different universities around UK. He also teaches and performs at numerous dance festivals around Europe and the all
      globe in such places as Canada, Japan and Russia. Anax is a teacher and founder of Forro Brincado. A project that brings Brazilian
      popular culture from the northeast to the UK and all of Europe by dance classes and weekly and yearly events. Anax Forro style is an
      amalgamation of many forms of movement and expression, and is heavily influenced by Afro and Indigenous background, where use of hibs
      , body language and footwork is emphasized, making the dance more playful and fun.`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Forró Teacher',
      imgPath: 'team/Anax.jpg',
      editions: ['fsw21'], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'tiago-moraes',
      name: 'Tiago Moraes',
      description: `Tiago is a Brazilian Ballroom Dance teacher for Zouk, Forró & Samba de gafiera. Based in Cologne
      Germany. His dance style has a well-balanced focus on technique, musicality and connection. Due his
      graduation as a strength and conditioning coach his method of teaching is really well structured and full
      of touchable details, making the classes really clear! Tiago has a contagious energy when dancing or
      teaching that makes you feel energized & good humoured! So, expect a class (or a dance) fully of details
      but not boring! Balance is everything!`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Forró Teacher',
      imgPath: 'team/index12.jpg',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'terra-jiordano-pasqualin',
      name: 'Terra Jiordano Pasqualin',
      description: `Terra Pasqualini was born in Minas Gerais and grew up in São Paulo. At the age of 15 years, he
      discovered the mid-90s strongly growing Forró scene in São Paulo and began to learn this dance and to frequent
      the booming "Casas de Forró" of São Paulo.
      The upswing of this new cultural movement caused an urbanization of the traditional „Forró Pé de-Serra“. This new
      interpretation and development of Forró is what stamps Terra's dance stil and also what he transmits to his pupils.
      Creator of the first and greatest Forró Festival outside Brazil, the Forró de Domingo Festival, Terra nowadays
      developed spaces for dialogue, with the purpose of uniting the forces of opinion makers within the Forró scene to
      create a movement that knows how to support everyone. Since 2002, he lives in Germany and is considered one of the
      main characters in the dissemination of Forró in Europe.`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Forró Teacher',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'gabriel-walsh',
      name: 'Gabriel Walsh',
      description: `Gabriel Walsh is an English musician who in 2014 traveled to Brazil and fell madly in love with forró,
      so much so that he was inspired to buy a accordion and start resuming. He took class with the great accordioners of
      Brazil and now lives in Lisbon, playing forró, jazz and chorinho.`,
      groupName: 'Forró Teachers & Musicians',
      role: 'Sanfoneiro',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'helena-coelho',
      name: 'Helena Coelho',
      description: `At the age of 8, Helena performed at a live TV show for the first time and fell in love with the magical
      world of media. Born in Porto Alegre in a family of artists, she grew up on and backstage singing and dancing in several
      artistic productions - from musicals to song albuns and video clips. Professionally, she combined her passions for arts
      and the media pursuing a career in cultural journalism having reported and hosted shows for international audiences.
      Ironically, it was in Germany that forró came to her life… and because one good thing leads to another she lived the dream of
      meeting and joining the FSW team: can you think of more inspiring images than people dancing to the wave beats of turquoise waters?`,
      groupName: 'Partners',
      role: 'Content Producer and ORGA support',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
    {
      id: 'ciaran',
      name: 'Ciaran',
      description: `Ciarán has been working in web agencies as a technical account manager for 10 years, and organising forró festivals
      and weekly parties in Dublin for 3 years.
      He is passionate about community and the impact that our social technology has on them. As part of Plug.events, his project to support
      the forró community through accurate event information and communication across communities outside of social media, Ciaran provides a
      simple ticketing service to select forró organisers for free. `,
      groupName: 'Partners',
      role: 'Provider of ticket system Tuvens',
      imgPath: 'misc/logo.png',
      editions: [], // possible values: 'fsw19', 'fsw20', 'fsw21', 'fsw22' or 'fsw23'
    },
  ],

  eventsData: [
    {
      id: 'fsw19',
      title: 'Marina Baotic / Split Marina',
      city: 'Split',
      region: 'Croatia',
      description: `We did it! Our first Forró Sailing Week!

33 forró dancers from 10+ countries, 2 amazing teachers (Tiago & Terra) set sails from Split towards the north.

4 Workshops: we started in an abandoned hut at a beach @ 2 workshops in 2 different Piazzas (where we even got drink shot from locals, that loves our dancing) and finally in an abandanod hotel with view to the sea. The amazing fish party crowned it all. Not even storms and rains could stop us!
Further nights and boat rafts in amazing bays all by ourselves wrapped up the week!`,
      teachers: ['Tiago Moraes', 'Terra (Jiordano Pasqualini)'],
      musicians: [],
      skippers: ['Bernardo Low-Beer', 'Josip Drinovac', 'Sven De Causmaecker'],
      boats: ['Lagoon 45', 'Lagoon 40', 'Bavaria 50'],
      imgPath:
        'https://www.baotic-yachting.com/datastore/imagestore/original/1607695568DJI_0102.jpg',
      date: ['May 25, 2019', 'June 01, 2019'],
      participants: 33,
      cost: '',
      currency: 'EUR',
    },
    {
      id: 'fsw20',
      title: 'Marina Baotic / Split Marina',
      city: 'Split',
      region: 'Croatia',
      description: `Corona hit in... Our original event with over 40 people had to be postponed... a lot of work, world confusion and an emptiness. :(
Some months later, a light comes in the end of the tunnel... We could organize a one boat FSW for half prices.

We grabed this chance in what turned out to be one of the funniest and most spontaneous trips of all times.
Some fotos from this trip are censored to the public. lol. Who was there knows what we mean.
Viva watermelon!

Mostly calm winds led to a lot of motoring, but we could reach the far side of xxx, where we ended up meeting some other friends boat and blocked the entire bay for ourselves.`,
      teachers: [],
      musicians: [],
      skippers: ['Bernardo Low-Beer'],
      boats: ['Monohaul'],
      imgPath:
        'https://www.baotic-yachting.com/datastore/imagestore/original/1607695503DJI_0065.jpg',
      date: ['August 08, 2020', 'August 15, 2020'],
      participants: 12,
      cost: '',
      currency: 'EUR',
    },
    {
      id: 'fsw21',
      title: 'Cala dei Sardi / Marina Portisco',
      city: 'Olbia',
      region: 'Sardinia / Corsica',
      description: `Postponement after postponement, and so much insecurity towards travellig regulations and corona itself, but we finally made it!
Everyone tested and we hop on board from Olbia towards Bonifacio. Some storms along the way and big seas, but nothing could stop us anymore.

Amazing Forró workshops in a dust pier of a virgin bay, in an abandoned ruin on the top of Bonifacio and in the Plage de Vo'lpe in Corsica with a legendary fire on the beach with some extra adventure after that. The white party in our flag boat went wild midst the abandoned bay and we could finish the week with great dances on the boats pier or in an Olbia city square.

Big thanks in this event goes also to our amazing skippers, who did a great job under challenging conditions.`,
      teachers: ['Anax'],
      musicians: [],
      skippers: [
        'Bernardo Low-Beer',
        'Sven De Causmaecker',
        'Iljya Kalai',
        'Thomas Florian',
      ],
      boats: ['Lagoon 45', 'Lagoon 40', 'Lagoon 44', 'Bavaria 50'],
      imgPath:
        'https://www.marinebusinessworld.com/photos/marineindustry/yysw363396.jpg',
      date: ['October 10, 2021', 'October 10, 2021'],
      participants: 46,
      cost: '',
      currency: 'EUR',
    },
    {
      id: 'fsw22',
      title: 'Poltu Quatu / Marina Cannigione',
      city: 'Olbia',
      region: 'Sardinia / Corsica',
      description: `FSW22 started with a great dance and meet-up on the pier of the amazing Polto Quatu. First upwind towards Madalena national park and then the crossing to place we had our first incredible workshop with Diana at dawn in the corsica beach Plage de Gandina.

We then headed north to the far end of this route in Porto Vecchio, where we took the dance floor of every square of the city center and ended up with pier dancing and the delicious open pot dinner with the best dishes of all our boats.

Closing of the week was in a dancing raft party in a bay all for ourselves in the Isola Spargi and finally a 3 course dinner in a hotel in the land side of sardinia with a live band concert from Gabriel Gouveia and Margherita Violeiro.`,
      teachers: ['Diana Richter'],
      musicians: ['Gabriel Walsch'],
      skippers: [
        'Bernardo Low-Beer',
        'Sven De Causmaecker',
        'Iljya Kalai',
        'Gerrit Fachinger',
      ],
      boats: ['Lagoon 44', 'Lagoon 42', 'Lagoon 39', 'Oceanis 48'],
      imgPath:
        'https://d1y5anlg0g4t8d.cloudfront.net/709/gallery/medium/marina03-1024x768.jpg',
      date: ['May 28, 2022', 'June 04, 2022'],
      participants: 48,
      cost: '',
      currency: 'EUR',
    },
    {
      id: 'fsw23',
      title: '???',
      city: 'Athens',
      region: 'Greece',
      description: `Get ready for the first FSW to happen in greek waters!!!`,
      teachers: ['Matheus Antunes'],
      musicians: [''],
      skippers: [
        'Bernardo Low-Beer',
        'Gerrit Fachinger',
        'Sven De Causmaecker',
        'Iljya Kalai',
      ],
      boats: ['Lagoon 44', 'Lagoon 42', 'Lagoon 39', 'Oceanis 48'],
      imgPath:
        'https://www.athenasail.com/wp-content/uploads/2019/03/Sosta-bagno-nell-isola-di-Spargi-1030x687.jpg',
      date: ['May 27, 2023', 'June 03, 2023'],
      participants: null,
      cost: '',
      currency: 'EUR',
    },
  ],

  ratesData: [
    {
      title: 'General',
      description:
        'The best and most exclusive option here blablabla you will not regret.',
      included: [
        '17 days living in a sailing boat',
        'Skippers',
        '5 Swing Parties (2/5 will take place in Athens and 3/5 in selected venues of the islands we are visiting)',
        '14 hours of swing classes and more',
        'Fuel and water, bikinis',
      ],
      notIncluded: [
        'Food anfdad beverages',
        'Accommodation ifdsa n Athens (two nights)',
        '4 hours of swinfdsa fdsag classes',
        'Bus tickfsdaf dsa et (+70,00 € Roundtrip ticket)',
      ],
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in lovf dsa fdsae? Since Swing'n'Sail seems to be the perfediscount. Send us an email at info@swingnsail.com to know more about it.",
      ],
      PhotoGallery: ['', '', '', '', '', ''],
    },
    {
      title: 'Gold',
      description:
        'The best and most exclusive option here blablabla you will not regret.',
      included: [
        '17 days living in a sailing boat',
        'Skippers',
        '5 Swing Parties (2/5 will take place in Athens and 3/5 in selected venues of the islands we are visiting)',
        '14 hours of swing classes and more',
        'Fuel and water, bikinis',
      ],
      notIncluded: [
        'Food anfdad beverages',
        'Accommodation ifdsa n Athens (two nights)',
        '4 hours of swinfdsa fdsag classes',
        'Bus tickfsdaf dsa et (+70,00 € Roundtrip ticket)',
      ],
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in lovf dsa fdsae? Since Swing'n'Sail seems to be the perfediscount. Send us an email at info@swingnsail.com to know more about it.",
      ],
      PhotoGallery: ['', '', '', '', '', ''],
    },
    {
      title: 'Silver',
      description:
        'Short description about this plan. A paragraph describing a feature will be enough.',
      included: [
        '7 days living in a sailing boat',
        'Skipper',
        '5 Swing Parties (2/5 will take place in Athens and 3/5 in selected venues of the islands we are visiting)',
        '4 hours of swing classes',
        'Fuel and water',
      ],
      notIncluded: [
        'Food and beverages',
        'Accommodation in Athens (two nights)',
        '4 hours of swing classes',
        'Bus ticket (+70,00 € Roundtrip ticket)',
      ],
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in love? Since Swing'n'Sail seems to be the perfect landscape for engagement and marriage proposals (we experienced two so far) we give 5% discount to dancing couples in love! Send us an email at info@swingnsail.com to know more about it.",
        'You are a Greek dancer? Considering our financial and political situation our country experiences, yes, you get a discount. Send us an email at info@swingnsail.com to know more about it.',
      ],
      PhotoGallery: ['', '', '', '', '', ''],
    },
    {
      title: 'Bronze',
      description:
        'Economic class, blablabla but you are going to have much fun anyway',
      included: [
        '7 days living',
        'Skipper',
        '5 Swing Parties only',
        '40 minutes of swing classes',
        'Fuel and water',
      ],
      notIncluded: [
        'Food and beverages',
        'Accommodation in Athens (two nights)',
        '4 hours of swing classes',
        'Bus ticket (+70,00 € Roundtrip ticket)',
      ],
      SpecialRates: [
        "Have you already joined the Swing'n'Sail event, had an unforgettable experience, you can't get over this, you can't get over us (!) and want to meet again? You get 10% discount ! Send us an email at info@swingnsail.com to know more about it.",
        "You are a couple in love? Since Swing'n'Sail seems to be the perfect landscape for engagement and marriage proposals (we experienced two so far) we give 5% discount to dancing couples in love! Send us an email at info@swingnsail.com to know more about it.",
        'You are a Greek dancer? Considering our financial and political situation our country experiences, yes, you get a discount. Send us an email at info@swingnsail.com to know more about it.',
      ],
      PhotoGallery: ['', '', '', '', '', ''],
    },
  ],
};

export default DATA;

/*
General:
  - About Us, Motivation, FAQ, Contact
    -- We can make rates linked to the latest fsw event

- Edition:
  fsw22, ...
  fsw23, routes, rates, photos, general, special guests...

- Rates:
  gold, silver, bronze
*/
