import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/logo-images/footer-logo.png'
import NavbarLogo from '../assets/logo-images/navbar-logo.png'
import GifLogo from '../assets/logo-images/gif-logo.gif'

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 10px 20px;
`;
const MenuIcon = styled.div`
    color: white;
    cursor: pointer;
`;

export const PhoneNavbar = () => {
    
    const [show,setShow] = useState(false);
    
    window.onresize = function(){
        if(window.innerWidth > 768){
            setShow(false)
        }
    }
   
    return (
        <Nav>
            <MenuIcon className="material-icons" onClick = {() => setShow(!show)}>
                {show ? "close" : "menu"}
            </MenuIcon>
            <img src={NavbarLogo} alt="sabay news logo" height="40px" />
            <img src={GifLogo} alt="media sabay logo" height="40px" />
            <Drawer show={show}/>
        </Nav>
    )
}

const Container = styled.div`
    background-color: black;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 60px;
    transform: ${prop => prop.show ? "traslateY(0%)" : "translateY(-125%)" };
    transition: 0.25s;
    z-index: 10;
`;
const ActiveHome = styled.div`
    width: 100%;
    background-color: #d90c16;
    color: white;
    font-size: 20px;
`;
const Menu = styled.div`
    display: flex;
    align-items: start;
`;
const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
    color: white;
`;
const ResItem = styled.div`
    background-color: #fa1939;
    padding: 0px;
    width: 100%;
    display: ${prop => prop.hide ? "none" : "block"};
`;
const ResSubItem = styled.div`
    padding: 8px 10px;
    border-bottom: 1px solid #eee;
    &:hover{
        background-color: #d90c16; 
    }
`;
const Footer = styled.div`
    padding: 10px;
    text-align: center;
`;
const linkStyle = {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    padding: "10px 15px"
}

export const Drawer = ({ show }) => {

    const [hide,setHide] = useState(true);

    return (
        <Container show={show} >
            <ActiveHome>
                <Link to="/" className="material-icons" style={linkStyle}>home</Link>
            </ActiveHome>
            <Menu>
                <SubMenu>
                    <Link to="/entertain" style={linkStyle}>កម្សាន្ត</Link>
                    <Link to="/lifeandsociety" style={linkStyle}>ជីវិតនិងសង្គម</Link>
                    <Link to="/deals" style={linkStyle}>DEALS</Link>            
                    <Link to="#" className="material-icons" style={linkStyle} onClick={() => setHide(!hide)}>
                        more_horiz
                    </Link>
                </SubMenu>
                <SubMenu>
                    <Link to="/technology" style={linkStyle}>បច្ចេកវិទ្យា</Link>
                    <Link to="/sport" style={linkStyle}>កីឡា</Link>
                    <Link to="/bacII" style={linkStyle}>បាក់ឌុប២០២១</Link>
                    <ResItem hide={hide}>
                        <ResSubItem>
                            <Link to="/autotalk" style={linkStyle}>AUTOTALK</Link>    
                        </ResSubItem> 
                        <ResSubItem>
                            <Link to="/healthylife" style={linkStyle}>HEALTHY LIFE</Link>  
                        </ResSubItem>   
                        <ResSubItem>
                            <Link to="/startingup" style={linkStyle}>STARTING UP</Link>
                        </ResSubItem>   
                        <ResSubItem>
                            <Link to="/quiz" style={linkStyle}>QUIZ</Link>
                        </ResSubItem>  
                        <ResSubItem>
                            <Link to="/covid19" style={linkStyle}>កូវីត-១៩</Link>    
                        </ResSubItem>   
                    </ResItem>
                </SubMenu>
            </Menu>
            <Footer>
                <img src={FooterLogo} height="20px" alt="sabay footer logo"/>
            </Footer>
        </Container>
    )
}

