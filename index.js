function theSend(){
    const person = document.getElementById("fullname").value;

    alert ("Thank You," + person + "We're delighted to have you on board");

}

function getDogs(i) {
    const output = document.getElementById('output')
    let req = new XMLHttpRequest();
    req.open("get", "https://api.thedogapi.com/v1/breeds")
    req.send();

    let y = i + 10;
    req.addEventListener("load", function (event) {
        var data = JSON.parse(event.target.responseText)
        $("#output").html("");

        // loop through the array
        data.forEach(function (val) {

            if (i < y) {
                let new_div = document.createElement("div")
                let ulist = document.createElement("ul")
                let image = document.createElement("img")
                let item = document.createElement("li")

                new_div.id = "div1";
                ulist.id = "ullist"

                // populate with data 
                
                image.setAttribute("src", data[i].image["url"])
                image.setAttribute("height", "400px")
                image.setAttribute("width", "400px")
                item.innerText = data[i].name;

                // Append items
                new_div.appendChild(ulist)
                new_div.appendChild(image)
                new_div.appendChild(item)

                output.appendChild(new_div)
                i++;
            }
        })


    })
}

let i = 0;
let button = document.querySelector(".butt");
button.addEventListener("click", function (e) {


    getDogs(i);

    i = i + 10;
    console.log("success");
});
