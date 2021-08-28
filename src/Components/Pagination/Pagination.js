import React, { useState, useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

const Pagination_Items = ({ ShowPerPageItems, ShowPerPages, Total_length }) => {

    const [counter, setCounter] = useState(1)
    // const [Btn, setBtn] = useState(Math.ceil(Total_length / ShowPerPageItems))


    const onButtonClick = (type) => {
        if (type === "First") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === "Last") {
            if (Math.ceil(Total_length / ShowPerPageItems) === counter) {
                setCounter(1)
            }
            else {
                setCounter(counter + 1)
            }

        }

    }

    useEffect(() => {
        const value = ShowPerPageItems * counter
        console.log(value - ShowPerPageItems)
        console.log(value)
        ShowPerPages(value - ShowPerPageItems, value)

    }, [counter])
    return (
        
        <Pagination className='d-flex justify-content-center mt-1'>
            <Pagination.First onClick={() => onButtonClick("First")} />
            {

                new Array(Math.ceil(Total_length / ShowPerPageItems)).fill("").map((i, index) => {
                    return (

                        <div key={i}>
                            <Pagination.Item className={`${index + 1 === counter ? "active" : null}`}
                                onClick={() => setCounter(index + 1)}>{index + 1}</Pagination.Item>
                        </div>

                    )
                }) 
            }
            <Pagination.Last onClick={() => onButtonClick("Last")} />
        </Pagination>



    )
}

export default Pagination_Items
