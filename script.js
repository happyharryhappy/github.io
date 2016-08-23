$(document).ready(function(){
	var shwt=true,
		_wh=$(window).innerHeight();
		$('.intro').height(_wh-72);
		$('.info').height(_wh-99);
		$('.intro .intro_text').css('margin-top',_wh/2-160);
	function directposi(){
		var _bw=$('body').innerWidth(),
			_cw=$('.center').innerWidth(),
			num=325,
			_fp=(_bw-_cw)/2+36,
			_scrolling = $(window).scrollTop();
			console.log(_scrolling);
		$('.portfolio').css({'top':467-2*_scrolling+'px','left':_fp-2*_scrolling+'px'});
		$('.profile').css({'top':467-4*_scrolling+'px','left':_fp-3*_scrolling+num+'px'});
		$('.contact').css({'top':467-2*_scrolling+'px','left':_fp+2.5*_scrolling+2*num+'px'});
		$('.direction article').css({'opacity':1-_scrolling/150});
		if(_scrolling<=508){
			$('.logo').css({'transform':'scale('+(-_scrolling/1270+1)+')','margin-left':(-_scrolling/127+4)+'%'});
			$('.slider').css({'position':'static','top':'0'});
			$('header').css({'height':'40px'});
		}else{
			$('.logo').css({'transform':'scale(.6)','margin-left':'0'});
			$('.slider').css({'position':'fixed','top':'-395px'});
			$('header').css({'height':'540px'});
			//$('body').css({'background':'url(img/bg.jpg) 0 -300px repeat-x'});
		}
		if(_scrolling>600 && _scrolling<1870){
			$('.logo span').css('background-color','#ffe6cc');
			$('.frame').css('top',340+_scrolling-720);
			$('.portfolio_title').css('margin-top',10+(_scrolling-600)/10);
			//console.log('x='+$('.portfolio_title').css('margin-top'));
		}else if(_scrolling>=1870 && _scrolling<3162){
			$('.logo span').css('background-color','#CCF5CC');
		}else if(_scrolling>=3000){
			$('.logo span').css('background-color','#ffd6eb');
		}else{
			$('.logo span').css('background-color','#ffe6cc');	
		}
	};
	$(window).load(function(){
		directposi();
	});
	$(window).resize(function(){
		directposi();
	});
	$(window).scroll(function(){
		directposi();
	});
	$('.showworks ul li').click(function(){
		var allworks=['http://i.imgur.com/Y8Fzx4S.jpg',
		'http://i.imgur.com/fhwQvHA.jpg',
		'http://i.imgur.com/eKNg4od.jpg',
		'http://iqqqi.github.io/index2.html',
		'http://i.imgur.com/13d4Qt8.jpg',
		'http://i.imgur.com/t6G9T2Q.jpg',
		'http://i.imgur.com/mfTqhbM.jpg',
		'http://i.imgur.com/OxS1Gal.jpg',
		'http://i.imgur.com/71sbQfN.jpg',
		'http://i.imgur.com/yxe1MAj.jpg'],
		swnum=$(this).attr('class').charAt(2);
		window.open(allworks[swnum]);
	});
	$('.direction article').click(function(){
		var dirnum=$(this).attr('class');
		if(dirnum=='portfolio'){
			$("html, body").animate({scrollTop:'865px'},1000);
		}else if(dirnum=='profile'){
			$("html, body").animate({scrollTop:'2490px'},1000);
		}else{
			$("html, body").animate({scrollTop:'3360px'},1000);
		}
	});
	$('.info .info_text>p').click(function(){
		window.open('mailto:issyoni67@gmail.com');
	});
});
