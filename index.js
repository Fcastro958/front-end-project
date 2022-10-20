$("#submit").on('click', getData)

function clearResults () {
    $("#result").empty()
}



function getData() {
    clearResults();
    $.get("https://zoo-animal-api.herokuapp.com/animals/rand/", (data) => {
        console.log(data);
        AnimalDisplay(data)
    });
}

function AnimalDisplay(data){
    //console.log(data)
    let $Resultcard = $("<span class='card' style='width: 18rem;'>")
    let $cardTitle = $(`<h3 class='card-title'> <b>Animal name:</b> ${data.name} </h3>`)
    let $cardImg = $(`<img class='img-thumbnail' src="${data.image_link}"  ></ul>`)
    let $Type = $(`<div class='box'> <b>Animal type:</b> ${data.animal_type}</div>`)
    let $active = $(`<div class='box'> <b>Active time:</b> ${data.active_time} </div>`)
    let $diet = $(`<div class='box'> <b>Diet:</b> ${data.diet} </div>`)
    let $geo = $(`<div class='box'> <b>Geographic range:</b> ${data.geo_range} </div>`)
    let $habitat = $(`<div class='box'> <b>Habitat</b>: ${data.active_time} </div>`)
    let $latinName = $(`<div class='box'> <b>Latin name:</b> ${data.latin_name} </div>`)
    let $length = $(`<div class='box'> <b>Maximum length:</b> (${data.length_max}ft.)     <b>Minimum length:</b> (${data.length_min}ft.) </div>`)
    let $life = $(`<div class='box'> <b>Lifespan:</b> ${data.lifespan} years.</div>`)
    let $weight = $(`<div class='box'> <b>Maximum weight:</b> (${data.weight_max}lbs.)    <b>Minimum weight:</b> (${data.weight_min}lbs.) </div>`)
   

    $Resultcard.append($cardTitle, $cardImg, $Type, $active, $diet, $geo, $habitat, $latinName, $length, $life, $weight);
    $("#result").append($Resultcard);

}
