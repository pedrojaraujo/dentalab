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
  {
    image:
      "https://media.istockphoto.com/id/1473207467/pt/foto/face-beauty-and-skincare-with-a-model-black-woman-in-studio-on-a-gray-background-to-promote.webp?b=1&s=170667a&w=0&k=20&c=4ZNVc30x6jfpJAM1oexjKp7FWh44NREerDthZiPNmXs=",
    name: "Maria Luiza",
    text: "A DentLab é um lugar incrível, com profissionais super atenciosos e competentes.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1312105172/pt/foto/happy-african-man-looking-at-camera-indoors-at-home-focus-on-face.webp?b=1&s=170667a&w=0&k=20&c=NOVeCgbtfZ7Atn2LjIq4O_sOaZvGP8mNB3duq-TtvUY=",
    name: "Lucas Silva",
    text: "O atendimento prestado pela equipe odontológica é simplesmente notável. Profissionais atenciosos que tornam cada visita uma experiência confortável e informativa.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1444339602/pt/foto/black-woman-african-beauty-and-skincare-health-of-luxury-spa-model-with-a-smile-on-an-orange.webp?b=1&s=170667a&w=0&k=20&c=LS96O58Q_147zJUWRqGaBWAK6l07J78FWCC7a23vAMA=",
    name: "Julia Santos",
    text: "A qualidade do trabalho odontológico é impressionante. Os profissionais demonstram um alto nível de habilidade e conhecimento, garantindo um serviço de alta qualidade.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1428996320/pt/foto/young-happy-man-smiling-on-camera-outdoor-focus-on-face.webp?b=1&s=170667a&w=0&k=20&c=OLOT1dZrIVsu5R_GA9i7I37pyF2Ap9DQnnLHDX9P-pE=",
    name: "Gabriel Souza",
    text: "O cuidado personalizado oferecido é excepcional. Cada paciente é tratado de forma individualizada, com um plano de tratamento adaptado às suas necessidades específicas.",
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
