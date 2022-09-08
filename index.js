// forms
function theSend(){
    const person = document.getElementById("fullname").value;

    alert ("Thank You," + person + "We're delighted to have you on board");

}

// get request to the API
function getDogs(i) {
    const output = document.getElementById('output')
    let req = new XMLHttpRequest();
    req.open("get", "https://api.thedogapi.com/v1/breeds")
    req.send();

    let dogs = i + 10;
    req.addEventListener("load", function (event) {
        var data = JSON.parse(event.target.responseText)
        $("#output").html("");

        // loop through the array
        data.forEach(function (val) {

            if (i < dogs) {
                let parentDiv = document.createElement("div")
                let ulist = document.createElement("ul")
                let image = document.createElement("img")
                let item = document.createElement("li")

                parentDiv.id = "innerDiv";
                ulist.id = "ullist"

                // populate with data 
                
                image.setAttribute("src", data[i].image["url"])
                image.setAttribute("height", "400px")
                image.setAttribute("width", "400px")
                item.innerText = data[i].name;

                // Append items
                parentDiv.appendChild(ulist)
                parentDiv.appendChild(image)
                parentDiv.appendChild(item)

                output.appendChild(parentDiv)
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
