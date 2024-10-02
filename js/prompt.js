import { GoogleGenerativeAI } from "@google/generative-ai";
import config from './config.js';

let key = config.API_KEY;
const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function GetFromAi(url) {
    try {
        console.log(url)
        const result = await model.generateContent
        ("Hoe betrouwbaar is deze website: "+ url +"" +
            ". Geef me een waarde van 0 / 100, als format: 'Score: __ / 100'," +
            " zet dit aan het begin van je bericht");
        console.log(result)
        console.log(result)
        console.log(result.response.text());
        const str = result.response.text();
        const match = str.match(/\d+/); // Matches the first sequence of digits

        if (match) {
            const firstNumber = parseInt(match[0], 10); // Convert the match to an integer
            console.log(firstNumber);
            let score = firstNumber;
            return [firstNumber, result]
        } else {
            console.log("No number found.");
        }
    } catch (error) {
        console.error("Error generating text:", error);
        //return error
    }
}

export { GetFromAi };