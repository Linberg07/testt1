function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.help-slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		infinite:false,
		arrows:false,
	});
	$('.animal-slider').slick({
		slidesToShow:8,
		arrows:false,
		slidesToScroll: 1,
		touchThreshold:10,
	})
})
