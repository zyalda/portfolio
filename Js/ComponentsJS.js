//My header section.
class AddHeaderComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<div class="home"><a class="home-anchor" href="index.html"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Start</a></div>'+
                            '<div class="logo-div"><p class="logo">Zeena Yalda</p></div>'+
                            '<div class="menu-section"><span class="fa-stack fa-lg">'+
                            '<i class="fa fa-square-o fa-stack-2x" aria-hidden=""></i>'+
                            '<i class="fa fa-bars fa-stack-1x" aria-hidden="tre"></i></i>'+
                            '</span></div>';
    }
}
customElements.define('my-header', AddHeaderComponent);

//My Introduction section.
class AddArticleComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<p class="title"> Hej, Jag är Zeena.</p>'+
        '<p>Fullstack utvecklare, utvecklar webb och mobilapplikationer. Jag skapar också hemsidor bland annat för mina produkter.'+
        ' Länk till mina github repos nedan i footer.</p>'+
         '<div class="cv"><a href="CurriculumVitae.odt" download>'+
         '<button type="button" class="btn">Ladda CV</button></a></div>';
    }
}
customElements.define('my-article', AddArticleComponent);

//References section.
class AddReferencesComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML ='<p>Referenses kan lämnas på begäran.</p>';
    }
}
customElements.define('section-references', AddReferencesComponent);

//My projects section.
class AddPortfolioComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<div class="project-0"><p>En av mina nuvarande project. En hemsida för mina produkter som jag designar och utför själv. Sidan är under pågående utveckling.'+
                         ' Ett projekt för att marknadföra mina produkter och praktisera mina kunskaper i min unvarande utbildning.</p><p><a href="https://zyalda.github.io/QoolAccessories/" target="_blank">QoolAccessories</a></p></div>'+
                         '<div class="project-img-div"><img src="./images/FRKW2469.JPG" alt="protrait">'+
                         '<img src="./images/FRKW6601.JPG" alt="protrait"></div>';
    }
}
customElements.define('my-portfolio', AddPortfolioComponent);

//My knowledge section.
class AddknowledgeComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML ='<p>Tekniskt kompetens inom bland annat webb och systemutveckling.</p>'+
        '<div class="js-div"><img src="./images/Js-icon.jpg" alt="protrait"><p>JAVASCRIPT</p></div>'+
        '<div class="html-div"><p>HTML5</p><img src="./images/html-icon.jpg" alt="portrait"></div>'+
        '<div class="css-div"><img src="./images/css-icon.jpg" alt="portrait"><p>CSS</p></div>'+
        '<div class="cs-div"><p>C#</p><img src="./images/CS-icon.jpg" alt="portrait"></div>'+
        '<p>WordPress, PHP, .NET och databaser (MySQL).';
    }
}
customElements.define('my-knowledge', AddknowledgeComponent);

function customizedTitle(id, title) {
  const element = document.getElementById(id);
  document.getElementById("title-new").style.display = "block";
  document.getElementById("title-new").innerHTML = title;
}
function hideTitle(){
     document.getElementById("title-new").style.display = "none";
}

function toggleMenu() {
    const toggleMenu = document.getElementById("menuBar");
    toggleMenu.classList.toggle("active");
}

$(document).ready(function(){
    $pageHead = "head.html";
    $pageFooter = "footer.html";
    $navbar = "navbar.html";
    $socialMedia = "socialMedia.html";

    $("head").load($pageHead);
    $(".menu-section").load($navbar);
    $("footer").load($pageFooter);
    $("socialmedia").load($socialMedia);
});