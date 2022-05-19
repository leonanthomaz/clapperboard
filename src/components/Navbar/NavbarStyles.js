import styled from 'styled-components'

export const NavbarMain = styled.nav`
height: 100px;  

a{
  color: white;
  text-decoration: none;
}

.nav-icon{
    display: none;
}

.nav-menu ul{ 
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding: 10px;
}

.nav-menu li{
    list-style: none;
    padding: 20px;
    margin-left: 20px;
}

@media (max-width: 760px){
    .nav-menu{
        background-color: red;
        width: 250px;
        position: absolute;
        margin-top: 100px;
        left: -400px;
        transition: all 0.5s ease;
    }

    .active{
        left: 0px;
        transition: all 0.5s ease;
    }

    .nav-icon{
        display: block;
        float: left;
        font-size: 24px;
        padding: 10px;   
        margin-top: 30px;
        cursor: pointer;

    }

    .nav-menu ul{ 
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .nav-menu li{
        display: flex;
        justify-content: center;
    }
}

`;