window.addEventListener('load', init);

let testExplanation
let testArticles
let testResults
let buttonAI
let buttonHuman

let articlesData
//articleNumber wordt gebruikt om het artikel uit de database te halen.
//articleTestNumber wordt gebruikt om het artikel aan te duiden dat momenteel op de pagina staat.
let articleNumber
let articleTestNumber = 0

let correctGuesses = 0


function init() {
    elementLoader()
    ajaxRequest('services/webservice/index.php', jsonLoader)
}

function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (typeof data.error !== 'undefined') {
                throw new Error(data.error.message);
            }
            successHandler(data);
        })
}

function elementLoader() {
    startTestDutch = document.getElementById("startTestDutch")
    startTestDutch.addEventListener('click', function () {
        startTest('dutch')
    });
    startTestMixed = document.getElementById("startTestMixed")
    startTestMixed.addEventListener('click', function () {
        startTest('mixed')
    });
    startTestEnglish = document.getElementById("startTestEnglish")
    startTestEnglish.addEventListener('click', function () {
        startTest('english')
    });

    buttonAI = document.getElementById("chooseAI")
    buttonAI.addEventListener('click', function () {
        nextArticleButtonPress(false);
    });

    buttonHuman = document.getElementById("chooseHuman")
    buttonHuman.addEventListener('click', function () {
        nextArticleButtonPress(true);
    });

    continueToNextArticle = document.getElementById("continueToNextArticle")
    continueToNextArticle.addEventListener('click', function () {
        //check if article is the last article
        if (articleTestNumber < 10) {
            loadNextArticle()
        } else {
            //laat de laatste pagina met de score zien
            console.log('this is the last article')
            endTest()
        }
    });

    returnHome = document.getElementById("returnHome")
    returnHome.addEventListener('click', function () {
        location.reload()
    });
}

function jsonLoader(data) {
    console.log(data)
    articlesData = data
}

function loadNextArticle() {
    articleInfo = document.getElementById("articleInfo")
    articleInfo.classList.add("hidden")

    let articleData = articlesData[articleNumber]

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

    articleImage = document.getElementById("articleImage")
    articleImage.src = articleData['image']

    questionCounter = document.getElementById("questionCounter")
    questionCounter.innerHTML = `${articleTestNumber + 1}/10`

    correctCounter = document.getElementById("correctCounter")
    correctCounter.innerHTML = `Good answers: ${correctGuesses}/${articleTestNumber}`
}

function nextArticleButtonPress(choice) {
    colorText = document.getElementById("colorText")

    //check if the answer is correct and add a point to the score if it is correct
    if (articlesData[articleNumber]["status"] === choice) {
        //answer is correct, add point to score
        correctGuesses += 1

        //make info text green if it was correct
        colorText.classList.remove("redText")
        colorText.classList.add("greenText")

        //tell the user that it was correct
        showCorrect = document.getElementById("showCorrect")
        showCorrect.innerHTML = 'Correct, this article was:'
    } else {
        //make info text red if it was incorrect
        colorText.classList.remove("greenText")
        colorText.classList.add("redText")

        //tell the user that it was incorrect
        showCorrect = document.getElementById("showCorrect")
        showCorrect.innerHTML = 'Wrong, this article was:'
    }

    //enter info text
    articleType = document.getElementById("articleType")
    sourceLink = document.getElementById("sourceLink")

    if (articlesData[articleNumber]["status"] === true) {
        articleType.innerHTML = 'Real'
        sourceLink.innerHTML = `Source: ${articlesData[articleNumber]["link"]}`
    } else {
        articleType.innerHTML = 'Fake'
        sourceLink.innerHTML = `Source: ${articlesData[articleNumber]["link"]}`
    }

    //show the info text
    articleInfo = document.getElementById("articleInfo")
    articleInfo.classList.remove("hidden")

    //go to the next article
    articleNumber += 1
    articleTestNumber += 1


    console.log(correctGuesses)
}

function startTest(language) {
    if (language === 'mixed') {
        articleNumber = 0
        console.log('start test in mixed languages')
    } else {
        if (language === 'dutch') {
            articleNumber = 10
            console.log('start test in dutch language')
        } else {
            if (language === 'english') {
                articleNumber = 20
                console.log('start test in english language')
            }
        }
    }

    loadNextArticle()

    testExplanation = document.getElementById("testExplanation")
    testExplanation.remove();

    testArticles = document.getElementById("testArticles")
    testArticles.classList.remove("hidden")
}

function endTest() {
    resultsScore = document.getElementById("resultsScore")
    resultsScore.innerHTML = `You scored ${correctGuesses}/10`

    testArticles = document.getElementById("testArticles")
    testArticles.classList.add("hidden")

    testResults = document.getElementById("testResults")
    testResults.classList.remove("hidden")
}