import React, { useContext } from 'react';
import { SearchInputContainer, Input, Icon } from './searchStyles';
import { MoviesContext } from '../../context/MovieContext';

const SearchInput = ({value, onChange}) =>{
    const { text, setText, setCloseSearch, closeSearch } = useContext(MoviesContext)

    const handleChange =(e)=>{
        onChange(e.target.value)
    }

    const handleCloseSearch = () => {
        setCloseSearch(!closeSearch)
        setText('')
    }
    
    return(
        <>
        <SearchInputContainer>
            <Input placeholder='Encontre seu filme...' value={value} onChange={handleChange}  />
        </SearchInputContainer>
        {text 
        ? 
        <Icon onClick={handleCloseSearch}>
            <i className="fa-solid fa-x"/>
        </Icon>
        :
        <Icon>
            <i className="fa-solid fa-magnifying-glass" />
        </Icon>
        }
       
        </>
    )
}

export default SearchInput;