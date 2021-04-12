console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    addGithubUsers();
    randomNumber();
}//end onReady
function addGithubUsers() {
    //loop through people
    for (let person of people){
        $('#photoDivs').append(`
       <div>
       <img src="https://github.com/${person.githubUsername}.png?size=250"
       alt="Profile image of ${person.name}"></img>
       </div>
       `);
    }//end for loop
}//end addPhotosToDom

function randomNumber(min, max) {
    return Math.floor(Math.random( )*(1 + max-min) + min);
}//end randomNumber





