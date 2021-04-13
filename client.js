console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    addGithubUsers();
    $('#photoDivs').on('click', '.personImage', guessGithubUser );
    pickMe();
}//end onReady

function addGithubUsers() {
    //loop through people
    for (let person of people){
        $('#photoDivs').append(`
       <div id="${person.name}" class="personImage">
       <img src="https://github.com/${person.githubUsername}.png?size=250"
       alt="Profile image of ${person.name}"></img>
       </div>
       `);
    }//end for loop
}//end addPhotosToDom

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}//end randomNumber

let randomness = randomNumber(0,people.length-1);

console.log(randomness);

console.log(people[randomness].name);

function guessGithubUser() {
    let itIsMe= $(this).attr('id')
    if( itIsMe===people[randomness].name){
        nextGuess();
        pickMe();
        alert('YAY!!!')
        $('.demo').fireworks({
            sound: true,
            opacity: 0.6,
            width: '100%',
            height: '100%'
        });
    } else{
        alert('BOO!!!Wrong Answer!')
    }
}//end guessGithubUser

function pickMe() {
    $('#meMeMe').empty();
    $('#meMeMe').append(people[randomness].name);
    
}

function nextGuess() {
    randomness = randomNumber(0,people.length-1);
}//end nextGuess
