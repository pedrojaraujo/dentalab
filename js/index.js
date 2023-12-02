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

const cardsAvaliacao = [
  {
    image: "public/images/perfil.png",
    name: "Pedro Joaquim Araujo",
    text: "A DentLab é incrível! Profissionais super competentes e atenciosos.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amanda Soares",
    text: "Adorei o espaço da DentLab, super moderno e acolhedor.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504199367641-aba8151af406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGZhY2UlMjBzbWlsZXxlbnwwfDF8MHx8fDA%3D",
    name: "Roberto Silva",
    text: "O atendimento na DentLab é incrível, cuidam de cada paciente de    forma única.",
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
createCards(cardsData);

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

createCardsServicos(cardsDataServicos);

function createCardsAvaliacao(data) {
  const cardContainer = $(".swiper-wrapper");

  data.forEach((card) => {
    const cardElement = `
    <div class="swiper-slide">
    <div class="card__slide">
      <div class="img__Slide__container">
        <img src="${card.image}" alt="imagem do perfil" />
      </div>
      <h2>${card.name}</h2>
      <p>"${card.text}"</p>
      <img
        src="public/images/5estrelas.png"
        alt="avaliacao do atendimento"
      />
    </div>
  </div>
      `;

    cardContainer.append(cardElement);
  });
}
createCardsAvaliacao(cardsAvaliacao);
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
