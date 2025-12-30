window.CONFIG = {
  siteName: "Soccer Recognition Game",

  title: "Soccer Recognition Game",
  subtitle: "How well do you recognize soccer players?",

  description: "Test how well you recognize soccer players. One attempt per face.",

  datasetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjziYBnLskOUHSUhmHClCd6oZ4rHi4yrSHHpZsfy8ML1ES3Snbx4Gk1L59qUeG5Kt6vxxHBTp5_YAA/pub?output=csv", 

  totalPerRound: 20,
  pointsPerCorrect: 10,

  itemLabel: "Player",

  shareTemplate:
    "I scored {score} / {max} on Soccer Recognition Game. Can you beat me?",
  shareUrl: "https://soccerrecognitiongame.com",

  endMessages: [
    { min: 160, text: "You really know your soccer." },
    { min: 120, text: "Solid — but you missed some legends." },
    { min: 80,  text: "You know the faces. The names are harder." },
    { min: 0,   text: "That was rough. Time to brush up on soccer history." }
  ],

  background: {
    start: "#e3f2fd",
    end: "#bbdefb"
  },

  relatedGames: [
    { name: "NBA", url: "https://nbarecognitiongame.com" },
    { name: "NFL", url: "https://nflrecognitiongame.com" },
    { name: "Soccer", url: "https://soccerrecognitiongame.com" },
    { name: "UFC", url: "https://ufcrecognitiongame.com" },
    { name: "Celebrity", url: "https://celebrityrecognitiongame.com" }
  ],
  
};
