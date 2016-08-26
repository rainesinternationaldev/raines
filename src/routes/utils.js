import moment from 'moment';

function decodeEntities(s){
    var str, temp = document.createElement('p');
    temp.innerHTML = s;
    str = temp.textContent || temp.innerText;
    temp = null;
    str = str.replace(/\[|\]/g, '');
    return str;
}

function formatTitle(s) {
  return decodeEntities(s).split(' ').join('-');
}

function parseArticleData(article) {
  console.log('parsing articles');
  let articleData = {};
  let contentStr = article.content.rendered;
  let el = el = $('<div></div>');
  el.html(contentStr);
  let featuredImg = $('img', el)[0];
  let imgSrc = featuredImg 
    ? featuredImg.src
    : "https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80";

  articleData.id = article.id;
  articleData.imgSrc = imgSrc;
  articleData.title = decodeEntities(article.title.rendered);
  articleData.date = moment(article.date).format('MMMM YYYY');
  articleData.excerpt = decodeEntities(article.excerpt.rendered);
  return articleData;
}

module.exports = {
  decodeEntities,
  formatTitle,
  parseArticleData
}