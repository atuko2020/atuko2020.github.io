$(function(){
	/*$('#div1').animate({
		top: 200,
		left: 400
	});
	alert('test');
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');

	basket.append(apple);
	basket.append(banana);
	basket.append(orange);

	apple.appendTo(basket);
	banana.appendTo(basket);
	orange.appendTo(basket);

	basket.prepend(apple);
	basket.prepend(banana);
	basket.prepend(orange);*/
	//$('<div>test</div>').appendTo(basket);

    $('#slideshow').crossSlide({
      sleep: 2,	//各画像の表示時間 3秒
      fade: 1,  //フェードエフェクトの時間 2秒
      loop:1	//スライドショーの再生回数を1回
    }, [
      { src: 'images/slide1.jpg' },
      { src: 'images/slide2.jpg' },
      { src: 'images/slide3.jpg' }
    ])

});