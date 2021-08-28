import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
const Showdata = (props) => {
    const [close, setClose] = useState(true)

    return (
        <>
            {close?
            
            <div style={{ maxWidth: "70%", margin: "auto", position: "fixed", textAlign: "cen" }} onClick={() => setClose(!close)}>
                <div  style={{ fontSize: "20px", color: "red", display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>X</div>
                <Table bordered hover style={{ backgroundColor: "Highlight" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.Id}</td>
                            <td>{props.Name}</td>
                            <td>{props.Gender}</td>
                            <td>{props.Email}</td>
                            <td>{props.Status}</td>
                        </tr>
                    </tbody>
                </Table>
            </div> 
            
            
            :window.location.reload()}
        </>
    )
}

export default Showdata;
