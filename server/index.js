const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/GPU", (req, res) => {
  const GPU = ["You WIN, a decent 1660 Super",
					 "You Lost",
					 "You WIN, A 3090 LUCKY!!!",
           "You WIN, a good looking 2080",
           "You WIN, a nice 3070 Ti",
           "You get integrated graphics lol scrub"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * GPU.length);
  let randomGPU = GPU[randomIndex];

  res.status(200).send(randomGPU);
  
});


app.get("/api/fortune", (req, res) => {
  const fortune = ["When unsure buy more ammo",
					 "Don't trust those who say it's for your safty",
					 "Segregation has never been on the right side of History",
           "You may love your country, not your goverment",
           "Freedom: everyone leaves everyone else alone"
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune= fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});



app.listen(4000, () => console.log("Server running on 4000"));
