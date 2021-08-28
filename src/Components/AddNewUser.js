import React, { useState, useEffect } from 'react'
import Style from "./DataFetch.module.css";
import { Form, Button } from 'react-bootstrap'

const AddNewUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')
    const [sumbit, setSumbit] = useState('')
    const [getData, setGetData] = useState([])

    const saveData = (type) => {

        let Data = { name, email, status, gender }
        fetch('https://gorest.co.in/public-api/users', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer b18c256edc8015751c180697404123415264c51585ae0f122bf1c50444fb97e1`,
                'content-Type': 'application/json',
            },
            body: JSON.stringify(Data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.data)
                return setGetData(resp.data)
            })
        }
        )

        if (type === "Submit") {

            if (getData.length !== 4) {
                return alert("Somethings Error")
            } else {

                const display = "none"
                return (
                    alert("New user Added Successfully"),
                    setSumbit(display),
                    window.location.reload()
                )
            }

        }
    }


    return (
        <>

            <div className={Style.From} style={{ display: sumbit }} >
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        name="email" required
                        placeholder="name@example.com" value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" required placeholder="User Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Enter Status Active or In-Active" value={status} onChange={(e) => { setStatus(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="Gender" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => saveData("Submit")}>
                    Submit
                </Button>
            </div>


        </>
    )
}

export default AddNewUser
