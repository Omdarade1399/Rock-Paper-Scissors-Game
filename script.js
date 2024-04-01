function addCountry() {
  var countryInput = document.getElementById("countryInput");
  var country = countryInput.value.trim();

  if (country !== "") {
    var ul = document.getElementById("countryList");
    var li = document.createElement("li");
    li.textContent = country;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
    countryInput.value = "";
  }
}



//* Practicing

let fullName = prompt("please enter full name wihtout spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName)