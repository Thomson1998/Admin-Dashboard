import React from "react";
import BaseDefault from "../../core/BaseDefault";
import { dash_data } from "../../data/data";


export default function Cards_Page(){
    return(
        <BaseDefault
        styles={"title-page"}
        title={"Cards"}
        >
            <div className="card-data">
                {dash_data.map((data,idx)=>(
                    <div className="card"  key={idx}>
                        <div style={{borderLeft:`3px solid ${data.color}`}} className="card-body1">
                            <p 
                            style={{
                                color:`${data.color}`,
                                fontSize:'12px',
                            }}
                            >{data.title}</p>
                            <p>{data.price}</p>
                        </div>
                        <div className="card-body2">
                            <i className="icon-card">{data.icon}</i>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-type">
                <div className="card1">
                    <div className="ex-card">
                        <h3 className="card-title">default Card Example</h3>
                        <p>
                        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                        </p>
                    </div>
                    <div className="ex-card">
                        <h3 className="card-title">Basic Card Example</h3>
                        <p>
                        The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                        </p>
                    </div>
                </div>
                <div className="card2">
                    <div className="ex-card">
                        <h3 className="card-title">Dropdown Card Example</h3>
                        <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
                    </div>
                    <div className="ex-card">
                        <h3 className="card-title">Collapse Card Example</h3>
                        <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</p>
                    </div>
                </div>
            </div>
        </BaseDefault>
    )
}