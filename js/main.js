/**
 * Spread operator
 */

console.log('### Spread can be used for assingning values to function arguments ####')
function sum(x, y, z) {
    console.log(x, y, z);
}

let numbers = [1, 2, 3];
// sum(numbers[0], numbers[1], numbers[2]);
sum(...numbers);

console.log('### Spread can be used for retrieving function arguments ####');
function sum(...args) {
    console.log(args);
}

sum(1, 2, 3, 4, 5, 6, 7, 8)



console.log('### Spread can be used for adding elements to an array ####');
let array = [1, 2, 3];
let element4 = 4;
let element5 = 5;
let element6 = 6;

let newArray = [
    ...array,
    element4,
    element5,
    element6
]
console.log(newArray)
/**
 * let newArray = [
 *   1, 2, 3, 4, 5, 6
 * ]
 */


console.log('### Spread can be used for merging 2 arrays ####');
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
newArray = [
    ...array1,
    ...array2
]
console.log(newArray);


console.log('### Spread can be used for merging a parameter (properties/methods) with an object ####');
let object = {firstname: 'John'};
newObject = {
    ...object,
    lastname: 'Doe'
}
console.log(newObject);

console.log('### Spread can be used for merging 2 object ####');
let object1 = {firstname: 'John', lastname: 'Doe'};
let object2 = {hobby: 'Coding'};
// NOTE! the latter overrides the previous
let object3 = {hobby: 'Fishing'}

newObject = {
    ...object1,
    ...object2,
    ...object3
}
console.log(newObject);

/**
 * {
 *      firstname: 'John',
 *      lastname: 'Doe',
 *      hobby: 'Coding',
 *      hobby: 'Fishing'
 * }
 * equels
 * * {
 *      firstname: 'John',
 *      lastname: 'Doe',
 *      hobby: 'Fishing'
 * }
 */


console.log("##### Some examples of usecases in React ########");
console.log('#### Adding a new item to the list ######')
const todos = [
    {id: 1, task: 'Syssla 1'},
    {id: 2, task: 'Syssla 2'},
    {id: 3, task: 'Syssla 3'},
    {id: 4, task: 'Syssla 4'},
    {id: 5, task: 'Syssla 5'}
];

updatedTodoList = [
    ...todos,
    {id: 6, task: 'Syssla 6'}
]

console.log(updatedTodoList);


console.log('#### Updating an exisiting item ######');
let todo = {id: 1, task: 'Syssla 1', disabled: false}
let updatedTodo = {
    ...todo,
    disabled: true
}

/**
 * {
 *      id: 1
 *      task: 'Syssla 1',
 *      disabled: false,
 *      disabled: true
 * }
 */

console.log('Original item', todo);
console.log('Updated item', updatedTodo);




