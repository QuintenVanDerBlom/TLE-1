import { GoogleGenerativeAI } from "@google/generative-ai";
// import config from './config.js';

import { GetFromAi } from './prompt.js'

let trueRating;
let progressExecuted = false;
// let key = config.API_KEY;
// // Q: API Segment
// const apiKey = key;
// const genAI = new GoogleGenerativeAI(apiKey);
//const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const button = document.getElementById('myButton');
const prompt = document.getElementById('prompt');
let resultarea = document.getElementById('resultarea');



async function fetchAiData(url) {

    try {

        const [score, result] = await GetFromAi(url);
        console.log("Score from AI:", score);
        console.log("Full result:", result);
        insertDatabase(url, score, result.response.text())


    } catch (error) {
        console.error("Error fetching data from AI:", error);
    }
}

// Use the function
button.addEventListener('click', async function () {
    fetchAiData(prompt.value);
});
let AiPrompt =

button.addEventListener('click', async function () {
    // Code to execute when the button is clicked
    console.log(prompt.value);
    try {
        const result = await model.generateContent("Hoe betrouwbaar is deze website:" + prompt.value + ". Geef me een waarde van 0 / 100, als format: 'Score: __ / 100', zet dit aan het begin van je bericht");
        console.log(result)
        resultarea.innerHTML = result.response.text();
        console.log(result.response.text());
        const str = result.response.text();
        const match = str.match(/\d+/); // Matches the first sequence of digits

        if (match) {
            const firstNumber = parseInt(match[0], 10); // Convert the match to an integer
            console.log(firstNumber);
            let score = firstNumber;
            startProgress(score)
        } else {
            console.log("No number found.");
        }
    } catch (error) {
        console.error("Error generating text:", error);
        //return error
    }
});

// API Segment End

function startProgress(score) {
    // Ensure the function doesn't run more than once
    if (progressExecuted) return;

    // Set trueRating to the score passed to the function
    trueRating = score;

    // Get the progress bar element
    const fillElement = document.getElementById("fill");

    // Get the result div where the text will be shown
    const resultDiv = document.getElementById('response');
    let resultText = "Bezig met scannen..."; // Default scanning text
    let strokeColor = "#e0e0e0"; // Default color for invalid rating

    // Set the result text and stroke color based on the trueRating
    if (trueRating < 25) {
        resultText = "Je nieuwsbron is niet te vertrouwen!";
        strokeColor = "#ff0000"; // Red for low trust
    } else if (trueRating < 50) {
        resultText = "Vertouw dit op je eigen risico, er zitten fouten hierin!";
        strokeColor = "#ff8000"; // Orange for medium-low trust
    } else if (trueRating < 75) {
        resultText = "Redelijke nieuwsbron, maar let toch op voor enige fouten!";
        strokeColor = "#ffff00"; // Yellow for medium trust
    } else if (trueRating <= 100) {
        resultText = "Je nieuwsbron is goed te vertrouwen!";
        strokeColor = "#00ff00"; // Green for high trust
    } else {
        resultText = "Ongeldige waarde voor trueRating."; // Fallback for unexpected values
    }

    // Update the text content of the result div
    resultDiv.innerText = resultText;

    // Calculate the stroke-dashoffset for the progress bar
    const radius = 45; // The radius of the circle
    const circumference = 2 * Math.PI * radius; // The full circumference of the circle

    // Set the stroke-dasharray if it's not already set
    fillElement.style.strokeDasharray = circumference;

    // Calculate the offset based on the score (trueRating)
    const offset = circumference - (trueRating / 100) * circumference;

    // Set the color and progress based on the trueRating
    fillElement.style.stroke = strokeColor; // Update stroke color
    fillElement.style.strokeDashoffset = offset; // Update stroke-dashoffset for progress

    // Mark that progress has been executed to avoid rerunning
    progressExecuted = true;
}

function insertDatabase(link, inputScore, inputResponse) {
    $.post("./php/insert.php",
        {
            url: link,
            score: inputScore,
            response: inputResponse,
        },
        function (data, status) {

        });
}