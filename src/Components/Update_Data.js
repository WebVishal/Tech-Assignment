import React, { useState } from 'react'
import Style from "./DataFetch.module.css";
import { Form, Button } from 'react-bootstrap'

const Update_Data = ({ Id, Email, Gender, Name, Status }) => {
    const [email, setEmail] = useState(Email)
    const [gender, setGender] = useState(Gender)
    const [status, setStatus] = useState(Status)
    const [name, setName] = useState(Name)
    const [id, setID] = useState(Id)
    const[sumbit, setSumbit]=useState('')

    const Update = (type) => {

        const Data = { email, gender, status, name, id }
        fetch(`https://gorest.co.in/public-api/users/${Id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer b18c256edc8015751c180697404123415264c51585ae0f122bf1c50444fb97e1`,
                'Accept': 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify(Data)
        }).then((result) => {
            result.json().then((resp) => {

               console.log(resp.data)

            })
        })
        if (type === "Submit") {
           const display="none"
            return (
                
                setSumbit(display),
                alert("Update successfully"),
                window.location.reload()
                )      
        }else{
            return setSumbit("")
        }
    }


    return (
        <div className={Style.Update_From1} style={{display:sumbit}}>
            <div className={Style.From1}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" disabled
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" required value={name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" value={status} onChange={(e) => { setStatus(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" value={gender} onChange={(e) => { setGender(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => Update("Submit")}>
                    UpdateData
                </Button>
            </div>
        </div>
    )
}

export default Update_Data
