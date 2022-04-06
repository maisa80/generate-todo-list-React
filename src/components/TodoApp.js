import React from 'react';
import Todo from './Todo';

/**
 * Part 1: Generate list (See Lists and keys lecture)
 * - Create a function component here, may call it 'TodoApp'
 * - generats a list from the array below, with the array-method .map()
 * - Place the code for listItems, into a new child (function) component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * - Begin by creating a new function 'handleClick' in 'TodoApp' component
 * - The function will add a class .done, to the target element (e.target)
 * - Pass down the function as a prop, to the child component 'Todo'
 * - Make sure every listItem has the onClick eventhandler, that calls the function 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * - Make sure every other listItem has the className="odd"
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */


const todos = [
    {id: 1, task: 'Syssla 1'}, // index 0
    {id: 2, task: 'Syssla 2'}, // index 1
    {id: 3, task: 'Syssla 3'}, // index 2
    {id: 4, task: 'Syssla 4'}, // index 3
    {id: 5, task: 'Syssla 5'}  // index 4
];


function TodoApp() {
    const handleClick = (e) => {
        console.log(e.target);
        e.target.classList.add('done');
    }

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    index % 2
                        ? <Todo key={todo.id} todo={todo} handleClick={handleClick} className=""/>
                        : <Todo key={todo.id} todo={todo} handleClick={handleClick} className="odd" />

                ))
            }
        </ul>
    )
}

export default TodoApp
