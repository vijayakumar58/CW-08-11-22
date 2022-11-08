// const div=document.createElement("div");
// div.innerHTML="lorem";
// // document.body.append(div);

// const par=document.createElement("p");
// par.innerHTML="lorem";
// // document.body.append(par);

// const par1=document.createElement("p");
// par1.innerHTML=`<mark>it is mark tag</mark>`;
// document.body.appendChild(par1,par);

// const div1=document.createElement("div");
// div1.innerHTML="lorem";
// document.body.append(div1,div );

const division=document.createElement("div");
division.setAttribute("class","container");

const division1=document.createElement("div");
division1.setAttribute("class","row");

const division2=document.createElement("div");
division2.setAttribute("class","col");
division2.innerHTML="Hi";

division1.append(division2);
division.append(division1);
document.body.append(division);