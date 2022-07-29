"use strict";
//Button1 click to access api data
document.querySelector("#click1").addEventListener('click', () => {
    getRandomAPI();
})

//Button2 click to clear data
document.querySelector("#click2").addEventListener('click', () => {
    let list_ids = ['name', 'ht', 'mass', 'hair', 'eye', 'dob', 
                    'spec', 'ships', 'vehicles', 'gender', 'planet', 'movie', 'no', 'skin'];
    for(let index = 0; index < list_ids.length; index++){
        document.getElementById(list_ids[index]).innerText = "";
    }
})

function getRandomAPI() {
    let list_ids = ['name', 'ht', 'mass', 'hair', 'eye', 'dob', 
                    'gender', 'planet', 'movie', 'skin', 'spec', 'ships', 'vehicles'];
    let list_json = ['name', 'height','mass', 'hair_color','eye_color', 
                    'birth_year','gender', 'homeworld', 'films', 'skin_color', 'species', 'vehicles', 'starships'];
    let character_no = undefined;
    character_no = String(Math.ceil(Math.random() * 83)); //generate random API data
    document.getElementById("no").innerText = character_no;

    fetch(`https://swapi.dev/api/people/${character_no}/`)
        .then(response => response.json())
        .then(dataJson => {
            for(let index = 0; index < list_ids.length; index++){
                if( list_json[index] !== 'films')
                {
                    document.getElementById(list_ids[index]).innerText = dataJson[list_json[index]];
                } 
                else if(list_json[index] === 'films' || list_json[index] === 'species' || list_json[index] === 'vehicles' || list_json[index] === 'starships')
                {
                    let text = "";
                    let list = Array(dataJson[list_json[index]]);
                    list.forEach( item =>{
                    text = text + String(item) + ", ";
                    })
                    document.getElementById(list_ids[index]).innerText = text; 
                }
            }
        })
}