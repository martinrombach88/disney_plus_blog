const mediaList = [
  {
    id: 0,
    type: "TV Show",
    title: "Agents of Shield",
    description:
      "After the events of Avengers 1, the Strategic Homeland Intervention Enforcement: Logistics Division (S.H.I.E.L.D.) assembles a team of agents to discover and contain unique events. The team is headed by Phil Coulson, who was thought to be dead.",
    release: 2013,
    rtRating: "Critics 93%, Audience 91%",
    watchPlaceSK: "Disney +",
    watchPlaceUK: "Disney +",
    imagePath: "/assets/images/shield.jpg",
    posts: [0, 1, 2],
    postTitles: [
      "Review - Agents of Shield",
      "Review - Agents of Shield",
      "Review - Agents of Shield",
    ],
  },
  {
    id: 1,
    type: "Movie",
    title: "Ant-Man",
    description:
      "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants.",
    release: "Jul 17, 2015",
    rtRating: "Critics: 83% Audience: 85%",
    watchPlaceSK: "Disney +",
    watchPlaceUK: "Disney +",
    imagePath: "./assets/images/antman.jpg",
    posts: [0, 1, 2],
    postTitles: [
      "Top Ten Superhero Movies",
      "Top Ten Marvel Cinematic Universe Movies",
      "Ant-Man Review",
    ],
  },
  {
    id: 2,
    type: "TV Show",
    title: "Star Trek Discovery",
    description:
      "Ten years before Kirk, Spock, and the Enterprise, the USS Discovery discovers new worlds and lifeforms as one Starfleet officer learns to understand all things alien.",
    release: 2013,
    rtRating: "Critics: 85%, Audience 36%",
    watchPlaceSK: "Paramount Plus",
    watchPlaceUK: "Pluto TV",
    imagePath: "/assets/images/s_discovery.jpg",
    postTitles: [
      "Top Ten Unpopular Reboots",
      "Star Trek Series Ranked",
      "Star Trek Series Ranked",
    ],
    posts: [0, 1, 2],
  },
];

export const getMedia = (mediaId) => {
  return mediaList[mediaId];
};
