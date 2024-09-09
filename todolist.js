document.addEventListener("DOMContentLoaded",()=>{
    const list=document.getElementById("list");
    const body=document.querySelector("body");
   //const body=document.getElementsByTagName("body");
    const h2=document.createElement('h2');
    h2.textContent="TO DO LIST";
    h2.style.textAlign="center";
    h2.style.color="white";
    h2.style.fontSize="70px"
    list.appendChild(h2);
    const bgimg="https://i.pinimg.com/736x/33/3d/04/333d043a0123546af4cae2e0202324ce.jpg";
    body.style.backgroundImage=`url(${bgimg})`;
    body.style.backgroundSize='cover';
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    const addbox=document.createElement("button");
    addbox.textContent="AddMe!";
    addbox.style.height="35px";
    addbox.style.width="80px";
    addbox.style.borderRadius="5px";
   // list.appendChild(addbox);
    const box=document.getElementById("box");
    box.style.height="35px";
    box.style.width="500px";
    box.style.backgroundColor="white";
   box.style.margin="10px";
    box.style.borderRadius="10px";
    const container=document.createElement("div");
    container.style.display="flex";
    container.style.alignItems="center";
    container.style.justifyContent="center";
    container.appendChild(box);
    container.appendChild(addbox);
    list.appendChild(container);
    const ul=document.createElement('ul');
    ul.style.listStyleType="none";
    ul.style.textAlign="center";
    ul.st//removing bullet points
    list.appendChild(ul);
    //const del=document.createElement(button);
    //del.textContent="Delete";
    addbox.addEventListener("click",()=>
    {
       const userInput=box.value.trim();
       const li=document.createElement('li');
       li.textContent=userInput;
       li.style.color="white";
       li.style.fontSize="30px";
       li.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

       const del=document.createElement("button");
       del.textContent="Delete";
       del.style.background="none";
       del.style.border="none";
       del.style.color="white";
       del.style.fontSize="25px";
       del.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
     /*  del.style.height="35px";
       del.style.width="80px";
       del.style.borderRadius="5px";*/
       del.style.margin=" 0px 150px";
       li.textContent=userInput;

       li.appendChild(del);
       ul.appendChild(li);
       box.value='';
       del.addEventListener("click",()=>
    {
        ul.removeChild(li);
    })

    })
})
