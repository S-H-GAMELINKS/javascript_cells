

var test = document.getElementById('array');

for(let i = 0; i < 3; i++) {
    var p = document.createElement("p");
    for(let j = 0; j < 4; j++) {
        p.innerText += "1"
    }
    test.appendChild(p)
}