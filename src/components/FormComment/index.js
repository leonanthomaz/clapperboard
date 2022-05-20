import React, { useState, useEffect, useRef } from "react";
import api from "../../api/apiBackend";

const FormComment = ({id}) => {
    const [ values, setValues ] = useState('')
    console.log(values)
    const movieId = useRef()

    const handleChangeValue = (e) => {
        setValues(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const handleSendComment = (id) => {
        api.post('http://localhost:5000/post/insert',{
            movieId: values.id,
            userId: '123',
            spoiler: values.spoiler,
            title: values.title,
            comment: values.comment
        }).then((response)=>{
            console.log('Enviado com sucesso!', response)
        }).then((err)=>{
            console.log('erro!', err)
        })
    }

    return (
        <>
        <form>
            <label>Contém Spoiler?</label>
            <input type='hidden' value={id} />
            <select name="spoiler" onChange={handleChangeValue}><br/>
                <option value='yes'>Sim</option>
                <option value='no'>Não</option>
            </select><br/>
            <label>Titulo</label><br/>
            <input type='text' name="title" onChange={handleChangeValue} /><br/>
            <textarea type='text' name="comment" onChange={handleChangeValue} placeholder="Deixe seu comentário" /><br/>
            <input onClick={handleSendComment} type='submit'/>
        </form>
        </>
    )
}

export default FormComment;