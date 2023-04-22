
var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';

        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 600) {
                body.style.backgroundColor = 'white';
            } else if (scroll >= 600 && scroll < 1450) {
                body.style.backgroundColor = '#00c1b5';
            } else if (scroll >= 1450 && scroll < 2400) {
                body.style.backgroundColor = '#ff651a';
            } else if (scroll >= 2400 && scroll < 3250) {
                body.style.backgroundColor = '#ffbe00';
            } else if (scroll >= 3250 && scroll < 4050) {
                body.style.backgroundColor = '#1d3fbb';
            } else {
                body.style.backgroundColor = '#e30512';
            }
        }
    