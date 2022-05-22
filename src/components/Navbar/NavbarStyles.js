import styled from 'styled-components'

export const NavbarMain = styled.nav`
height: 100px;  

a{
  color: white;
  text-decoration: none;
  transition: all ease 1s;

}

a:link{
    color: white;
}
a:visited {
    color:white;
    transition: all ease 1s;

}
a:hover   {
    color:yellow;
    text-decoration: overline 3px yellow;
    transition: all ease 1s;
}
a:active  {
    color:black;
    
}

.nav-icon{
    display: none;
}

.nav-menu ul{ 
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding: 10px;
    margin-top: 10px
}

.nav-menu li{
    list-style: none;
    padding: 20px;
    margin-left: 20px;
}

.nav-item {
  line-height: 40px;
  margin-right: 1rem;
}

.nav-item:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.5s ease;
}

.nav-item .active {
  color: #ffdd40;
  border: 1px solid #ffdd40;
}

@media (max-width: 760px){
    .nav-menu{
        background-color: red;
        width: 250px;
        position: absolute;
        margin-top: 100px;
        left: -400px;
        transition: all 0.5s ease;
        border-radius: 5px;
    }

    .nav-menu.active{
        left: 0px;
        transition: all 0.5s ease;
        
    }

    .nav-item.active {
        color: #ffdd40;
        border: none;
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