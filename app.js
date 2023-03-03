const loadCards = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCards(data.data.tools));
}

// const loadAllCards = async () => {
//     const url = `https://openapi.programming-hero.com/api/ai/tools`
//     const res = await fetch(url)
//     const data = await res.json()
//     loadAllCards(data.data.tools);
// }


// Function to append and display cards
const displayCards = cards => {
    console.log(cards);

    // Display Six Phones by default

    // cards = cards.slice(0, 6);

    // document.getElementById('show-all').addEventListener('click', function () {
    //     toggleSpinner = true;
    //     cards = cards.slice(0, 10);

    // })

    const cardsContainer = document.getElementById('card-container');

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
                                   <div class="card border-radius:20% mt-4">
                                     <img src="${card.image}" class="card-img-top img " alt="...">
                                      <div class="card-body">
                                           <h5 class="card-title  text-start"">Features</h5>
                                         <p class="card-text ">
                                                 
                                                 <ol>
                                             ${card.features ? card.features.slice(0, 3).map(feat => `<li>${feat ? feat : 'Unavailable'}</li>`).join('')
                : '<li>Unavailable</li>'}
                                               </ol>
                                         </p>
                                      </div>
                                       <hr class="container" />
                                      <div class="card-footer border-0 bg-body">
                                          <div class="d-flex justify-content-between">
                                          <div>
                                             <div class="fs-3 fw-bold">${card.name}</div>
                                             <div><i class="fa-solid fa-calendar-days"></i>${card.published_in}</div>                     
                                          </div>
                                          <div> <button onclick="loadCardDetails('${card.id}')" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa-solid fa-arrow-right"></i> </button></div>
                                         
                                          </div>
                                     </div>
                                    </div>                                   
                                </div>`
        cardsContainer.appendChild(cardDiv)

    })
}


const loadCardDetails = id => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCardDetails(data.data));
}

const displayCardDetails = card => {
    console.log(card);
    const modalTitle = document.getElementById('exampleModalLabel')
    card.forEach
    modalTitle.innerHTML = `
                               
                            <div class="modal-header">
                            <h5 class="modal-title">${card.tool_name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                    <div class="d-flex justify-content-evenly row row-cols-1 row-cols-md-3 g-4"> 

                    <div class="card  border-radius:20% my-4">
                        <div class="card-body ">
                          <h5 class="card-title">${card.description}</h5>

                          <div class="d-flex justify-content-evenly my-2">
                         <div class="text-success border bg-white my-2"> ${card.pricing ? card.pricing[0].plan : 'Unavailable'} <br> ${card.pricing ? card.pricing[0].price : 'Unavailable'}</div>
                         <div class="text-warning  border  my-2""> ${card.pricing ? card.pricing[1].plan : 'Unavailable'} <br> ${card.pricing ? card.pricing[1].price : 'Unavailable'}</div>
                         <div class="text-danger border my-2""> ${card.pricing ? card.pricing[2].plan : 'Unavailable'} <br> ${card.pricing ? card.pricing[2].price : 'Unavailable'}</div>
                          </div>

                          <div class="d-flex justify-content-evenly">
                          <div><p class=" card-text mt-1 "><span class="fw-bold">Features</span>${card.features ? card.features.features_name : 'Unavailable'}</p> </div>
                          <div><p class=" card-text mt-1 "><span class="fw-bold">Integrations</span>${card.integrations ? card.integrations.slice(0, 3).map(integration => `<li>${integration ? integration : 'Unavailable'}</li>`).join('')
            : '<li>Unavailable</li>'}</p> </div>
            
                         </div>

                         </div>
                       </div>


                      <div class="card border-radius:20% my-4">
                         <img src="${card.image_link[0]}" class="img-thumbnail my-3 " alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${card.input_output_examples ? card.input_output_examples[0].input : 'Unavailable'}</h5>
                          <p class=" card-text mt-1 ">${card.input_output_examples ? card.input_output_examples[0].output : 'Unavailable'}</p>
                         </div>
                       </div> 

                    </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
    `
}

