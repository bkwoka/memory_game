let list_of_numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
list_of_numbers.sort(() => Math.random() - 0.5);
let table = document.getElementById('table');

for (let i = 0; i < list_of_numbers.length; i++) {

    let pic_num = list_of_numbers[i];
    let cell_div = document.createElement('div');
    cell_div.classList.add("cell", "col-6", "col-sm-4", "col-md-3");
    cell_div.setAttribute('data-image-num', pic_num.toString());
    table.appendChild(cell_div);

    let image = document.createElement('img');
    image.src = 'static/img/main.png';
    image.alt = 'image';
    image.setAttribute('data-image-num', pic_num.toString());
    image.setAttribute('id', i.toString());

    image.classList.add("img-fluid");
    table.lastChild.appendChild(image);
    image.addEventListener('click', function x() {
        action(image)
    }, false);
}

let counter = 0;
let first_mark_pic_num;
let first_mark_id_num;
let set_compare = [];

function action(image) {
    let image_num = image.dataset.imageNum;
    if (!set_compare.includes(image_num)) {

        if (counter === 0) {
            counter++;
            first_mark_pic_num = image_num;
            first_mark_id_num = image.getAttribute('id');
            image.src = `static/img/${image_num}.png`;
        } else if (counter === 1) {
            counter++;
            image.src = `static/img/${image_num}.png`;
            setTimeout(function () {
                    if (first_mark_id_num !== image.getAttribute('id')) {
                        if (first_mark_pic_num === image_num) {
                            set_compare.push(image_num);
                            counter = 0;
                        } else {
                            document.getElementById(first_mark_id_num).src = `static/img/main.png`;
                            image.src = `static/img/main.png`;
                            counter = 0;
                        }
                    } else {
                        image.src = `static/img/main.png`;
                        counter = 0;
                    }
                }
                , 1000)
        }
    }
}