const t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(e){d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.target.disabled=!0,a.disabled=!1}));let d=null;a.addEventListener("click",(function(t){clearInterval(d),t.target.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.21e1a86a.js.map
