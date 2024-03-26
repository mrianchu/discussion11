let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById("host-name").innerHTML = "Matthew Lindgren";

document.getElementById("collaborator-name").innerHTML = "Ian Chu";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let floatingButton = document.querySelector("#instruction_button");
floatingButton.addEventListener("click", hideQuestions);
function hideQuestions() {
    console.log(this);
    let questions = document.querySelectorAll(".question");
    // Toggle the instructions
    for (let question of questions) {
        question.classList.toggle("hidden");
    }

    // Change the button text
    if (this.innerHTML === "Hide Instructions") {
        this.innerHTML = "Show Instructions";
    } else {
        this.innerHTML = "Hide Instructions";
    }
}



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let firstName = document.querySelector("#first_name");
firstName.addEventListener("input", changeFirst);
function changeFirst() {
    console.log("Changing first name");
    let first = document.getElementById("first_name").value;
    if (first === "John") {
        document.getElementById("last-name").innerHTML = "Doe";
    }
}


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
// Check if the passwords match as and when the user is typing. If they match, change the alert text below to "Password Matches". If they don't match, change the text to "Password does not match". Challenge: Implement the Hide Password button. The button text should change accordingly. Also add a keyboard shortcut 'h' to do the same. 

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const passwordAlert = document.getElementById('password-alert');
const hidePasswordButton = document.getElementById('hide-password');
        
// Function to check if passwords match
function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
            
    if (password === confirmPassword) {
        passwordAlert.textContent = 'Password Matches';
    } else {
        passwordAlert.textContent = 'Password does not match';
    }
}

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);


//Question 6





//Question 7 





//Question 8





//Question 9 

