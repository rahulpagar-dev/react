
let root1=document.getElementById("root1")
async function FetchData(){
    const response=await fetch("https://dog.ceo/api/breed/hound/images")
    const Data=await response.json();
    //console.log(Data);
    RenderList(Data.message);
    
}
FetchData();
root1.innerHTML("hello");

function RenderList(breedlist){
    let A=[];
    A=breedlist;
    
    //const x= Object.keys(breedlist).map((x)=>`<h1>${x}</h1>`);
    let list=A.map((x)=>`<h1>${x}</h1>`);
    console.log(list);
    
    //document.getElementById("root1").innerHTML("list);


}