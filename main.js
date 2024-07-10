const API_KEY = `29a96ef9b757480189bbd02b34691b57`;
let newsList = [];
const noPhoto = "images/nonophoto.jpg";

const getLatestNews = async () => {
  const url = new URL(
    `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`
  );
  const response = await fetch(url);
  const data = await response.json();
  newsList = data.articles;
  render();
  console.log("누나뉴스", newsList);
};

const render = () => {
  const newsHTML = newsList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img
              class="news-img-size"
              src="${news.urlToImage == null ? noPhoto : news.urlToImage}"
            />
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>${
              news.description == null || news.description == ""
                ? "No Content"
                : news.description.length > 200
                ? news.description.substring(0, 200) + "..."
                : news.description
            }</p>
            <div>${
              news.source.name == null ? "no source" : news.source.name
            } * ${moment(news.publishedAt).fromNow()}</div>
          </div>
        </div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();

const openNav = () => {
  document.getElementById("noonaSidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("noonaSidenav").style.width = "0";
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
};
