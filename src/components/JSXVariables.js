import React from "react";
const name = "Jung";
const thoughts = "I love React woo hoo!"

const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for(let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h3>The length of my name is {name.length}</h3>
          <h2>My name has {removeVowels(name)} letters without vowels</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
