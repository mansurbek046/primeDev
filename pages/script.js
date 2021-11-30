/*Like tugmasi*/
document.querySelectorAll("#heart").forEach(function(e){
  e.value=0
    e.addEventListener("click",function(){
        if (e.value==0){
            e.setAttribute("src","../images/likeonn.png")
            e.value+=1
            lh(e.value)
        }else {
            e.setAttribute("src","../images/off.png")
            e.value-=1
        }
    })
})

let likeButton=document.querySelectorAll('#heart');
let likeNumber=document.querySelectorAll('#numheart');
let butId=0
let subId=0
likeButton.forEach(function(lb){
  newId=(butId+=1)
  lb.setAttribute('id',newId);
})
likeNumber.forEach(function(lb) {
  newId ='sub'+(subId += 1)
  lb.setAttribute('id', newId);
})
likeButton.forEach(function(l){
  l.addEventListener('click',function(){
    select='sub'+l.id
    document.getElementById(select).innerHTML=l.value
  })
})
/*Like tugmasi*/

/*Video poster*/
document.querySelectorAll('video').forEach(function(k) {
  k.setAttribute('poster', '../images/poster')
})
/*Video poster*/

/*Clicking reklama*/
document.querySelector('.rekarea').addEventListener('click', function() {
  open('https://t.me/primeDev')
})
/*Clicking reklama*/

/*Opening video*/
document.querySelectorAll('.vp').forEach(function(v){
  v.addEventListener('focus', function() {
    v.setAttribute('src', '../images/video.png')
  })
  v.addEventListener('blur', function() {
    v.setAttribute('src', '../images/play.png')
  })
})
/*Opening video*/

/*Opener*/
document.querySelectorAll('button').forEach(function(b){
  b.addEventListener('click',()=>{
    open(b.value)
  })
})