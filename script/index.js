/*
슬라이드 3000/세로형
*/

$(".nav-wrap").mouseover(function(){
	$(this).find(".subs").stop().slideDown(500);
});
$(".nav-wrap").mouseleave(function(){
	$(this).find(".subs").stop().slideUp(500);
	$(".navs > li").removeClass("sub-hover");
});

$(".subs > li").mouseover(function(){
	var n = $(this).index();
	$(".navs > li").removeClass("sub-hover");
	$(".navs > li").eq(n).addClass("sub-hover");
});

setInterval(ani, 3000);
var now = 0;
function ani() {
	if(now == 3) {
		now = 1;
		$(".slides").css({"top": 0});
	}
	else now++;
	$(".slides").stop().animate({"top": (-300 * now)+"px"}, 1000);
}


$(".tabs > div").click(function(){
	$(".tabs > div").removeClass("tab-hover");
	$(this).addClass("tab-hover");
	var n = $(this).index();
	if(n == 0) {
		$(".notice").css({"display": "block"});
		$(".gallery").css({"display": "none"});
	}
	else {
		$(".notice").css({"display": "none"});
		$(".gallery").css({"display": "block"});
	}
});

$(".popup-open").click(function(){
	$(".popup").show();
});
$(".bt-close").click(function(){
	$(".popup").hide();
});
















