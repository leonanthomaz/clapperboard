import React from 'react';
import { SearchInputContainer, Input, Icon } from './searchStyles';

const SearchInput = ({value, onChange}) =>{

    const handleChange =(e)=>{
        onChange(e.target.value)
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