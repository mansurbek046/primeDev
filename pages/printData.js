fetch('./data.json')
.then(res=>res.json())
.then(data=>{
  data.map((siteData)=>{
    let parentDiv=document.createElement('div');
let sitePhoto=document.createElement('img');
let contentDiv=document.createElement('div');
let siteNameDiv=document.createElement('div');
let nameh3=document.createElement('h3');
let playIcon=document.createElement('img');
let aboutDiv=document.createElement('div');
let techsDiv=document.createElement('div');
let firstButton=document.createElement('button');
let lastButton=document.createElement('button');
let threethButton=document.createElement('button');
let firstIconInButton=document.createElement('img');
let lastIconInButton=document.createElement('img');
let threeIconInButton=document.createElement('img');
let siteViewDiv=document.createElement('div');
let buttonsDiv=document.createElement('div');
/**/
sitePhoto.setAttribute('class', 'rounded img-fluid');
sitePhoto.setAttribute('src', '../sitesPhotos/'+siteData.pathPhoto);

nameh3.innerText=siteData.siteName;
/*Sayt nomi*/
siteNameDiv.setAttribute('class', 'mt-3 mb-2');
siteNameDiv.append(nameh3);
// siteNameDiv.append(playIcon);
/*Sayt haqida*/
aboutDiv.setAttribute('class', 'about');
aboutDiv.innerHTML = siteData.siteAbout;
/*Texnologiyalar*/
techsDiv.innerHTML=`Texnologiyalar: ${siteData.techs}`;
techsDiv.setAttribute('class','text-primary fw-bold');
/*Birinchi tugma*/
firstIconInButton.setAttribute('src','../images/github.png');
firstButton.setAttribute('class','btn btn-dark');
firstButton.addEventListener('click',function(){
  open('https://github.com/Mansurbek2006/'+siteData.urlCode);
})
firstButton.innerHTML='Code &nbsp;';
firstButton.append(firstIconInButton);
/*Ikkinchi tugma*/
lastIconInButton.setAttribute('src','../images/connect.png');
lastButton.setAttribute('class','btn btn-dark');
lastButton.addEventListener('click',function(){
  open('https://'+siteData.urlSite);
})
lastButton.innerHTML='Demo &nbsp;';
lastButton.append(lastIconInButton);
/*Uchunchi tugma*/
threethButton.setAttribute('class','btn btn-dark');
threeIconInButton.setAttribute('src','../images/video.png');
threethButton.addEventListener('click',function(){
  open(siteData.urlVideo);
})
threethButton.append(threeIconInButton);

buttonsDiv.setAttribute('class','btn-group btn-group-md');
buttonsDiv.append(firstButton);
buttonsDiv.append(threethButton);
buttonsDiv.append(lastButton);
/*Contentlar,SaytNomi,Sayt haqida,Texnologiyalar,Tugmalar*/
contentDiv.setAttribute('class','content');
contentDiv.append(siteNameDiv);
contentDiv.append(aboutDiv);
contentDiv.append(techsDiv);
contentDiv.append(buttonsDiv);

/*Contentlar*/
siteViewDiv.setAttribute('class','siteView');
siteViewDiv.append(sitePhoto);
siteViewDiv.append(contentDiv);
parentDiv.setAttribute('class','col-md-4 mt-5')
parentDiv.append(siteViewDiv);
document.querySelector('.elements').appendChild(parentDiv);
/**/

  })
})