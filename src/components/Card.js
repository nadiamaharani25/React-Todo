import React, { useState } from 'react'
import ModalEditTodo from '../modals/ModalEditTodo'

const Card = ({ todoObj, index, deleteTodo, updateListArray }) => {
    const [show, setShow] = useState(false)

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const handleClose = () => {
        setShow(!show);
    }

    const updateTodo = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTodo(index)
    }

    return (
        <div style={{ padding: 'auto', justifyContent: 'flex-start' }}>
            <div className='card-container'>
                <div className='d-flex flex-wrap'>
                    <div className='row g-0'>
                        <div className='col-md-4 my-3'>

                            <div className='card-wrapper mr-5' >
                                <div className='card-top' style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
                                <div className='task-holder'>
                                    <span className='card-header' style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: '10px' }}>{todoObj.Name}</span>
                                    <p className='mt-3 text-white'>{todoObj.Description}</p>

                                    <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                                        <i className='far fa-edit' style={{ color: colors[index % 5].primaryColor, cursor: 'pointer', marginRight: '8px' }} onClick={() => setShow(true)}></i>
                                        <i className='fas fa-trash-alt' style={{ color: colors[index % 5].primaryColor, cursor: 'pointer' }} onClick={handleDelete}></i>
                                    </div>
                                </div>
                                <ModalEditTodo show={show} handleClose={handleClose} updateTodo={updateTodo} todoObj={todoObj} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
