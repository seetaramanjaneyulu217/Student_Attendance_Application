import React, { useState } from 'react'

const Table = ({ student, setNoOfStudents }) => {

    const checkOutHandler = () => {
        setContent(new Date().toLocaleTimeString())
        setNoOfStudents(noOfStudents => noOfStudents - 1)
        
    }

    const [content, setContent] = useState(<button type='button' className='btn btn-primary' onClick={checkOutHandler}>CheckOut</button>)

  return (
    <>
        <div className='tablediv'>
            <table className="table">
                <tbody>
                    <tr key={student.Id}>
                        <td><b>Name</b> : {student.name}</td>
                        <td><b>Roll</b> : {student.roll}</td>
                        <td><b>CheckIn Time</b> : {student.checkin}</td>
                        <td id='checkout'><b>CheckOut Time</b> : {content}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>
  )
}

export default Table