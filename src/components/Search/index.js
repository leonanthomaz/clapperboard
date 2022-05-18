import React from 'react';
import { SearchInputContainer, Input, Icon } from './searchStyles';
import { MoviesContext } from '../../context/MovieContext';
import { useContext } from 'react';

const SearchInput = ({value, onChange}) =>{
    const { text } = useContext(MoviesContext)


    const handleChange =(e)=>{
        onChange(e.target.value)
        if(e.target.value){
            text('')
        }
    }
    
    return(
        <>
        <SearchInputContainer>
            <Input placeholder='Encontre seu filme...' value={value} onChange={handleChange}  />
        </SearchInputContainer>
        <Icon>
            <i className="fa-solid fa-magnifying-glass" />
        </Icon>
        </>
    )
}

export default SearchInput;