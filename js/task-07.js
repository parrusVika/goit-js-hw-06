const fontSizeContolRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${Number(fontSizeContolRef.value)}px`
console.log(textRef)