import React from "react";

export default function Characters({char}){
    return (
    <div className="row">
        {char.map((item, index) => (
        <div key={index} className="col">
            <div className="card" style={{minWidth: '200px'}}>
                <img src={item.image} alt="imagen"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="">Species: {item.species}</p>
                <p className="">Location: {item.location.name}</p>
            </div>
            </div>
        </div>
        ))}
    </div>
    )
}