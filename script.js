let container = document.querySelector("#container")
let range = document.querySelector("#barCount")
let speedSlide = document.querySelector("#speed")
let barContainers = ""
update()
function convert(value){
    return (100/range.value)*value

}
function update(){
    container.innerHTML = ""
    // value.innerHTML = range.value
    // console.log(range.value)
    for(let i = 0;i<range.value;i++){
        let barContainer = document.createElement("div")
        barContainer.classList.add("bar-container")
        let bar = document.createElement("div")
        bar.classList.add("bar")
        bar.style.height = convert(i)+"%"
        barContainer.appendChild(bar)
        container.appendChild(barContainer)
    }
    barContainers = document.querySelectorAll(".bar-container")
}

function shuffle(){
    barContainers.forEach((element,index)=>{
        let randomIndex = index+Math.floor(Math.random()*(barContainers.length-index));
        swap(barContainers[randomIndex],element);
    })
}

function swap(con1,con2){

    [con1.innerHTML,con2.innerHTML] = [con2.innerHTML,con1.innerHTML]
    let tmp = con1.querySelector(".bar").style.backgroundColor 
    con1.querySelector(".bar").style.backgroundColor = con2.querySelector(".bar").style.backgroundColor 
    con2.querySelector(".bar").style.backgroundColor = tmp

}

async function selectionSort(){
    for(let i = 0;i<barContainers.length;i++){
        let present = i
        barContainers[i].querySelector(".bar").style.backgroundColor = "red"
        await new Promise(r => setTimeout(r, speedSlide.value));
        for(let j = i+1;j<barContainers.length;j++){
            barContainers[j].querySelector(".bar").style.backgroundColor = "yellow"
            if(parseInt(barContainers[present].querySelector(".bar").style.height) > parseInt(barContainers[j].querySelector(".bar").style.height)){
                barContainers[j].querySelector(".bar").style.backgroundColor = "magenta"
                swap(barContainers[present],barContainers[j])
            }
            await new Promise(r => setTimeout(r, speedSlide.value));
            barContainers[j].querySelector(".bar").style.backgroundColor = "blue"
        }
        barContainers[i].querySelector(".bar").style.backgroundColor = "green"
    }
}
async function bubbleSort(){
    for(let i = 0;i<barContainers.length;i++){
        // let sort = false
        for(let j=0;j<barContainers.length-i-1;j++){
            barContainers[j].querySelector(".bar").style.backgroundColor = "red";
            barContainers[j+1].querySelector(".bar").style.backgroundColor = "red";
            await new Promise(r => setTimeout(r, speedSlide.value));
            if(parseInt(barContainers[j].querySelector(".bar").style.height) > parseInt(barContainers[j+1].querySelector(".bar").style.height)){
                // sort = true
                // console.log(true)
                swap(barContainers[j],barContainers[j+1])
            }
            barContainers[j].querySelector(".bar").style.backgroundColor = "blue";
            barContainers[j+1].querySelector(".bar").style.backgroundColor = "blue";
        }
        // if(sort==false){
        //     return 0
        // }
        barContainers[barContainers.length-i-1].querySelector(".bar").style.backgroundColor = "green";
        console.log(barContainers[barContainers.length-i-1])
    }
}
async function insertionSort(){
    barContainers[0].querySelector(".bar").style.backgroundColor = "green"
    for(let i = 1;i<barContainers.length;i++){
        barContainers[i].querySelector(".bar").style.backgroundColor = "red"
        // keyHeight = parseInt(barContainers[i].querySelector(".bar").style.height)
        await new Promise((resolve)=>{setTimeout(resolve,speedSlide.value)})
        let j = i-1
        while(parseInt(j>=0&&barContainers[j].querySelector(".bar").style.height) > parseInt(barContainers[j+1].querySelector(".bar").style.height)){
            await new Promise((resolve)=>{setTimeout(resolve,speedSlide.value)})
            // swap(barContainers[j],barContainers[j+1])
            let tmp = barContainers[j].innerHTML
            barContainers[j].innerHTML = barContainers[j+1].innerHTML
            barContainers[j+1].innerHTML = tmp
            // [,barContainers[j+1].innerHTML] = [barContainers[j+1].innerHTML,barContainers[j].innerHTML]
            j--
        }
        console.log(barContainers[j+1])
        barContainers[j+1].querySelector(".bar").style.backgroundColor = "green"
    }
}
async function mergeSort(){
    array = [3,4,5,5,34,4,3,234,234,5,34,4,56]
    function mergeSort(array){
        mid = Math.floor(array.length/2)
        let l = array.slice(0,mid)
        let r = array.slice(mid)
        r[0]=100
        console.log(l)
        console.log(r)
    }
    mergeSort(array)
    console.log(array)
}