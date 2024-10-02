const browser = window.browser || window.chrome;

document.addEventListener("DOMContentLoaded", function () {

    function urlHandler(params) {
        browser.tabs.query({ active: true, currentWindow: true }, tabs => {

            let url = tabs[0].url;
            console.log(url);

            browser.storage.local.set({ currentUrl: url })
                .then(() => {
                    console.log("URL stored:", url);
                })
                .catch((error) => {
                    console.error("Error storing URL:", error);
                });
        });
    }

    
    


let articlePercentage = 40
let sourcePercentage = 60



document.getElementById("clickMe").addEventListener("click", function () {
    
    urlHandler()

    const circles = document.querySelectorAll(".circle");
    
    circles.forEach(circle => {
        circle.classList.toggle("hidden");
    });

    const textBox = document.querySelectorAll(".textBoxContainer");
    textBox.forEach(textBoxContainer => {
        textBoxContainer.classList.toggle("hiddenBox");
    });
   
});

function percentageChanger(params) {
   sourceCircle = document.getElementById('source-circle')
   sourceCircle.setAttribute("stroke-dasharray", `${sourcePercentage}, 100`);
    if (sourcePercentage <= 24) {
        sourceCircle.style.stroke = 'red';
    } else if (sourcePercentage <= 49) {
        sourceCircle.style.stroke = 'orange'
    } else if (sourcePercentage <= 74) {
        sourceCircle.style.stroke = 'yellow'
     } else if (sourcePercentage <= 89) {
            sourceCircle.style.stroke = 'lightgreen'
    } else {
        sourceCircle.style.stroke = 'green'
    }

    let percentageInTheSourceCircle = document.getElementById("sourcePercentage")
    percentageInTheSourceCircle.innerHTML = `${sourcePercentage}%`


    articleCircle = document.getElementById('article-circle')
    articleCircle.setAttribute("stroke-dasharray", `${articlePercentage}, 100`);
    if (articlePercentage <= 24) {
        articleCircle.style.stroke = 'red';
    } else if (articlePercentage <= 49) {
        articleCircle.style.stroke = 'orange'
    } else if (articlePercentage <= 74) {
        articleCircle.style.stroke = 'yellow'
    
    }else if (articlePercentage <= 89) {
            articleCircle.style.stroke = 'lightgreen'
        
    } else {
        articleCircle.style.stroke = 'green'
    }
    
    let percentageInTheArticleCircle = document.getElementById("articlePercentage")
    percentageInTheArticleCircle.innerHTML = `${articlePercentage}%`

    
}


percentageChanger()



});
