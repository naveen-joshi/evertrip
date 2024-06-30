export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#tours", key: "tours", label: "Tours" },
  { href: "#features", key: "features ", label: "Why Evertrip" },
  { href: "#contact_us", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "W - provi -  a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "S - edule - n adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "T - hnolo -  uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "L - s of  - w locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone", value: "+91-9653810555" },
    { label: "Email", value: "salesevertrip1@gmail.com" },
    {
      label: "Address",
      value: "5, J, 10, Housing Board, Shastri Nagar, Jaipur",
    },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const tours = [
  {
    state: "Leh Ladakh",
    packages: [
      {
        id: "ladakh-1",
        name: "6 Days Summer Trip",
        price: 58999,
        duration: "5N/6D",
        description: "Pangong - Leh - Diskit",
        cover: "/ladakh_1.jpeg",
        thumbnail: "/ladakh_1_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Inner Line Permits",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival and Welcome",
            description:
              "Upon arrival at the Leh Airport, you will be received by our representative and transferred to your hotel. Enjoy simple and light lunch today at your respective hotels. Since you are arriving at 11000 ft, we strongly recommend taking complete rest and drink ample water on the first day where you should not indulge yourself in any strenuous activity. Rest of the day is free to acclimatize to the high altitude of Leh. Overnight stay at hote",
            hotels:
              "Hotel - Jeevnam Villa/ The Mogol/ Ladakh Heaven/Similar in Leh",
            meals: "Lunch and Dinner",
          },
          {
            title: "Day 2: Sightseeing in Leh",
            description:
              "Sham Valley Tour - Hall Of Fame, Magnetic Hill, Gurudwara Pathar Sahib and Sangam After breakfast, we will drive alongside bank of Indus river till Sangam, to witness the the conflicts of Zanskar river and Indus River. En-route we will be visiting Gurdwara Pathar Sahib, Magnetic Hill (where the cars defy gravity) and Hall of Fame (which has a museum of the Kargil War memorabilia). Later in the afternoon visit Shanti Stupa. and Hall of Fame (which has a museum of the Kargil War memorabilia). Later in the afternoon visit Shanti Stupa. Return to your hotel and relax for the day. Overnight stay at the hotel.",
            meals: "Breakfast, Lunch (Local Restaurant) and Dinner",
            hotels:
              "Hotel - Jeevnam Villa/ The Mogol/ Ladakh Heaven/Similar in Leh",
          },
          {
            title: "Day 3: Leh to Nubra Valley",
            description:
              "Today post breakfast check out of the hotel and we will start our journey to Nubra Valley through Khardungla, which is the World's highest motor able road at 18,832 feet above sea level. At Khardungla pass the snow-capped peaks and the mountain views are amazing. The road then passes through a bridge laid on Glacier which finds its way in Guinness Book of world records. Drive through the Valley which is extremely beautiful for photography.Nubra Valley is the Oasis of Ladakh as you see some colourful trees in this region. Check in and enjoy your lunch. Nubra Valley is the Oasis of Ladakh as you see some colourful trees in this region. Check in and enjoy your lunch. Post lunch visit the Hunder sand dunes and get the sight of the Double Hump Bactrian camels (camel ride to be on direct payment basis), enjoy leisure time at the Sand Dunes of Nubra valley spread across Hundur Village. Later in the evening, return to your respective camps. Overnight stay at the camp.",
            hotels:
              "Hotel - Alpen Glow Camp/ Mountain Camp/ Nubra Delight Camp /Similar in Nubra Valley",
            meals: "Breakfast, Lunch (Local Restaurant) and Dinner",
          },
          {
            title: "Day 4: Nubra Valley to Pangong Lake",
            description: "Travel to Pangong Lake and enjoy the scenic beauty.",
          },
          {
            title: "Day 5: Pangong Lake to Leh",
            description: "Journey from Pangong Lake to Leh.",
          },
          {
            title: "Day 7: Departure from Leh",
            description: "Return to Leh for departure.",
          },
        ],
      },
      {
        id: "ladakh-2",
        name: "7 Days Summer Trip",
        price: 63720,
        duration: "6N/7D",
        description: "Pangong - Turtuk - Diskit",
        cover: "/ladakh_2.jpeg",
        thumbnail: "/ladakh_2_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Inner Line Permits",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival and Welcome",
            description:
              "Upon arrival at the Leh Airport, you will be received by our representative and transferred to your hotel. Enjoy simple and light lunch today at your respective hotels. Since you are arriving at 11000 ft, we strongly recommend taking complete rest and drink ample water on the first day where you should not indulge yourself in any strenuous activity. Rest of the day is free to acclimatize to the high altitude of Leh. Overnight stay at hote",
            hotels:
              "Hotel - Jeevnam Villa/ The Mogol/ Ladakh Heaven/Similar in Leh",
            meals: "Lunch and Dinner",
          },
          {
            title: "Day 2: Sightseeing in Leh",
            description:
              "Sham Valley Tour - Hall Of Fame, Magnetic Hill, Gurudwara Pathar Sahib and Sangam After breakfast, we will drive alongside bank of Indus river till Sangam, to witness the the conflicts of Zanskar river and Indus River. En-route we will be visiting Gurdwara Pathar Sahib, Magnetic Hill (where the cars defy gravity) and Hall of Fame (which has a museum of the Kargil War memorabilia). Later in the afternoon visit Shanti Stupa. and Hall of Fame (which has a museum of the Kargil War memorabilia). Later in the afternoon visit Shanti Stupa. Return to your hotel and relax for the day. Overnight stay at the hotel.",
            meals: "Breakfast, Lunch (Local Restaurant) and Dinner",
            hotels:
              "Hotel - Jeevnam Villa/ The Mogol/ Ladakh Heaven/Similar in Leh",
          },
          {
            title: "Day 3: Leh to Nubra Valley",
            description:
              "Today post breakfast check out of the hotel and we will start our journey to Nubra Valley through Khardungla, which is the World's highest motor able road at 18,832 feet above sea level. At Khardungla pass the snow-capped peaks and the mountain views are amazing. The road then passes through a bridge laid on Glacier which finds its way in Guinness Book of world records. Drive through the Valley which is extremely beautiful for photography.Nubra Valley is the Oasis of Ladakh as you see some colourful trees in this region. Check in and enjoy your lunch. Nubra Valley is the Oasis of Ladakh as you see some colourful trees in this region. Check in and enjoy your lunch. Post lunch visit the Hunder sand dunes and get the sight of the Double Hump Bactrian camels (camel ride to be on direct payment basis), enjoy leisure time at the Sand Dunes of Nubra valley spread across Hundur Village. Later in the evening, return to your respective camps. Overnight stay at the camp.",
            hotels:
              "Hotel - Alpen Glow Camp/ Mountain Camp/ Nubra Delight Camp /Similar in Nubra Valley",
            meals: "Breakfast, Lunch (Local Restaurant) and Dinner",
          },
          {
            title: "Day 4: Nubra Valley to Turtuk",
            description:
              "Travel to Turtuk and explore the vilage and culture. Head back to Nubra towards end of the day.",
          },
          {
            title: "Day 5: Nubra to Pangong",
            description: "Journey to Mighty Pangong Lake thourgh Scenic Route.",
          },
          {
            title: "Day 6: Pangong to Leh",
            description: "Drive towards Leh.",
          },
          {
            title: "Day 7: Departure from Leh",
            description: "Return to Leh for departure.",
          },
        ],
      },
    ],
  },
  {
    state: "Kashmir",
    packages: [
      {
        id: "kashmir-1",
        name: "Kashmir Essentials",
        price: 39999,
        duration: "4N/5D",
        description: "Srinagar - Gulmarg - Pahalgam",
        cover: "/kashmir_1.jpg",
        thumbnail: "/kashmir_1_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Inner Line Permits",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrive Srinagar",
            description:
              "Arrival from Srinagar Airport &  transfer to hotel  after refreshing visit to the Mughal gardens built by Emperor Jehangir. Also visit to the Shalimar bagh & Nishat bagh other beautiful gardens located on the eastern side of the Dal lake .& also visit to hazratbal shrine overnight  in hotel in Srinagar.  hotel in srinagar",
          },
          {
            title: "Day 2: Sightseeing in Srinagar",
            description:
              "Morning after breakfast  you will proceed for a full day excursion to Gulmarg,  & visit Meadow of Flowers including drung waterfall ( 65 kms  situated at an altitude of 2730 meters, full day at leisure to take the leisurely walks on the lush green meadows of flowers with a backdrop of the snow capped mountains .Enjoy pony ride or Gondola ride (rope way) to Khillanmarg at your own cost Enjoy pony ride or Gondola ride (rope way at your own cost) to Khillanmarg at your own cost & overnight in srinagar.",
          },
          {
            title: "Day 3: Srinagar to Pahalgam",
            description:
              "Morning after breakfast  you will be transferred by road to Pahalgam (98 kms/3.hrs) Valley of Shepherds. Enroute you will have an rare opportunity to visit the Saffron fields. Also visit Avantipura Ruins & Anantnag Sulpher Springs enroute, Enjoy the bounty of Nature at Pahalgam, located on the bank of beautyful Lidder River, it is a valley of shepherds pahalgam is famous for its natural beauty and trout fishing &  Aru valley and chandanwari by car. Aru is small village, 11 kms upstream the Lidder River, is a beautiful locality & Overnight in the hotel pahalgam.",
          },
          {
            title: "Day 4: Pahalgam to Srinagar",
            description:
              "Morning after breakfast visit to Biasaran valley mani Switzerland and back to Srinagar overnight stay at houseboat in Dal lake.",
          },
          {
            title: "Day 5: Depart Srinagar",
            description:
              "Morning after  breakfast  transfer to Srinagar Airport   for your onwards",
          },
        ],
      },
    ],
  },
  {
    state: "Rajasthan",
    packages: [
      {
        id: "rajasthan-1",
        name: "Mirror of Rajasthan",
        price: 45570,
        duration: "4N/5D",
        description: "Jaipur - Jodhpur - Udaipur",
        cover: "/rajasthan_1.jpg",
        thumbnail: "/rajasthan_1_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival and Welcome",
            description:
              "On arrival at the airport / railway station in Jaipur, you will be met and transferred to your hotel. Visit Albert Hall Musuem, City Palace of Jaipur, Jantar Mantar, Hawamahl and the Market of Jaipur. Near Albert Hall visit Jaipur Chopati which delivered the best city food in Jaipur. Overnight at Hotel in Jaipur.. (Early Check in subject to availability and subject to charge.) .",
          },
          {
            title: "Day 2: Jaipur Tour",
            description:
              "Today, After Breakfast visit Amer Fort, Nahargarh Fort, Panna Meena Kund Stepwell, Jaigarh Fort, and Jalmahal. In the evening free for leisure and explore the old market of Jaipur by walk. Overnight at Hotel in Jaipur. About Amer Fort :- Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace. Reference no. Amer Palace is great example of Rajput architecture",
          },
          {
            title: "Day 3: Jodhpur Transfer via covering Ajmer and Pushkar",
            description:
              "After Breakfast, proceed to Jodhpur (Approx 360 km) via covering Ajmer Dargarh, Ana sagar lake, Pushkar Brahma Temple, Ropeway and Pushkar Ghat. In the evening Check-in into the Hotel. Overnight at Hotel in Jodhpur.",
          },
          {
            title: "Day 4: Explore Jodhpur",
            description:
              "After Breakfast, visit Mehrangarh Fort, Jaswant Thada, Mandore Gardens, Rao Jodha Desert Park and Ummed Bhawan Museum. Then visit Clock Tower and explore Market of Jodhpur. Overnight at Hotel in Jodhpur. Jodhpur is famous for Mawa kachori and Leather Goods.",
          },
          {
            title: "Day 5: Departure Day",
            description:
              "Today, After Breakfast you are transferred to the railway station/ Airport in Jodhpur/ Jaipur",
          },
        ],
      },
      {
        id: "rajasthan-2",
        name: "Mirror of Rajasthan - II",
        price: 69770,
        duration: "6N/7D",
        description: "Jaipur - Jodhpur - Udaipur",
        cover: "/rajasthan_1.jpg",
        thumbnail: "/rajasthan_1_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival and Welcome",
            description:
              "On arrival at the airport / railway station in Jaipur, you will be met and transferred to your hotel. Visit Albert Hall Musuem, City Palace of Jaipur, Jantar Mantar, Hawamahl and the Market of Jaipur. Near Albert Hall visit Jaipur Chopati which delivered the best city food in Jaipur. Overnight at Hotel in Jaipur.. (Early Check in subject to availability and subject to charge.)",
          },
          {
            title: "Day 2: Jaipur Tour",
            description:
              "Today, After Breakfast visit Amer Fort, Nahargarh Fort, Panna Meena Kund Stepwell, Jaigarh Fort, and Jalmahal. In the evening free for leisure and explore the old market of Jaipur by walk. Overnight at Hotel in Jaipur. About Amer Fort :- Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace. Reference no. Amer Palace is great example of Rajput architecture.",
          },
          {
            title: "Day 3: Jodhpur Transfer via covering Ajmer and Pushkar",
            description:
              "After Breakfast, proceed to Jodhpur (Approx 360 km) via covering Ajmer Dargarh, Ana sagar lake, Pushkar Brahma Temple, Ropeway and Pushkar Ghat. In the evening Check-in into the Hotel. Overnight at Hotel in Jodhpur.",
          },
          {
            title: "Day 4: Explore Jodhpur",
            description:
              "After Breakfast, visit Mehrangarh Fort, Jaswant Thada, Mandore Gardens, Rao Jodha Desert Park and Ummed Bhawan Museum. Then visit Clock Tower and explore Market of Jodhpur. Overnight at Hotel in Jodhpur. Jodhpur is famous for Mawa kachori and Leather Goods.",
          },
          {
            title:
              "Day 5: Udaipur transfer via covering Kumbhalgarh Fort and Ranakpur Jain Temple",
            description:
              "After Breakfast, proceed to Udaipur (Approx 300 km) via covering Kumbhalgarh Fort and Ranakpur Jain Temple. In the evening check-in at the Hotel in Udaipur. Overnight at Hotel in Udaipur. About Kumbhalgarh Fort :- With the second-longest wall in the world, about 38 km long, the Kumbhalgarh Fort is recognised as a UNESCO World Heritage Site. Also, known as the Mewar Fortress, it was the birthplace of the great Rajput king, Maharana Pratap. Everything about the fort has been built to fend off the enemy.",
          },
          {
            title: "Day 6: Explore Udaipur",
            description:
              "After breakfast, enjoy a tour of Udaipur Start from Saheliyon ki bari, City palace of Udaipur, Karni mata temple, Shilpgram, Bhartiyan Lok Kala mandal and in the evening enjoy ride of boat at Pichola Lake. The rest of the day is at leisure for independent activities. Overnight in Udaipur.",
          },
          {
            title: "Day 7: Departure Day",
            description:
              "Today, After Breakfast you are transferred to the railway station/ Airport in Udaipur for your onward journey via covering Sajjangarh Fort, and Fateh Prakash Sagar. (Departure day itinerary will depend on your departure schedule).",
          },
        ],
      },
      {
        id: "rajasthan-3",
        name: "Rangeelo Rajasthan",
        price: 51620,
        duration: "5N/6D",
        description: "Jaipur - Udaipur - Mount Abu",
        cover: "/rajasthan_3.jpeg",
        thumbnail: "/rajasthan_3_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "You should pack casual clothes, biking gear, and shoes.",
          },
          {
            question: "Is there a guide?",
            answer: "Yes, there will be a guide for the entire trip.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional vehicles",
          "Activities (Camel ride, ATV, etc.)",
          "Any personal expenses at Hotel or Outside.",
          "Entry fees or tickets.",
          "GST will be applicable as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival and Welcome Jaipur",
            description:
              "On arrival at the airport / railway station in Jaipur, you will be met and transferred to your hotel. Visit Albert Hall Musuem, City Palace of Jaipur, Jantar Mantar, Hawamahl and the Market of Jaipur. Near Albert Hall visit Jaipur Chopati which delivered the best city food in Jaipur. Overnight at Hotel in Jaipur.. (Early Check in subject to availability and subject to charge.)",
          },
          {
            title: "Day 2: Sightseeing in Jaipur",
            description:
              "Today, After Breakfast visit Amer Fort, Nahargarh Fort, Panna Meena Kund Stepwell, Jaigarh Fort, and Jalmahal. In the evening free for leisure and explore the old market of Jaipur by walk. Overnight at Hotel in Jaipur. About Amer Fort :- Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace. Reference no. Amer Palace is great example of Rajput architecture.",
          },
          {
            title: "Day 3: Udaipur Transfer via covering Ajmer and Pushkar",
            description:
              "After Breakfast, proceed to Udaipur (Approx 399 km) via covering Ajmer Ana sagar lake, Pushkar Brahma Temple, Ropeway, and Pushkar Ghat. In the evening Check-in into the Hotel. Overnight at Hotel in Udaipur.",
          },
          {
            title: "Day 4: Explore Udaipur",
            description:
              "After breakfast, enjoy a tour of Udaipur Start from Saheliyon ki bari, the City palace of Udaipur, Karni Mata temple, Shilpgram, Bhartiyan Lok Kala Mandal, and in the evening enjoy a ride on the boat at Pichola Lake. The rest of the day is at leisure for independent activities. Overnight in Udaipur.",
          },
          {
            title: "Day 5: En Route to Mount Abu",
            description:
              "After breakfast, transfer to Mount Abu (Approx 160km) and check in at the hotel in Mount Abu. then visit Peace Park and in the evening visit Nakki Lake and Sunset Point and Overnight at a hotel in Mount Abu.",
          },
          {
            title: "Day 6: Departure Day",
            description:
              "Today , After Breakfast You Will Be Transferd to Udaipur Airport/Railway Station or Bus Stand",
          },
        ],
      },
    ],
  },
  {
    state: "Andaman and Nicobar Islands",
    packages: [
      {
        id: "andaman-1",
        name: "Week in Andaman",
        price: 44999,
        duration: "5N/6D",
        description: "Port Blair - Havelock - Neil Island",
        cover: "/andaman.jpg",
        thumbnail: "/andaman_1_thumbnail.jpg",
        faqs: [
          {
            question: "What should I pack?",
            answer: "Pack beachwear, sunscreen, and casual clothing.",
          },
          {
            question: "Are water activities included?",
            answer: "Yes, some basic water activities are included.",
          },
        ],
        inclusions: [
          "3 Star Hotel",
          "Meal Plan: Breakfast , Dinner",
          "Taxi: non Ac private cab",
          "Tour assistance",
          "No other clients",
          "Totally private tour",
        ],
        exclusions: [
          "Additional activities",
          "Personal expenses at Hotel or outside",
          "Entry fees or tickets",
          "GST as per prevailing rates",
        ],
        itinerary: [
          {
            title: "Day 1: Arrival at Port Blair",
            description: "Welcome to Andaman, visit Cellular Jail.",
          },
          {
            title: "Day 2: Port Blair to Havelock",
            description: "Travel to Havelock Island, visit Radhanagar Beach.",
          },
          {
            title: "Day 3: Havelock Island",
            description: "Enjoy snorkeling and water activities.",
          },
          {
            title: "Day 4: Havelock to Neil Island",
            description: "Travel to Neil Island, visit natural bridges.",
          },
          {
            title: "Day 5: Neil Island to Port Blair",
            description: "Return to Port Blair, shopping and leisure.",
          },
          {
            title: "Day 6: Departure",
            description: "Check out and departure.",
          },
        ],
      },
    ],
  },
];

export const features = [
  {
    icon: "🏨",
    title: "3-Star Accommodation",
    description:
      "Stay in  -  least 3-star rated accommodations, ensuring comfort and quality.",
  },
  {
    icon: "✅",
    title: "Quality Services",
    description:
      "We are committed to provide exceptional service from start to finish.",
  },
  {
    icon: "🚖",
    title: "Clean Cab Services",
    description:
      "Our cabs are meticulously maintained and regularly sanitized for your safety.",
  },
  {
    icon: "👍",
    title: "We Deliver What We Promise",
    description:
      "Honesty and transparency are our cornerstones, ensuring trust and reliability.",
  },
  {
    icon: "🎉",
    title: "Customer Satisfaction",
    description:
      "We aim to provide memorable adventures tailored to your desires.",
  },
  {
    icon: "💖",
    title: "Serving the Best",
    description:
      "Our goal is to serve you with excellence, creating unforgettable experiences.",
  },
];
