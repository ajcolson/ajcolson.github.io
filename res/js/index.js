document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("Hello, World!")
  
  // Set the site theme
  __.Theme.loadThemeFromConfig()
  document.querySelector("#darkThemeSwitch").checked = (__.Config.get("themeName") === "dark")

  // Check for HTTPS
  if (window.location.protocol !== "https:"){
    document.querySelector("#http-alert").classList.remove("hidden")
    document.querySelector("#http-alert-link").href = "https://" + window.location.hostname +  window.location.pathname
  }

  document.querySelector("#copyEmailToClipboardBtn").addEventListener("click",(e)=>{
    navigator.clipboard.writeText("alex@ajcolson.com").then(()=>{},()=>{})
  })
  
  document.querySelector("#darkThemeToggle").addEventListener("click",(e)=>{
    var themeName = (document.querySelector("#darkThemeSwitch").checked?"dark":"light")
    __.Theme.setTheme(themeName)
    __.Config.set("themeName", themeName)
  })

})