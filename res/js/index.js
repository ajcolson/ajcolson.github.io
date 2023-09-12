document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("Hello, World!")
  
  // Set the site theme
  __.Theme.getThemeFromConfig()
  document.querySelector("#darkModeSwitch").checked = (__.Config.get("themeName") === "dark")


  document.querySelector("#copyEmailToClipboardBtn").addEventListener("click",(e)=>{
    navigator.clipboard.writeText("hello@ajcolson.com").then(()=>{},()=>{})
  })
  
  document.querySelector("#darkThemeToggle").addEventListener("click",(e)=>{
    var themeName = (document.querySelector("#darkModeSwitch").checked?"dark":"light")
    __.setTheme(themeName)
    __.Config.set("themeName", themeName)
  });

})