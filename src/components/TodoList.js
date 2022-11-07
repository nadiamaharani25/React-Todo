import React, { useEffect, useState } from 'react'
import { ModalCreatTodo } from '../modals/ModalCreatTodo'
import Card from './Card'

export const TodoList = () => {
    const [show, setShow] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("todoList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTodoList(obj)
        }
    }, [])

    const deleteTodo = (index) => {
        let tempTodo = todoList
        tempTodo.splice(index, 1)
        localStorage.setItem("todoList", JSON.stringify(tempTodo))
        setTodoList(tempTodo)
        window.location.reload();
    }

    const updateListArray = (obj, index) => {
        let tempTodo = todoList
        tempTodo[index] = obj
        localStorage.setItem("todoList", JSON.stringify(tempTodo))
        setTodoList(tempTodo)
        window.location.reload()
    }

    const handleClose = () => {
        setShow(!show);
    }

    const saveTodo = (todoObj) => {
        let tempTodo = todoList
        tempTodo.push(todoObj)
        localStorage.setItem("todoList", JSON.stringify(tempTodo))
        setTodoList(todoList)
        setShow(false)
    }

    return (
        <>
            <div className='header text-center'>
                <h3 style={{ color: 'white' }}>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setShow(true)}>Create Todo</button>
            </div>

            <div className='todo-container'>
                {todoList && todoList.map((obj, index) =>
                    <Card todoObj={obj} index={index} deleteTodo={deleteTodo} updateListArray={updateListArray} />
                )}
            </div>
            <ModalCreatTodo show={show} handleClose={handleClose} save={saveTodo} />
        </>
    );
};
