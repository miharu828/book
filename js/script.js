//西暦（コピーライト）
var date = new Date();
var year=date.getFullYear();

//console.log(year);

//jQuery
$("#year").html("あおいうえお");//inneHTML
$("#year").text("year");//innertext


//JS
//document.querySelector("#year").innnerHTML=year;

//スクロールスパイ
$('body').scrollspy({   target: '#sk-header-nav',   offset: 80, });


//スクロールアニメーション
$("#sk-header-nav .navbar-nav a").on("click");
function(e){

    console.log("リンクをクリックしました");
    console.dir(e);

    e.preventDefault();
    console.dir

});

//例. ABOUTをクリックしたとき
console.dir( $(this.hash).offset().top;






}());