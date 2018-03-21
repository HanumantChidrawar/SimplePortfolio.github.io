let  myFunction= () => {
    let x = document.getElementById("largeDevices");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.flex-direction= "column"
    } else {
        x.style.display = "none";
    }
}
