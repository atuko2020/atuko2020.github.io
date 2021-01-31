$(function() {
         $('#gallery').crossSlide({
            sleep: 2, //in sec
            fade: 1   //in sec
         },
         [
            { src: 'images/slide1.jpg' },
            { src: 'images/slide2.jpg' },
            { src: 'images/slide3.jpg' }
         ]);
});