const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.articles);

    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

fetchNews();

function displayNews(articles) {
  const newsDiv = document.getElementById("news");
  for (let article of articles) {
    //CARD
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("card", "rounded-4", "text-bg-light", "mb-3", "m-2");
    articleDiv.style.width = "18rem";

    //IMAGE for article
    const articleImage = document.createElement("img");
    articleImage.src = article.urlToImage;
    articleImage.classList.add("card-img-top");
    articleDiv.appendChild(articleImage);

    //CARD BODY
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    articleDiv.appendChild(cardBody);

    //H5 HEADER - title
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = article.title;
    cardBody.appendChild(title);

    //H6 SUB HEADER - author
    const writtenBy = document.createElement("h6");
    writtenBy.classList.add("card-subtitle", "mb-2", "text-muted");
    writtenBy.textContent = article.author;
    cardBody.appendChild(writtenBy);

    //ARTICLE DESCRIPTION
    const articleDescription = document.createElement("p");
    articleDescription.classList.add("card-text");
    articleDescription.textContent = article.description;
    cardBody.appendChild(articleDescription);

    //FULL ARTICLE LINK
    const fullArticle = document.createElement("a");
    fullArticle.setAttribute("href", article.url);
    fullArticle.textContent = "Link to full article";
    // fullArticle.href = ;
    cardBody.appendChild(fullArticle);

    if (article.urlToImage !== null) {
      newsDiv.appendChild(articleDiv);
    } 
  }
}
