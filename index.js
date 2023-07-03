document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("Hello, World!")
  document.querySelector("#copyEmailToClipboardBtn").addEventListener("click",(e)=>{
    navigator.clipboard.writeText("hello@ajcolson.com").then(()=>{},()=>{})
  })
})