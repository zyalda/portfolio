// class AddknowledgeComponent extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML ='<p>Tekniskt kompetent inom bland annat systemutveckling (HTML5, HTML, CSS, WordPress , PHP, XML, WPF, .NET och databaser (MySQL).'+
//                         'Gillar att utmana mig själv och uppdatera mina kunskaper inom de senaste utvecklingsområdena. Är dedikerad och fokuserad med en enorm styrka som person och har struktur på jobbet.'+
//                         'Jag är utbildad ingenjör (2 år) från Irak med el & elektronik-inriktning och har 3 års arbetslivserfarenhet inom utveckling och databas under senaste åren.</p>';
//     }
// }
// customElements.define('my-knowledge', AddknowledgeComponent);

// function customizedTitle(id, title, top) {
//   const element = document.getElementById(id);
//   element.style.position = "relative";
//   document.getElementById("title-new").style.display = "block";
//   document.getElementById("title-new").style.top = top;
//   document.getElementById("title-new").innerHTML = title;
// }
// function hideTitle(){
//      document.getElementById("title-new").style.display = "none";
//      document.getElementById("title-new").style.top = 0;
// }

class AddArticleComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<p class="title"> Hej, Jag är Zeena.</p>'+
        '<p>En fullstack utvecklare. Utvecklar webb och mobil applikationer samt skapar hemsidor för mina produkter.'+
        'Länk till mina github repos finns nedan.</p>'+
         '<div class="cv"><a href="CurriculumVitae.odt" download>'+
         '<button type="button" class="btn">Load CV</button></a></div>';
    }
}
customElements.define('my-article', AddArticleComponent);

class AddHeaderComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<div class="home"><a class="home-anchor" href="index.html"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Home</a></div>'+
                            '<div class="logo-div"><p class="logo">Zeena Yalda</p></div>'+
                            '<div class="menu-section"><span class="fa-stack fa-lg">'+
                            '<i class="fa fa-square-o fa-stack-2x" aria-hidden=""></i>'+
                            '<i class="fa fa-bars fa-stack-1x" aria-hidden="tre"></i></i>'+
                            '</span></div>';
    }
}
customElements.define('my-header', AddHeaderComponent);

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