window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);
    }

});
