
// class AddArticleComponent extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = 'Jag är en person med genuint intresse för och kunskap om utveckling och problemlösning och finner det mycket spännande.'+
//         'Aktiv och gillar att röra på mig och träna. Bra på färg och former där skapa hjälper mig med CSS och att skpa mina smycken och väskor jag desinar och utför.'+
//         'En familj människa som älskar barn, men gillar utmaningar genom teknik och tittar på som är nytt i branchen.';
//     }
// }
// customElements.define('my-article', AddArticleComponent);

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

$(document).ready(function(){
    $pageHead = "head.html";
    $pageFooter = "footer.html";
    $navbar = "navbar.html";
    $socialMedia = "socialMedia.html";

    $("head").load($pageHead);
    $("menu").load($navbar);
    $("footer").load($pageFooter);
    $("socialmedia").load($socialMedia);
});