import inquirer from 'inquirer';

const toppingArray = ["Cheese", "Pepperoni", "Onions", "Peppers", "Jalapeños", "Chicken"]

inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your full name?",
      },
      
    {
        name: "age",
        type: "number",
        message: "How old are you?",
      },
      
    {
        name: "wants_pizza",
        type: "confirm",
        message: "Do you want a free pizza?",
      },

    {
        name: "pizza_crust",
        type: "list",
        message: "Choose your crust:",
        choices: ["Thin Crust", "Stuffed Crust", "Pan"],
      },

    {
        name: "pizza_toppings",
        type: "checkbox",
        message: "Choose your toppings:",
        choices: toppingArray,
      },

    {
        name: "user_password",
        type: "password",
        message: "Enter Password:",
      },
])
.then((answer) => {
    console.log("Hello", answer.name);
    console.log("You are", answer.age, "years old");
    console.log("Did you want free pizza:", answer.wants_pizza);
    console.log("You wanted", answer.pizza_crust);
    console.log("On your pizza you wanted:", answer.pizza_toppings);
    console.log("Your password is:", answer.user_password, ", now I know your password");
  });
