import https from "https";

const url = "https://official-joke-api.appspot.com/random_joke";

const jokeGenrator = () => {
  https.get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is your joke, joke type is ${joke.type}`);
      console.log("Joke: ", joke.setup);
      console.log("Punchine: ", joke.punchline);
    });
  });
};
jokeGenrator();
