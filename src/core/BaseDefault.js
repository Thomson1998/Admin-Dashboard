/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Nav_Bar from "../Navbar/navbar";
import SideBar from "../Navbar/sidebar";

export default function BaseDefault({title,styles,children}){
    return(
        <>
        <>
            <SideBar/>
        </>
            <div className="main-body">
                <Nav_Bar/>
                <div className={styles}>{title}</div>
                <div className="children">{children}</div>
            </div>
            
        </>
    )
}