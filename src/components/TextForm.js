import React, { useState } from "react";

export default function TextForm(props) {
    const [txt, setTxt] = useState("Enter Text Here : ");

    const handleUpClick = () => {
        let newTxt = txt.toUpperCase();
        setTxt(newTxt);
        props.showAlert("Converted To Uppercase", "success")
    }


    const handleLoClick = () => {
        let newTxt = txt.toLowerCase();
        setTxt(newTxt);
        props.showAlert("Converted To Lowercase", "success")
    }

    const handleClClick = () => {
        let newTxt = ("");
        setTxt(newTxt);
        props.showAlert("Text Cleared", "success")
    }

    const handleTxClick = () => {

        let newTxt = txt.toLowerCase().split(" ");
        for (var i = 0; i < newTxt.length; i++) {
            newTxt[i] = newTxt[i][0].toUpperCase() + newTxt[i].slice(1);
        }

        setTxt(newTxt.join(" "));
        props.showAlert("Converted To Title Text", "success")
    }

    const handleExtraspace = () => {
        let newTxt = txt.split(/[ ]+/);
        setTxt(newTxt.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }

    const handleOnChnage = (event) => {
        console.log("On Change")
        setTxt(event.target.value);
    }

    // function wordcount() {
    //     var text = document.getElementById("myBox").value;
    //     var count1 = 0 ;

    //     var split = text.split(' ');
    //     for (var i = 0; i < split.length; i++) {
    //         if (split[i] !== "") {
    //             count1 ++;
    //         }
    //     }

    //     document.getElementById("wod").innerHTML= count1;
    // }
    return (
        <>
            <div className="contanier" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        value={txt}
                        onChange={handleOnChnage}
                        rows={8}
                       
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lower</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleTxClick}>Title Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Spaces</button>
            </div>
            <div className="contanier my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Text Summamry</h1>
                <p> {txt.split(" ").length} words and {txt.length} Characters</p>
                <p>{0.008 * txt.split(" ").length} Minutes Take to Read </p>
            </div>
        </>
    );
}