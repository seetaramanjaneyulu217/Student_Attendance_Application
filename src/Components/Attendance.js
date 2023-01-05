import React, { useState } from 'react'
import './CSS/Attendance.css'
import Table from './Table'

const studentsArray = []
let studentPresent = false

const Attendance = () => {

    const [name, setName] = useState('')
    const [roll, setRoll] = useState('')
    const [flag, setFlag] = useState(0)
    const [noOfStudents, setNoOfStudents] = useState(0)

    const checkInHandler = async (e) => {

        e.preventDefault()

        if(name !== '' && roll !== '') {

            studentsArray.forEach(student => {
                if(student.roll === roll) {
                    alert('Students must have unique roll numbers...')
                    studentPresent = true
                }
            })

            if(studentPresent === false) {
                const student = {
                    id: Math.random(),
                    name: name,
                    roll: roll,
                    checkin: new Date().toLocaleTimeString()
                }
        
                studentsArray.push(student)
                setNoOfStudents(noOfstudents => noOfstudents + 1)
                setFlag(val => val + 1)
                alert('Student attendence taken successfully...')
            }

            studentPresent = false
     
        }

        else{
            alert('Fill the details completely...')
        }
        
    }

    

  return (
    <>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div className='formdiv'>
                <h2>Enter student details</h2>
                <br></br>
                <div className='maindiv'>
                    <form>
                        <div className="form-floating mt-3 mb-3">
                            <input type="text" id="name" className="form-control" placeholder="Enter your name" name="name" onChange={e => setName(e.target.value)}/>
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-floating mt-3 mb-3">
                            <input type="text" id="roll" className="form-control" placeholder="Enter your age" name="roll" onChange={e => setRoll(e.target.value)}/>
                            <label htmlFor="roll">Roll</label>
                        </div>

                        <button type="button" className="btn btn-primary" onClick={checkInHandler} >Check In</button>
                    </form>
                </div>
            </div>

            <h3 style={{textAlign:'center',marginTop:'150px'}}><b>Total Number of Students Present are</b> {noOfStudents}</h3>
        </div>

        {studentsArray.length === 0 ? <h2 style={{textAlign:'center',marginTop:'150px'}}>No students present</h2> : studentsArray.map(student => <Table student={student} setNoOfStudents={setNoOfStudents}/>)}
    
    </>
    
  )
}

export default Attendance