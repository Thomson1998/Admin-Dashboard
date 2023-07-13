import React from "react";
import BaseDefault from "../../core/BaseDefault";

export default function Colors_Page(){
    return(
        <BaseDefault
            styles="title-page"
            title="Color Utilities"
        >
            <p className="color-define">Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            <div className="card-color-type">
                <div className="def-color">
                    <p className="card-color">Custom Text Color Utilities</p>
                    <div>
                        <p className="--bs-secondary-color">.text-gray-100</p>
                        <p style={{fontWeight:"200"}}>.text-gray-200</p>
                        <p style={{fontWeight:"300"}}>.text-gray-300</p>
                        <p style={{fontWeight:"400"}}>.text-gray-400</p>
                        <p style={{fontWeight:"500"}}>.text-gray-500</p>
                        <p style={{fontWeight:"600"}}>.text-gray-600</p>
                        <p style={{fontWeight:"700"}}>.text-gray-700</p>
                        <p style={{fontWeight:"800"}}>.text-gray-800</p>
                        <p style={{fontWeight:"900"}}>.text-gray-900</p>
                    </div>
                </div>
                <div className="def-color">
                    <p className="card-color">Custom Background Gradient Utilities</p>
                </div>
                <div className="def-color">
                    <p className="card-color">Custom Grayscale Background Utilities</p>
                </div>
            </div>
        </BaseDefault>
    )
}