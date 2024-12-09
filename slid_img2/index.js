let slide_number=document.getElementById('slide-number');
let indicators=document.getElementById('indicators');
let prev=document.getElementById('preve');
let next=document.getElementById('next');
let next_left=document.getElementById('next_left');
let next_right=document.getElementById('next_right'); 

let slid_num=0 ;


 let arrayofImg=Array.from(document.querySelectorAll('.slider-container img'));
// to 
for( let i=0 ;i<arrayofImg.length;i++){
let spn=document.createElement('span');
spn.setAttribute('id',i);
spn.className = "spnn";
spn.appendChild(document.createTextNode(i+1));
indicators.appendChild(spn);
}

let list_img = Array.from(document.querySelectorAll('#indicators span'));

for (var i = 0; i < list_img.length; i++) {
    list_img[i].onclick = function () { 
                   slid_num = parseInt(this.getAttribute('id'));
                      showslide(i);
      
  }}
//       تجربة استرجاع رقم الصوره
//   indicators.addEventListener('click',(e)=>{// contains
//  if(e.target.classList.contains('spnn')){
//    console.log(+(e.target.getAttribute('id'))+ +1)
//  }else{console.log('no')}

//   })
 prev.onclick=pervImg;
next.onclick=nextlide;

 next_right.onclick=nextlide;
 next_left.onclick=pervImg;

function pervImg(){

  if(slid_num==0){ 
    
    return false
  }else{
    slid_num-- ;
    showslide(slid_num);
        
  }

}
function nextlide(){

  if(slid_num<arrayofImg.length-1){   
    slid_num++ ;
    showslide(slid_num);
   
  }else{ return false }

}

function showslide(i){  
  removActiv()
  slide_number.innerHTML=`slide# ${slid_num+1} from ${arrayofImg.length}`

  if(slid_num<1){
      prev.classList.add('disabled');
      next_left.classList.add('disabled')

  }else{prev.classList.remove('disabled');
  next_left.classList.remove('disabled')}

  if(slid_num+1<arrayofImg.length){
    next.classList.remove('disabled')
    next_right.classList.remove('disabled')
    
}else{next.classList.add('disabled');
next_right.classList.add('disabled')}

  arrayofImg[slid_num].classList.add('active');
   list_img[slid_num].classList.add('active');
 
}
function removActiv(){
  for(let i=0  ;i<arrayofImg.length;i++){
    arrayofImg[i].classList.remove('active') ;
     list_img[i].classList.remove('active')
  }


}


showslide(slid_num);



