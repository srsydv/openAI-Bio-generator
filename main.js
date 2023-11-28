import axios from 'axios';
// const axios = require('axios');
require("dotenv").config();
const apiKey = process.env.OPENAI_API_KEY;

// const linksContainer = document.getElementById('links-container');


// const client = axios.create({
//     headers : {
//         Authorization : "Bearer " + apiKey,
//     },
// })

// import OpenAI from "openai";
// const OpenAI = require('openai');

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const config = {
    headers: { Authorization: `Bearer ${apiKey}` }
};

chatWithAI = async () => {
    document.getElementById('span1').innerHTML = 'Processing🔜';
    const params = {
        prompt : chat.value,
        model : "text-davinci-003",
        max_tokens : 1000,
        temperature: 0,
    }

    // const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: "You are a helpful assistant." }],
    //     model: "gpt-4",
    //   });
    //   console.log(completion.choices[0]);
    axios.post("https://api.openai.com/v1/completions", params, config)
    .then((result) => {
        // console.log(result.data.choices[0].text);
        console.log(result);
        document.getElementById('span1').innerHTML = result.data.choices[0].text;
    }).catch((err) => {
        console.log(err);
    })
}
const chat = document.getElementById("chat")
const getchat = document.getElementById("getchat")
getchat.onclick = chatWithAI;
// chatWithAI();
