let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")

let slider = document.querySelector(".slider")
let sliderList = slider.querySelector(".slider .list")

let thumbnail = document.querySelector(".thumbnail")
let thumbnailItem = document.querySelector(".item")

// thumbnail.appendChild(thumbnailItem[0])

nextBtn.onclick = function(){
    moveSlider("next")
}


prevBtn.onclick = function(){
    moveSlider("prev")
}

function moveSlider(direc) { 
    let sliderItems = sliderList.querySelectorAll(".item")
    let thumbnailItems = document.querySelectorAll(".thumbnail .item")
    
    if(direc==="next"){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    }else{
        sliderList.prepend(sliderItems[sliderItems.length-1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length-1])
        slider.classList.add('prev')
    }
    slider.addEventListener("animationend" , function(){
        if(direc === "next"){
            slider.classList.remove('next')
        }else{
            slider.classList.remove('prev')
        }
    } , {once:true})
}

