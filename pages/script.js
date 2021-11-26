
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

/*document.querySelectorAll('#heart').forEach(function(h){
  h.addEventListener('click',function(){
    let v=h.value
    document.querySelector('mt-3 sub').innerHTML='h'
  })
})*/
document.querySelectorAll('video').forEach(function(k){
  k.setAttribute('poster','../images/poster')
})

document.querySelector('.rekarea').addEventListener('click', function() {
  open('https://t.me/primeDev')
})

