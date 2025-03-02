function addingEventListener() {

const input =document.getElementById('button');
input.addEventListener('click', function() {
    alert('I was clicked!');
})
}
const input = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
}
input.assEventListener('click', clickAlert);