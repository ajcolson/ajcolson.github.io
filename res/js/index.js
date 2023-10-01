document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("Hello, World!")
  
  // Set the site theme
  __.Theme.loadThemeFromConfig()
  document.querySelector("#darkModeSwitch").checked = (__.Config.get("themeName") === "dark")


  document.querySelector("#copyEmailToClipboardBtn").addEventListener("click",(e)=>{
    navigator.clipboard.writeText("alex@ajcolson.com").then(()=>{},()=>{})
  })
  
  document.querySelector("#darkThemeToggle").addEventListener("click",(e)=>{
    var themeName = (document.querySelector("#darkModeSwitch").checked?"dark":"light")
    __.Theme.setTheme(themeName)
    __.Config.set("themeName", themeName)
  })

  document.querySelector("#emailModal").addEventListener("show.bs.modal",function(){
    document.querySelector("#emailAddrInput").value = "alex@ajcolson.com"
    document.querySelector("#emailAddrLink").href = "mailto:alex@ajcolson.com"
  })

  document.querySelector("#emailModal").addEventListener("hidden.bs.modal",function(){
    document.querySelector("#emailAddrInput").value = ""
    document.querySelector("#emailAddrLink").href = ""
  })

})