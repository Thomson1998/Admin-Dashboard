import React from "react";
import { Button } from "react-bootstrap";
import BaseDefault from "../../core/BaseDefault";
import { circle_btn } from "../../data/data";

export default function Button_Page(){
    return(
        <BaseDefault>
            <h3 className="title-page">Buttons</h3>
            <div className="buttons">
                <div className="btn-type">
                    <div className="circle-btn">
                        <h3 className="card-title">Circle Buttons</h3>
                        <p className="btn-desc">Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                        <div className="btn-group">
                            <div className="btn-row">
                            <p className="size-name">.btn-circle</p>
                            {circle_btn.map((data,idx)=>(
                                <div className="btn-circle" style={{
                                    backgroundColor:`${data.color_id}`,
                                    borderRadius:"50%",
                                    
                                    }} key={idx}>
                                        {data.btn}
                                </div>
                            ))}
                            </div>
                            <div className="btn-row">
                            <p className="size-name">.btn-circle .btn-sm</p>
                            {circle_btn.map((data,idx)=>(
                                <div className="btn-circle btn-sm" style={{
                                    backgroundColor:`${data.color_id}`,
                                    borderRadius:"50%"
                                    }} key={idx}>
                                        {data.btn}
                                </div>
                            ))}
                            </div>
                            <div className="btn-row">
                            <p className="size-name">.btn-circle .btn-lg</p>
                            {circle_btn.map((data,idx)=>(
                                <div className="btn-circle btn-lg" style={{
                                    backgroundColor:`${data.color_id}`,
                                    borderRadius:"50%",
                                    opacity:"0.9",
                                    }}  key={idx}>
                                        {data.btn}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="brand-btn">
                        <h3 className="card-title">Brand Buttons</h3>
                        <div>
                            <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.
                                You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                            <Button variant="danger">G .btn-google</Button>
                            <Button variant="primary">f .btn-facebook</Button>
                        </div>
                    </div>
                </div>
                <div className="split-btn">
                    <h3 className="card-title">Split Buttons With Icon</h3>
                    <p>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</p>
                    <div className="btn-list">
                        <Button variant="primary">Split Button Primary</Button>
                        <Button variant="secondary">Split Button Secondary</Button>
                        <Button variant="success">Split Button Success</Button>
                        <Button variant="warning">Split Button Warning</Button>
                        <Button variant="danger">Split Button Danger</Button>
                        <Button variant="info">Split Button Info</Button>
                        <Button variant="light">Split Button Light</Button>
                        <Button variant="dark">Split Button Dark</Button>
                    </div>
                </div>
            </div>
        </BaseDefault>
    )
}