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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

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



function generateTags(){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
    
  for (let article of articles) {

    /* find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray) {
      
      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
      console.log(linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateTags();


function tagClickHandler(event){

  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */

  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */

  for (let activeTagLink of activeTagLinks){

    /* remove class active */

    activeTagLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagHrefLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */

  for (let tagHrefLink of tagHrefLinks){

    /* add class active */

    tagHrefLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){

  /* find all links to tags */

  const linkTag = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */

  for (let linkTags of linkTag){
  /* add tagClickHandler as event listener for that link */
    linkTags.addEventListener('click',tagClickHandler);
  /* END LOOP: for each link */
  }
} 
  
addClickListenersToTags();


function generateAuthors(){

  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article */

  for (let article of articles){

    /* find author wrapper */

    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    /* make html variable with empty string */

    let html = '';

    /* get authors from data-authors attribute */

    const author = article.getAttribute('data-author');

    /* generate html of the link */

    const linkHTML = '<a href="#author-' + author + '">' + author + '</a>';

    /* add generated code to html variable */

    html = html + linkHTML;

    /* insert html to author wrappper */

    authorWrapper.innerHTML = html;

    /* END LOOP: for every article */
  }
}
generateAuthors();

function authorClickHandler(event) {

  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make new constant "href" and read the artibute href of clickedElement */

  const href = clickedElement.getAttribute('href');

  /* make new constant "author" and extract tag from constant "href" */

  const author = href.replace('#author-', '');

  /* find all author links with class acive */

  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active author link */

  for (let acitveAuthorLink of activeAuthorLinks) {

    /* remove class active */

    acitveAuthorLink.classList.remove('active');

    /* END LOOP: for each active author link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */

  const authorTagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found author link */

  for (let authorTagLink of authorTagLinks) {

    /* add class active */

    authorTagLink.classList.add('active');

    /* END LOOP: for each found author link */
  }
  /* execute function "generateTitleLinks" with article selecor as argument*/

  generateTitleLinks('[data-author="' + author + '"]');
}


function addClickListenersToAuthors(){

  /* find all links to authors */

  const authorLinks = document.querySelectorAll('a[href^="#author"]');

  /* START LOOP: for each link */

  for (let authorLink of authorLinks){

    /* add authorClickHandler as event listener for that link */

    authorLink.addEventListener('click',authorClickHandler);
  }
}
addClickListenersToAuthors();