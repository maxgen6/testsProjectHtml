
const slider = () => {
    const left = document.querySelectorAll('.left'),
        right = document.querySelectorAll('.right'),
        slider = document.querySelectorAll('.slider');

    let count = 0,
        pos = 0;

    left.forEach(item => item.addEventListener('click', prevSLider))
    right.forEach(item => item.addEventListener('click', nextSLider))

    function prevSLider(e) {
        console.log(1);
        count--;
        pos -= 100;
        slider.forEach((item, i) => {
            if(item.classList.contains('active') && count >= 0) {
                item.classList.remove('active');
                slider[count].classList.add('active');
                item.style.transition = '.5s all';
                slider.forEach(item => item.style.transform = `translateX(-${pos}%)`);
            } else if(count < 0){
                count = slider.length - 1;
                pos += 100 * slider.length;
                item.classList.remove('active');
                slider[count].classList.add('active');
                item.style.transition = '.5s all';
                slider.forEach(item => item.style.transform = `translateX(${pos}%)`);

            }       
        });
    }

    function nextSLider(e) {
        count++;
        pos += 100;
        slider.forEach((item, i) => {
            if(item.classList.contains('active') && count <= slider.length) {
                item.classList.remove('active');
                slider[count].classList.add('active');
                item.style.transition = '.5s all';
                item.style.transform = `translateX(-${pos}%)`;
            } else if(count == slider.length ){
                count = 0;
                pos = 0;
                slider[count].classList.add('active');
                item.style.transition = '.5s all';
                slider.forEach(item => item.style.transform = `translateX(${pos}%)`);

            }       
        });
    }
}

slider();