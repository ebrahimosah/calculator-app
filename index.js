const colorThemes = document.querySelectorAll('[name="theme')

const storeTheme = (theme)=>{
    localStorage.setItem('theme', theme);
}

const retriveTheme = ()=>{
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach(themeOption=>{
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click',()=>{
        storeTheme(themeOption.id);
    })
})

document.onload = retriveTheme();