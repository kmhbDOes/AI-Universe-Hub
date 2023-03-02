const loadCards = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    displayCards(data.data.tools);
}

const displayCards = cards => {
    console.log(cards);
    const cardsContainer = document.getElementById('card-container');
    cardsContainer.innerHTML = `<div class="col">
                                   <div class="card">
                                     <img src="..." class="card-img-top" alt="...">
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
                                          <div>ChatGPT</div>
                                          <div>Date</div>                     
                                          </div>
                                          <div>Arrow</div>
                                          </div>
                                     </div>
                                    </div>                                   
                                </div>`

}




// loadCards();