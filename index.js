
let count = 0;

function increment() {
    document.getElementById("count-el").innerHTML= count;
    count++;
}

function save() {
    console.log(count)
    document.getElementById("saved-count").innerHTML= "saved count: "+ count;
}


