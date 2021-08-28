import React, { useEffect, useState } from 'react'
import AddNewUser from './AddNewUser';
import Style from "./DataFetch.module.css";
import Show_Data_fetch from "./ShowData/Show_Data_fetch"
import Update_Data from './Update_Data';
import Pagination_Items from './Pagination/Pagination';


const DataFetch = () => {

    const [Dummy_data, setDummy_data] = useState([]);
    const [addUser, setAddUser] = useState('')
    const [showdata, setShowdata] = useState('')
    const [Update_Data1, setUpadte_Data1] = useState('')


    //Pagination States
    const [ShowPerPageItems, setShowPerPageItems] = useState(7)
    const [Pagination, setPagination] = useState({
        start: 0,
        end: ShowPerPageItems
    })

    const ShowPerPage = (start, end) => {
        setPagination({ start: start, end: end })
    }
    //Pagination End


    //Table Creation 
    const userData = async () => {

        try {
            const Dummy_data_Fetching = await fetch(`https://gorest.co.in/public-api/users`);
            const Dummy_data_user = await Dummy_data_Fetching.json()
            setDummy_data(Dummy_data_user.data)

        } catch (error) {
            console.log(error)
        }
    }



    // For New User Addition 

    const Add_newUser = () => {
        return (setAddUser(<AddNewUser />))
    }


    // For Show Button  
    const Showdata_Handeler = (e) => {
        setShowdata(<Show_Data_fetch
            Id={e.id}
            Name={e.name}
            Email={e.email}
            Gender={e.gender}
            Status={e.status} />
        )
    }
    // For Update Data Button
    const EditData = async (id_items) => {

        try {
            const Dummy_data_Fetching = await fetch(`https://gorest.co.in/public-api/users/${id_items}`);
            const Dummy_data_user = await Dummy_data_Fetching.json()

            setUpadte_Data1(
                <Update_Data
                    Id={Dummy_data_user.data.id}
                    Name={Dummy_data_user.data.name}
                    Email={Dummy_data_user.data.email}
                    Gender={Dummy_data_user.data.gender}
                    Status={Dummy_data_user.data.status}
                />)
        } catch (error) {
            console.log(error)
        }

    }


    const DataUpdate = (id_items) => {
        return (EditData(id_items))

    }


    // Delete Data From the Table 

    const Delete = (id) => {

        fetch(`https://gorest.co.in/public-api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer b18c256edc8015751c180697404123415264c51585ae0f122bf1c50444fb97e1`,
                'content-Type': 'application/json',
            }
        }).then((result) => {
            result.json().then((resp) => {
                return (resp)
            })
        })

        userData()

    }
   



    useEffect(() => {
        userData();
    }, [])



    return (
        <div className={Style.Table_responsive}>
            {/* Input Form  */}
            {addUser}
            <button onClick={Add_newUser} type="button" className={Style.btn}>New User</button>
            {/* Data Show A Particular Id/Name when click Show Button */}
            <div>
                {showdata}
                {Update_Data1}
            </div>
            
            <table className={Style.table}>
                <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    {
                        Dummy_data.slice(Pagination.start, Pagination.end).map((cur, i) => {
                            return (
                                <tr key={cur.id}>
                                    <td>{cur.id} </td>
                                    <td>{cur.name} </td>
                                    <td>
                                        <div className={Style.CURD_Opration}>
                                            <span onClick={() => Showdata_Handeler(cur)}>
                                                Show</span>
                                            <span onClick={() => DataUpdate(cur.id)} >Edit</span>
                                            <span onClick={() => Delete(cur.id)} >Delete</span>

                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination_Items
                ShowPerPageItems={ShowPerPageItems}
                ShowPerPages={ShowPerPage}
                Total_length={Dummy_data.length} />

        </div>


    )
}

export default DataFetch