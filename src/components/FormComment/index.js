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
        api.post('post/insert',{
            movieId: values.id,
            userId: '123',
            spoiler: values.spoiler,
            stars: values.stars,
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
            <input type='hidden' value={id} />
            <label>Contém spoiler? </label>
            <select name="spoiler" onChange={handleChangeValue}><br/>
                <option value='yes'>Sim</option>
                <option value='no'>Não</option>
            </select><br/>
            <label>Quantas estrelas este filme merece? </label>
            <select name="stars" onChange={handleChangeValue}><br/>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select><br/>
            <label>Titulo</label><br/>
            <input type='text' name="title" onChange={handleChangeValue} /><br/>
            <textarea type='text' name="comment" onChange={handleChangeValue} placeholder="Deixe seu comentário..." /><br/>
            <input onClick={handleSendComment} type='submit'/>
        </form>
        </>
    )
}

export default FormComment;