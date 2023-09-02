
var prevScrollPos=window.scrollY;
console.log(prevScrollPos);
window.onscroll=()=>{
    var curScrollPos=window.scrollY;
    if(prevScrollPos>curScrollPos ){
        document.getElementById("navbar_scroll").style.top="0";
    }
    else {
        // document.getElementById("navbar_scroll").style.top = "-70px";
}
}
document.getElementById(`cont-4-card1`).addEventListener("mouseover",function a(){
    console.log("hello");
    document.getElementById("head-container1").style.backgroundColor="#55bfff";
    document.getElementById("head-container1").style.color="white";
    document.getElementById("price_containerid1").style.backgroundColor="#55bfff";
    document.getElementById("price_containerid1").style.color="white";
    document.getElementById("price_btn1").style.backgroundColor="white";
    document.getElementById("price_btn1").style.color="#55bfff";
})
document.getElementById(`cont-4-card1`).addEventListener("mouseout",function a(){
    console.log("hello");
    document.getElementById("head-container1").style.backgroundColor="#edf6ff";
    document.getElementById("head-container1").style.color="black";
    document.getElementById("price_containerid1").style.backgroundColor="#edf6ff";
    document.getElementById("price_containerid1").style.color="black";
    document.getElementById("price_btn1").style.backgroundColor="#55bfff";
    document.getElementById("price_btn1").style.color="white";
})

document.getElementById(`cont-4-card2`).addEventListener("mouseover",function a(){
    console.log("hello");
    document.getElementById("head-container2").style.backgroundColor="#55bfff";
    document.getElementById("head-container2").style.color="white";
    document.getElementById("price_containerid2").style.backgroundColor="#55bfff";
    document.getElementById("price_containerid2").style.color="white";
    document.getElementById("price_btn2").style.backgroundColor="white";
    document.getElementById("price_btn2").style.color="#55bfff";
})
document.getElementById(`cont-4-card2`).addEventListener("mouseout",function a(){
    console.log("hello");
    document.getElementById("head-container2").style.backgroundColor="#edf6ff";
    document.getElementById("head-container2").style.color="black";
    document.getElementById("price_containerid2").style.backgroundColor="#edf6ff";
    document.getElementById("price_containerid2").style.color="black";
    document.getElementById("price_btn2").style.backgroundColor="#55bfff";
    document.getElementById("price_btn2").style.color="white";
})

document.getElementById(`cont-4-card3`).addEventListener("mouseover",function a(){
    console.log("hello");
    document.getElementById("head-container3").style.backgroundColor="#55bfff";
    document.getElementById("head-container3").style.color="white";
    document.getElementById("price_containerid3").style.backgroundColor="#55bfff";
    document.getElementById("price_containerid3").style.color="white";
    document.getElementById("price_btn3").style.backgroundColor="white";
    document.getElementById("price_btn3").style.color="#55bfff";
})
document.getElementById(`cont-4-card3`).addEventListener("mouseout",function a(){
    console.log("hello");
    document.getElementById("head-container3").style.backgroundColor="#edf6ff";
    document.getElementById("head-container3").style.color="black";
    document.getElementById("price_containerid3").style.backgroundColor="#edf6ff";
    document.getElementById("price_containerid3").style.color="black";
    document.getElementById("price_btn3").style.backgroundColor="#55bfff";
    document.getElementById("price_btn3").style.color="white";
})
