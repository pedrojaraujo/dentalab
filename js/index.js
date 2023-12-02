const cardsData = [
  {
    image: "public/images/Atendimento.png",
    borderClass: "border1",
    title: "Atendimento de Qualidade",
    text: "Nossa prioridade é atendê-lo bem.",
  },
  {
    image: "public/images/Adicao.png",
    borderClass: "border2",
    title: "Profissionais Experientes",
    text: "Dispomos de uma equipe altamente qualificada.",
  },
  {
    image: "public/images/estrelas.png",
    borderClass: "border3",
    title: "Nota Máxima",
    text: "Nossa central de atendimento obteve nota máxima.",
  },
];

const cardsDataServicos = [
  {
    image: "public/images/clareamento.svg",
    title: "Clareamento",
    text: "Melhoria da aparência dos dentes e do sorriso, através de clareamento, facetas, restaurações estéticas e outros procedimentos.",
  },
  {
    image: "public/images/consulta.svg",
    title: "Consulta",
    text: "Avaliação geral da saúde bucal, histórico médico, detecção de problemas e planejamento do tratamento adequado.",
  },
  {
    image: "public/images/extracao.svg",
    title: "Extração",
    text: "Remoção de dentes danificados, impactados ou que não podem ser salvos por outros tratamentos.",
  },
  {
    image: "public/images/aparelho.svg",
    title: "Aparelho",
    text: "Correção de problemas de oclusão e alinhamento dos dentes, utilizando aparelhos ortodonticos fixos ou removíveis.",
  },
];

// Função para criar os cards dinamicamente
function createCards(data) {
  const cardContainer = $(".card__container");

  data.forEach((card, index) => {
    const cardElement = `
        <div class="card__form ${card.borderClass}">
          <img src="${card.image}" class="card-img-top" alt="Imagem ${
      index + 1
    }">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
          </div>
        </div>
      `;

    cardContainer.append(cardElement);
  });
}

function createCardsServicos(data) {
  const cardContainer = $(".cards__servicos");

  data.forEach((card, index) => {
    const cardElement = `
        <div class="card__form">
          <img src="${card.image}" class="card-img-top" alt="Imagem ${
      index + 1
    }">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
          </div>
        </div>
      `;

    cardContainer.append(cardElement);
  });
}

/* Carrossel starter */

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

createCards(cardsData);
createCardsServicos(cardsDataServicos);
