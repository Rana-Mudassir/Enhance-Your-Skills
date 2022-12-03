const cardSection = document.getElementById('speakerSection');

const btn = document.querySelector('#buttonDiv');

function on() {
  document.getElementById('layer').style.display = 'block';
}
btn.addEventListener('click', on);

const cardsObj = [
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
  {
    image1: 'images/chess.jpg',
    image2: 'images/mudassir.png',
    name: 'David',
    headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    desciption:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque tenetur quaerat repellat sint doloribus numquam hic!Fugiat illo at eligendi a nihil ullam eos voluptatem nesciunt?',
  },
];

cardsObj.map(
  (card) =>
    (cardSection.innerHTML += `<div class="col-6">
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
          </div>`),
);
