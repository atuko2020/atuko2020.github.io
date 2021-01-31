$(function() {
         $('#gallery1').crossSlide(
            {
               speed: 45, //in px/sec
               fade: 1    //in sec
            },
            [
              { src: 'images/slide1.jpg', dir: 'up'   },
              { src: 'images/slide2.jpg', dir: 'down' },
              { src: 'images/slide3.jpg', dir: 'up'   }
            ]
         );
});
$(function() {
         $('#gallery2').crossSlide({
            sleep: 2, //in sec
            fade: 1   //in sec
         },
         [
            { src: 'images/slide1.jpg' },
            { src: 'images/slide2.jpg' },
            { src: 'images/slide3.jpg' }
         ]);
});

$(function() {
         $('#gallery3').crossSlide({
               fade: 1
            },
            [
               {
                  src:  'images/slide1.jpg',
                  from: '100% 80% 1x',
                  to:   '100% 0% 1.7x',
                  time: 3
               },
               {
                  src:  'images/slide2.jpg',
                  from: 'top left',
                  to:   'bottom right 1.5x',
                  time: 5
               },
               {
                  src:  'images/slide3.jpg',
                  from: '100% 80% 1.5x',
                  to:   '80% 0% 1.1x',
                  time: 2
               },
               {
                  src:  'images/slide2.jpg',
                  from: '100% 50%',
                  to:   '30% 50% 1.5x',
                  time: 2
               }
            ]
         );
});