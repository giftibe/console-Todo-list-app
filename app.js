const prompt = require('prompt-sync')({sigint: true});

let lists = [];    // todo list
let start = true;

const addTodo = () => {  //adding to the todo list
        let userItem = prompt('Enter an item to add to your todo: ').toLowerCase()
    lists.push(userItem)
    console.log('---------------------------------\n')
};

const updateTodo = () => {    // to update the todo list
        console.log(lists)
    let updateItem = prompt('Enter the item to update on the list').toLowerCase()

    let checkUpdate = lists.includes(updateItem)
    if(checkUpdate){
        let newUpdate = prompt('Enter the update').toLowerCase()
        let value = lists.indexOf(updateItem)
        lists.splice(value, 1, newUpdate)
        console.log('\n updated successfully')
    }
        else{
        console.log(`${updateItem} not found`)
        }

    console.log('---------------------------------\n')
};

const deleteTodo = () => {     // for deleting a todo from the list
let removeRequest = prompt('Enter the todo, you wish to delete').toLowerCase()
    let deleteItem = lists.filter(item => item !== removeRequest)

    let checkItem = lists.includes(removeRequest)
    if (checkItem) {
        lists = deleteItem
        console.log(`${removeRequest} deleted\n`)
    } else {
        console.log(`${removeRequest} not found`);
    }
    console.log('---------------------------------\n')
};

const showTodo = () =>{  // show list of todo's
    console.log('======== Your To do list ========\n')
    console.log(lists)
    console.log(`\n --------------------------------- \n`)
};

const exitApp = () =>{
start = false;
};

const initialize = (() =>{
  const InfoFunction = () => {  // info-section/user-manual
const Manual = `
Usage :-
Press 1                  # To add a new todo
Press 2                # To update todo 
Press 3              # To delete a todo
Press 4            # To show a todo
Press 5          # To exit the program \n`;
console.log(Manual);
};

InfoFunction();
while (start) {
    let command = prompt('Enter command from usuage: ');
switch (command) {

    case '1': //adding to the todo list
    addTodo();  
    break;

    case '2': // show list of todo's
    updateTodo();
    break;

    case '3':    // for deleting a todo from the list
    deleteTodo();
    break;

    case '4':  // to update the todo list
    showTodo();
    break;

    case '5': //to end the program
    exitApp();
    break;

    default: console.log('please press a valid command');
}
console.log(lists);
}
})()  //Immediately Invoked Function Expression(IIFE)