/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Navbar, NavDropdown, } from "react-bootstrap";
import { BsFillEmojiWinkFill, BsSpeedometer, } from "react-icons/bs";
import { FiSettings,  } from "react-icons/fi";
import { TiChartArea, TiFolder, TiSpanner } from "react-icons/ti";
import { BiTable } from "react-icons/bi";
import { useHistory } from "react-router-dom";


export default function SideBar(){
    const history = useHistory();
    return(
        <>
            <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-box">
                <i className="icon-nav"><BsFillEmojiWinkFill/></i>
                <a className="nav-name" onClick={()=>history.push("/")} href="/">SB ADMIN ²</a>
            </div>
            <hr/>
            <div className="nav-box">
                <i className="icon-nav"><BsSpeedometer/></i>
                <a className="nav-name" onClick={()=>history.push("/")} href="/">Dashboard</a>
            </div>
            <hr/>
            <div className="nav-box">
                <i className="icon-nav"><FiSettings/></i>
                <NavDropdown title="Components" className="nav-name" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={()=>history.push("/buttons")}>Buttons</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/cards")} >Cards</NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="nav-box">
                <i className="icon-nav"><TiSpanner/></i>
                <NavDropdown title="Utilities" className="nav-name" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={()=>history.push("/colors")} >Colors</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/borders")}>Borders</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/animations")}>Animations</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/others")}>Other</NavDropdown.Item>
                </NavDropdown>
            </div>
            <hr/>
            <div className="nav-box">
                <i className="icon-nav"><TiFolder/></i>
                <NavDropdown title="Pages" className="nav-name" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={()=>history.push("/login")}>Login</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/register")}>Register</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/forgot")}>Forget Password</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/**")}>404 Page</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>history.push("/blank")}>Blank Page</NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="nav-box">
                <i className="icon-nav"><TiChartArea/></i>
                <a className="nav-name" onClick={()=>history.push("/charts")} >Charts</a>
            </div>
            <div className="nav-box">
                <i className="icon-nav"><BiTable/></i>
                <a className="nav-name" onClick={()=>history.push("/tables")}>Tables</a>
            </div>
            <hr/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}