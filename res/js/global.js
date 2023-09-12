__ = {
  Theme:{
    setTheme: (themeName)=>{
      document.querySelector("html").setAttribute("data-bs-theme",themeName)
    },
    loadThemeFromConfig: ()=>{
      if ( !__.Config.exists("themeName") )
        __.Config.set("themeName","dark")
      __.Theme.setTheme(__.Config.get("themeName"))
    }
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