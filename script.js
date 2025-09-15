const togglebtn = document.getElementById("theme");

togglebtn.addEventListener("click",() => {
    document.body.classList.toggle("light-theme");
    togglebtn.textContent = document.body.classList.contains("light-theme") ? "🌑" : "🌙";
})

const editBtn = document.getElementById("about-edit");
const aboutText = document.getElementById("about-text");

editBtn.addEventListener("click", () => {
    if(!aboutText.isContentEditable){
        aboutText.contentEditable = "true";
        aboutText.focus();
        editBtn.textContent = "💾 Save";
    }else{
        aboutText.contentEditable = "false";
        editBtn.textContent = "✏️ Edit";
        alert("Changes saved!");
    }
});
