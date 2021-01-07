'use strict';

function titleClickHandler(){
  console.log('Link was clicked!');
  console.log (event);
   
  /* [DONE] remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */
  
  event.preventDefault();
  
  const clickedElement = this;

  clickedElement.classList.add('active');

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

const activeArticles = document.querySelectorAll('.posts .active.active');

for(let activeArticle of activeArticles){
activeArticle.classList.remove('active');
}

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  event.preventDefault();
  
  targetArticle.classList.add('active');

  console.log('targetArticle:', targetArticle);
}

/*const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}*/



  const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

  function generateTitleLinks(customSelector = ''){

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(articles);
    let html = '';
    for (let article of articles) {
    
    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */ /* [DONE] get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
    /* [DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* [DONE] insert link into titleList */
    html = html + linkHTML;
    }

    titleList.innerHTML = html;
  
    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();