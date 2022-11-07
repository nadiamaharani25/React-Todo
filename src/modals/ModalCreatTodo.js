import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export const ModalCreatTodo = ({ show, handleClose, save }) => {
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

    const handleSave = (e) => {
        e.preventDefault()
        let todoObj = {}
        todoObj["Name"] = todoName;
        todoObj["Description"] = description;
        save(todoObj);
    }

    return (
        <Modal show={show} handleClose={handleClose}>
            <Modal.Header handleClose={handleClose}>
                Create Todo
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
                <Button variant="primary" onClick={handleSave}>
                    Create
                </Button>{''}
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
