import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FormStyle } from '../styles/elements'

export default function Search() {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/search/` + input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    type="text"
                    placeholder='Search'
                    onChange={(e) => setInput(e.target.value)}
                    value={input} />
            </div>
        </FormStyle>
    )
}
