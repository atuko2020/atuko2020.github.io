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
      sleep: 2,	//�e�摜�̕\������ 3�b
      fade: 1,  //�t�F�[�h�G�t�F�N�g�̎��� 2�b
      loop:1	//�X���C�h�V���[�̍Đ��񐔂�1��
    }, [
      { src: 'images/slide1.jpg' },
      { src: 'images/slide2.jpg' },
      { src: 'images/slide3.jpg' }
    ])

});