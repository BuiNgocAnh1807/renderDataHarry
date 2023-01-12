function clickCallApi() {
  document.getElementById("loading").classList.add("load");
  async function getData() {
    const api = await axios.get("https://hp-api.onrender.com/api/characters");
    const { data } = api;
    const dataList = data.slice(0, 10);
    return dataList;
  }

  axios.interceptors.response.use(
    function (response) {
      document.getElementById("loading").classList.remove("load");
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  async function render() {
    const dataRender = await getData();
    let lists = "";
    dataRender.map((data, index) => {
      lists += `<div class="card__list-group" data-bs-toggle="modal" data-bs-target="#list${index}">
            <img src="${data.image}" alt="Avatar" style="width: 200px ; height: 200px; margin-top: 10px; padding: 10px 20px;">
            <div class="card__description">
              <h4><b style="margin: 0 5px;">${data.name}</b></h4> 
              <div class="card--container">
              <ul class="card__description--list">
                <li class='card__description-text'>${data.gender}</li> 
                <li class='card__description-text'>${data.ancestry}</li> 
                <li class='card__description-text'>${data.eyeColour}</li> 
                <li class='card__description-text'>${data.patronus}</li> 
             </ul>
              </div>
            </div>
            </div>
  
          <div class="modal fade" id="list${index}" tabindex="-1" aria-labelledby="list${index}Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title">${data.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="modal-body__container">
          <img src="${data.image}" alt="Avatar" style="width: 200px ; height: 200px;" class="img-responsive" />
  
          <table border="0" cellpadding="2">
          <tr>
              <th>Gender</th>
              <td>${data.gender}</td>
          </tr>
          <tr>
              <th>Ancestry</th>
              <td>${data.ancestry}</td>
          </tr>
          <tr>
              <th>EyeColour</th>
              <td>${data.eyeColour}</td>
          </tr>
          <tr>
              <th>Patronus</th>
              <td>${data.patronus}</td>
          </tr>
          <tr>
              <th>HairColour</th>
              <td>${data.hairColour}</td>
          </tr>
          <tr>
              <th>Alive</th>
              <td>${data.alive}</td>
          </tr>
          <tr>
              <th>Wizard</th>
              <td>${data.wizard}</td>
          </tr>
          <tr>
              <th>YearOfBirth</th>
              <td>${data.yearOfBirth}</td>
          </tr>
      </table>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
        </div>
        </div>
            `;
    });
    document.querySelector(".card").innerHTML = lists;
  }
  render();
}
