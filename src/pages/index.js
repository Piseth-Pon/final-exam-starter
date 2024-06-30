import { url, getAllPets, addNewPet } from "../api/api.js"

async function displayAllPets() {
  // 1. get the data of all pets from the api: getAllPets()

  // 2. select the .petWrapper

  // 3. loop through the pet data to dipslay all pet card
  
}


async function addNewPetForm() {
  // 1. select the #addNewPetForm
  const form = document.querySelector("#addNewPetForm")
  // 2. add event listener to the form
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    // 2.a select all the input elements in the form: photo, animal, gender, name, age, description, contact
    const photo = document.querySelector("#photo")
    
    // 2.b prepare the data to send to the api to create a new pet

    // 2.c pass the data to addNewPet to write it on the api
    
    // 2.d display all pets
    

    // 2.e clear the form input
    photo.value = ``


  })
}

window.addEventListener("DOMContentLoaded", async () => {

  // 1. display all pet cards


  // 2. working on add new pet




})

