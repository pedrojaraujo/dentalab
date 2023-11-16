const cardsData = [
  {
    image: "../public/images/Atendimento.png",
    borderClass: "border1",
    title: "Atendimento de Qualidade",
    text: "Nossa prioridade é atendê-lo bem.",
  },
  {
    image: "../public/images/Adicao.png",
    borderClass: "border2",
    title: "Profissionais Experientes",
    text: "Dispomos de uma equipe altamente qualificada.",
  },
  {
    image: "../public/images/estrelas.png",
    borderClass: "border3",
    title: "Nota Máxima",
    text: "Nossa central de atendimento obteve nota máxima.",
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
