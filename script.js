const cardSection = document.getElementById('speakerSection');

const btn = document.querySelector('#buttonDiv');

function onn() {
  document.getElementById('layer').style.display = 'block';
}
if (btn) {
  btn.addEventListener('click', onn);
}

const cardsObj = [
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'Mudassir',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/harris.jpg',
    name: 'Harris',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/zeeshan.jpg',
    name: 'Zeeshan',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/pachal.jpg',
    name: 'Hamza',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/zain.jpg',
    name: 'Zain',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/hamza.jpg',
    name: 'Hamza',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
];

/*  eslint-disable no-return-assign */
// eslint-disable-next-line no-return-assign

if (cardSection) {
  cardsObj.map(
    (card) => cardSection.innerHTML += `<div class="col-6">
					<div class="card spekrCard">
              <div class="spekrImg">
                <img
                  src="${card.image1}"
                  alt="chess"
                  class="card-img-left spekrImg1"
                />
                <img
                  src="${card.image2}"
                  alt="Speaker's Image"
                  class="card-img-left spekrImg2"
                />
              </div>
              <div class="card-body">
                <div class="card-title spekrTitle">${card.name}</div>
                <p class="card-text spekrHeading">
                  ${card.headline}
                </p>
                <p class="card-text text-black spekrText">
                  ${card.desciption}
                </p>
              </div>
            </div>
          </div>`,
  );
}

const btn1 = document.querySelector('.main_btn');

function on() {
  document.getElementById('popup').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

if (btn1) {
  btn1.addEventListener('click', on);
}

const btn2 = document.getElementsByClassName('style-li');

function off() {
  document.getElementById('popup').style.display = 'none';
  document.body.style.overflowY = 'scroll';
}

btn2[0].addEventListener('click', off);
