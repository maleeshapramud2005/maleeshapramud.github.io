// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Letter Show And Hide
var btn = document.getElementById('email-icon');
btn1 = document.getElementById('email-icon2');
btn2 = document.getElementById('letter-close');
letter = document.getElementById('letter');

let btnsArray = [btn, btn1];

btnsArray.forEach(btnn => {
    btnn.addEventListener('click', function () {

        if (letter.classList.contains('d-none')) {
            letter.classList.remove('d-none');
            setTimeout(function () {
                letter.classList.remove('visuallyhidden');
            }, 20);
        } else {
            letter.classList.add('visuallyhidden');
            letter.addEventListener('transitionend', function (e) {
                letter.classList.add('d-none');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }

    }, false);
})

btn2.addEventListener('click', function () {

    letter.classList.add('visuallyhidden');
    letter.addEventListener('transitionend', function (e) {
        letter.classList.add('d-none');
    }, {
        capture: false,
        once: true,
        passive: false
    });


}, false);


var btnc = document.getElementById('code-icon');
btnc1 = document.getElementById('code-icon2');
btnc2 = document.getElementById('back-btn');
code = document.getElementById('code');
left = document.getElementById('left');
right = document.getElementById('right');
container = document.getElementById('container');
paragraph = document.getElementById('code-paragraph');


let btnscArray = [btnc, btnc1];

btnscArray.forEach(btnnc => {
    btnnc.addEventListener('click', function () {

        if (code.classList.contains('d-none')) {
            code.classList.remove('d-none');
            setTimeout(function () {
                container.style.overflowX = "hidden";
                container.style.height = "100vh";
                code.classList.remove('visuallyhidden');
                left.classList.remove('left-before');
                right.classList.remove('right-before');
                setTimeout(function () {
                    paragraph.classList.remove('visuallyhidden');
                }, 1900);
            }, 20);
        } else {
            paragraph.classList.add('visuallyhidden');
            code.classList.add('visuallyhidden');
            code.addEventListener('transitionend', function (e) {
                code.classList.add('d-none');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }

    }, false);
})

btnc2.addEventListener('click', function () {

    // code.classList.add('visuallyhidden');
    paragraph.classList.add('visuallyhidden');
    setTimeout(function () {
        left.classList.add('left-before');
        right.classList.add('right-before');
        code.addEventListener('transitionend', function (e) {
            setTimeout(function () {
                code.classList.add('d-none');
                container.style.overflowX = "visible";
                container.style.height = "auto";
            }, 1500);
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }, 1200);


}, false);






// Custome Cursor
const cursor = document.getElementById('cursor');

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = "translate3d($[mouseX]px, $[mouseY]px, 0)";
}
window.addEventListener('mousemove', moveCursor);