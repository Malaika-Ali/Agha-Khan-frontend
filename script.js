// Left Eye Picture Preview JS
let uploadButton=document.getElementById("upload-button");
let chosenImage=document.getElementById("chosen-img");
let fileName=document.getElementById("file-name");

let rightEyeResult=document.getElementById("right-eye-result")

uploadButton.onchange=()=>{
    document.getElementById("input-heading").style.display = "none";
    let reader=new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload=()=>{
        chosenImage.setAttribute("src",reader.result)
    }
}

// Right Eye Picture Preview JS
let uploadButton2=document.getElementById("upload-button2");
let chosenImage2=document.getElementById("chosen-img2");
let fileName2=document.getElementById("file-name2");

uploadButton2.onchange=()=>{
    document.getElementById("ip2").style.display = "none";
    let reader=new FileReader();
    reader.readAsDataURL(uploadButton2.files[0]);
    console.log(uploadButton2.files[0]);
    reader.onload=()=>{
        chosenImage2.setAttribute("src",reader.result)
    }
}

// Left Eye Caption Input Logic
let fig1_caption=document.getElementById("file-name");
let fig1_captionInput=document.getElementById("left-eye-picture-caption-input");

fig1_captionInput.oninput=()=>{
    fig1_caption.innerHTML=fig1_captionInput.value;
}

// function inputFunc(){
//     fig1_caption.innerHTML=fig1_captionInput.value;
// }

// fig1_captionInput.addEventListener("mouseenter", (e) => {
//     fig1_caption.innerHTML=fig1_captionInput.value;
//     console.log(fig1_captionInput.value)
//   });

// Left Eye Caption Input Logic
let fig2_caption=document.getElementById("file-name2");
let fig2_captionInput=document.getElementById("right-eye-picture-caption-input");

fig2_captionInput.oninput=()=>{
    fig2_caption.innerHTML=fig2_captionInput.value;
}

function changeLogin(){
    console.log('ok')
    location.href = "models-page.html";
}

function changereg(){
    console.log('ok')
    location.href = "report.html";
}

