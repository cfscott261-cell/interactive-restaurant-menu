const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

const menuData = {
  tacos: [
    { name: "Carne Asada Taco", description: "Grilled steak, onions, cilantro", price: "$5" },
    { name: "Al Pastor Taco", description: "Marinated pork with pineapple", price: "$5" },
    { name: "Chicken Street Taco", description: "Seasoned chicken, salsa verde", price: "$4" }
  ],
  burritos: [
    { name: "Loaded Burrito", description: "Rice, beans, meat (chicken, steak or pork), cheese, sour cream", price: "$10" },
    { name: "California Burrito", description: "Steak, fries, cheese, guac", price: "$11" },
    { name: "Tu Madre Burrito", description: "Chicken & shrimp, rice, cheese, beans, peppers & onions", price: "$13" }
  ],
  quesadillas: [
    { name: "El Pollo Quesadilla", description: "Grilled chicken, monterey jack, peppers & onions", price: "$10" },
    { name: "Steak Quesadilla", description: "Steak, peppers, cheese", price: "$11" },
    { name: "Cheese Quesadilla", description: "Melted cheese in a grilled tortilla", price: "$8" }
  ],
  sides: [
    { name: "Chips & Guac", description: "Fresh guacamole with tortilla chips", price: "$6" },
    { name: "Elote", description: "Mexican street corn with spices", price: "$5" }
  ],
  drinks: [
    { name: "Horchata", description: "Sweet cinnamon rice drink", price: "$3" },
    { name: "Jarritos", description: "Classic Mexican soda", price: "$3" }
  ],
  specials: [
    { name: "Taco Tuesday 🌮🔥", description: "All tacos $3!", price: "4pm - 7pm" }
  ]
};

function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    tacos: "Taco Menu",
    burritos: "Burrito Menu",
    quesadillas: "Quesadilla Menu",
    sides: "Sides Menu",
    drinks: "Drinks Menu",
    specials: "Specials Menu"
  };

  menuTitle.textContent = categoryTitles[category];

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}

displayMenu("tacos");
buttons[0].classList.add("active");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});