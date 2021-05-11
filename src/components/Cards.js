import React from 'react';

function someMath() {
    return Math.floor(Math.random() * 100);
}

function Forms(props) {
    let something = "";
    for(let i = 0; i < props.name.length; i++) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        if(!vowels.includes(props.name[i].toLowerCase())) {
            something += props.name[i];
        }
    }
    return (
        <div class="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{something}
                <hr />
                {someMath()}</p>
            </div>
        </div>
    );
}

export default Forms;