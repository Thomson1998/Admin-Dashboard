/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BaseDefault from "../core/BaseDefault";
import { dash_data, data_color } from "../data/data";

export default function Dashboard(){
    
    return(
        <BaseDefault
        styles={"title-page"}
        title={"Dashboard"}
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
            <div className="over-card">
                <div className="over1">
                    <h5 className="card-title">Earnings Overview</h5>
                    <div></div>
                </div>
                <div className="over2">
                    <h5 className="card-title">Revenue Sources</h5>
                    <div></div>
                </div>
            </div>
            <div className="details-card">
                <div className="details1">
                    <div className="proj-card">
                        <h5 className="card-title">Projects</h5>
                        <div></div>
                    </div>
                    {data_color.map((data,idx)=>(
                    <div className="color-card" style={{backgroundColor:`${data.color_id}`,color:`${data.color}`,border:'2px solid'}} key={idx}>
                        <p>{data.color_name}</p>
                        <p style={{opacity:"0.5"}}>{data.color_id}</p>
                    </div>
                    ))}
                </div>
                <div className="details2">
                    <div className="ill">
                        <h5 className="card-title">Illustrations</h5>
                        <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"/>
                    </div>
                    <div className="dev-apr"></div>
                </div>
            </div>
        </BaseDefault>
    )
}