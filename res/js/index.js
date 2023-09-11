__ = {
  setTheme: (themeName)=>{
    document.querySelector("html").setAttribute("data-bs-theme",themeName)
  },
  Config:{
    set: (name,val)=>{
      return localStorage.setItem(name,val)
    },
    get: (name)=>{
      return localStorage.getItem(name)
    },
    remove: (name)=>{
      return localStorage.removeItem(name)
    },
    exists: (name)=>{
      return (localStorage.getItem(name) !== null)
    }
  }
}

document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("Hello, World!")
  
  // Set the site theme
  __.setTheme("dark")
  if ( !__.Config.exists("themeName") )
    __.Config.set("themeName","dark")
  __.setTheme(__.Config.get("themeName"))
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