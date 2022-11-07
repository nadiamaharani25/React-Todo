import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalEditTodo = ({ show, handleClose, updateTodo, todoObj }) => {
    const [todoName, setTodoName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "todoName") {
            setTodoName(value);
        } else {
            setDescription(value);
        }
    }

    useEffect(() => {
        setTodoName(todoObj.Name)
        setDescription(todoObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = todoName;
        tempObj["Description"] = description;
        updateTodo(tempObj)
    }

    return (
        <Modal show={show} handleClose={handleClose}>
            <Modal.Header handleClose={handleClose}>
                Update Todo
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='form-group'>
                        <label>Todo Name</label>
                        <input type='text' className='form-control' value={todoName} onChange={handleChange} name='todoName' />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>{''}
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditTodo
