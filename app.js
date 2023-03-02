const loadCards = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    displayCards(data.data.tools);
}

// Function to append and display cards
const displayCards = cards => {
    console.log(cards);
    const cardsContainer = document.getElementById('card-container');
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
                                   <div class="card border-radius:20% mt-4">
                                     <img src="${card.image}" class="card-img-top " alt="...">
                                      <div class="card-body">
                                           <h5 class="card-title">Card title</h5>
                                         <p class="card-text">This is a longer card with supporting text below as a natural
                                          lead-in to additional
                                        content. This content is a little bit longer.</p>
                                      </div>
                                       <hr class="container" />
                                      <div class="card-footer border-0 bg-body">                                     
                                          <div class="d-flex justify-content-between">
                                          <div>
                                             <div class="fs-3 fw-bold">${card.name}</div>
                                             <div>Date</div>                     
                                          </div>
                                          <div>Arrow</div>
                                          </div>
                                     </div>
                                    </div>                                   
                                </div>`
        cardsContainer.appendChild(cardDiv)

    })


}
