async function Data() {
  const data = await axios
    .get("https://hp-api.onrender.com/api/characters")
    .then((res) => res.data);

  const dataList = data.filter((data, index) => {
    return index < 10;
  });
  document.getElementById("loading").classList.remove("load");
  return dataList;
}

async function render() {
  const dataRender = await Data();
  let lists = "";
  dataRender.map((data, index) => {
    lists += `<div class="card__list-group">
          <img src="${data.image}" alt="Avatar" style="width: 200px ; height: 200px; margin-top: 10px">
          <div class="card__description">
            <h4><b>${data.name}</b></h4> 
            <div class="card--container">
            <ul>
              <li class='card__description-text'>${data.gender}</li> 
              <li class='card__description-text'>${data.ancestry}</li> 
              <li class='card__description-text'>${data.eyeColour}</li> 
              <li class='card__description-text'>${data.patronus}</li> 
              <li class='card__description-text'>${data.hairColour}</li> 
              <li class='card__description-text'>${data.alive}</li> 
              <li class='card__description-text'>${data.actor}</li> 
              <li class='card__description-text'>${data.wand.wood}</li> 
              <li class='card__description-text'>${data.wand.core}</li> 
              <li class='card__description-text'>${data.wand.length}</li> 
              <li class='card__description-text'>${data.alive}</li> 
           </ul>
            </div>
          </div>
          </div>
          `;
  });
  document.querySelector(".card").innerHTML = lists;
}
render();
