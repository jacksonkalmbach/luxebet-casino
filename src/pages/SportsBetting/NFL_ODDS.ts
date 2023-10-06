export const NFL_DATA = [
  {
    away_team: "Chicago Bears",
    bookmakers: [
      {
        key: "fanduel",
        last_update: "2023-10-05T23:46:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-10-05T23:46:47Z",
            outcomes: [
              {
                name: "Chicago Bears",
                price: 205,
              },
              {
                name: "Washington Commanders",
                price: -255,
              },
            ],
          },
          // ... any other markets for FanDuel
        ],
        title: "FanDuel",
      },
      {
        key: "draftkings",
        last_update: "2023-10-05T23:46:46Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-10-05T23:46:46Z",
            outcomes: [
              {
                name: "Chicago Bears",
                price: 210,
              },
              {
                name: "Washington Commanders",
                price: -258,
              },
            ],
          },
          {
            key: "spreads",
            last_update: "2023-10-05T23:46:46Z",
            outcomes: [
              {
                name: "Chicago Bears",
                point: 6,
                price: -110,
              },
              {
                name: "Washington Commanders",
                point: -6,
                price: -110,
              },
            ],
          },
          // ... any other markets for DraftKings
        ],
        title: "DraftKings",
      },
      // ... any other bookmakers
    ],
    commence_time: "2023-10-06T00:18:00Z",
    home_team: "Washington Commanders",
    id: "115303070d36ce1e366dc4a3091c53cd",
    sport_key: "americanfootball_nfl",
    sport_title: "NFL",
  },

  {
    away_team: "Jacksonville Jaguars",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-10-05T23:46:47Z",
        markets: [], // I've added an empty array because the specific markets for FanDuel weren't provided
      },
      {
        key: "draftkings",
        last_update: "2023-10-05T23:46:46Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-10-05T23:46:46Z",
            outcomes: [
              {
                name: "Buffalo Bills",
                price: -238,
              },
              {
                name: "Jacksonville Jaguars",
                price: 195,
              },
            ],
          },
          {
            key: "spreads",
            last_update: "2023-10-05T23:46:46Z",
            outcomes: [
              {
                name: "Chicago Bears",
                point: 6,
                price: -110,
              },
              {
                name: "Washington Commanders",
                point: -6,
                price: -110,
              },
            ],
          },
          // ... any other markets for DraftKings
        ],
        title: "DraftKings",
      },
      // ... other bookmakers (like betus, lowvig, etc.) can be added here in the same format
    ],
    commence_time: "2023-10-08T13:30:00Z",
    home_team: "Buffalo Bills",
    id: "fdb93b64c39ea4a4312ffe74788b551b",
    sport_key: "americanfootball_nfl",
    sport_title: "NFL",
  },
];
