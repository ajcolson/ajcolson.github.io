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

  document.querySelector("#emailModal").addEventListener("show.bs.modal",function(){
    document.querySelector("#emailAddrInput").value = "616c657840616a636f6c736f6e2e636f6d".match(/.{1,2}/g).map(function(v){
      return String.fromCharCode(parseInt(v, 16));
    }).join('')
    document.querySelector("#emailAddrLink").href = "6d61696c746f3a616c657840616a636f6c736f6e2e636f6d".match(/.{1,2}/g).map(function(v){
      return String.fromCharCode(parseInt(v, 16));
    }).join('')
  })

  document.querySelector("#emailModal").addEventListener("hidden.bs.modal",function(){
    document.querySelector("#emailAddrInput").value = ""
    document.querySelector("#emailAddrLink").href = ""
  })

})