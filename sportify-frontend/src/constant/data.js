export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Arnaud",
      lastName: "Legal",
      age: 38,
    },
    todayScore: 0.16,
    keyData: {
      calorieCount: 1830,
      proteinCount: 105,
      carbohydrateCount: 204,
      lipidCount: 20,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Carol",
      lastName: "Berdez",
      age: 23,
    },
    score: 0.7,
    keyData: {
      calorieCount: 1500,
      proteinCount: 40,
      carbohydrateCount: 130,
      lipidCount: 110,
    },
  },
];

export const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2023-04-01",
        kilogram: 50,
        calories: 340,
      },
      {
        day: "2023-04-02",
        kilogram: 90,
        calories: 120,
      },
      {
        day: "2023-04-03",
        kilogram: 51,
        calories: 480,
      },
      {
        day: "2023-04-04",
        kilogram: 61,
        calories: 890,
      },
      {
        day: "2023-04-05",
        kilogram: 30,
        calories: 120,
      },
      {
        day: "2023-04-06",
        kilogram: 48,
        calories: 462,
      },
      {
        day: "2023-04-07",
        kilogram: 76,
        calories: 370,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2023-04-01",
        kilogram: 60,
        calories: 340,
      },
      {
        day: "2023-04-02",
        kilogram: 70,
        calories: 220,
      },
      {
        day: "2023-04-03",
        kilogram: 51,
        calories: 780,
      },
      {
        day: "2023-04-04",
        kilogram: 21,
        calories: 590,
      },
      {
        day: "2023-04-05",
        kilogram: 50,
        calories: 220,
      },
      {
        day: "2023-04-06",
        kilogram: 28,
        calories: 362,
      },
      {
        day: "2023-04-07",
        kilogram: 16,
        calories: 670,
      },
    ],
  },
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 40,
      },
      {
        day: 2,
        sessionLength: 53,
      },
      {
        day: 3,
        sessionLength: 25,
      },
      {
        day: 4,
        sessionLength: 10,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 20,
      },
      {
        day: 7,
        sessionLength: 0,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 20,
      },
      {
        day: 2,
        sessionLength: 70,
      },
      {
        day: 3,
        sessionLength: 80,
      },
      {
        day: 4,
        sessionLength: 40,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 20,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

export const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 40,
        kind: 1,
      },
      {
        value: 520,
        kind: 2,
      },
      {
        value: 240,
        kind: 3,
      },
      {
        value: 60,
        kind: 4,
      },
      {
        value: 500,
        kind: 5,
      },
      {
        value: 60,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 300,
        kind: 1,
      },
      {
        value: 540,
        kind: 2,
      },
      {
        value: 60,
        kind: 3,
      },
      {
        value: 70,
        kind: 4,
      },
      {
        value: 320,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];
