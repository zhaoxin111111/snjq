
window.onload=function(){
// 一键返回顶部
    let back=document.querySelector('.return');
    console.dir(back);
    back.onclick=function () {
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

//  侧导航楼层跳转
    let floors=document.querySelectorAll('.ayy');
    console.dir(floors);
    let ch=document.documentElement.clientHeight;
    console.dir(ch);
    let navs=document.querySelectorAll('.cedaohang li');
    console.dir(navs);
//     顶层隐藏条
    let hidden=document.querySelector('.hidden');
    console.dir(hidden);
     let trans=document.querySelector('.dajvhui');
    let cedao=document.querySelector('.nav_left123')
    console.dir(cedao);
    let out=true;
    let comein=false;
    let flag=true;
     window.onscroll=function () {
         let tops=document.body.scrollTop?
             document.body.scrollTop:document.documentElement.scrollTop;
         if(tops>=trans.offsetTop){
             if(out){
                     out=false;
                     cedao.style.opacity=1;
                     animate(hidden,{top:0},function () {
                     comein=true;
                 });
             }

         }else if(comein){
                     comein=false;
                     cedao.style.opacity=0;
                     animate(hidden,{top:-50},function () {
                     out=true;
                 })
             }

         
         if(!flag){
             return;
         }

    floors.forEach(function (val,index) {
             if(tops>=val.offsetTop-ch+100){
                 navs.forEach(function (dom) {
                     dom.classList.remove('active1');
                 })
                 navs[index].classList.add('active1');
             }
         })
     }
//     点击侧导航
    navs.forEach(function (dom,b) {
        dom.onclick=function () {
            let t=floors[b].offsetTop;
            animate(document.body,{scrollTop:t},100);
            animate(document.documentElement,{scrollTop:t},100);
        }
    })




// 大聚会单品
    let x=0;
    let y=0;
    let mxbig=document.querySelector('.start1');
    let start=document.querySelectorAll('.dajvhui_bottom_box');
    console.dir(start);
    let kuan=parseInt(getComputedStyle(mxbig,null).width);
    let mxz=document.querySelector('.dajuhui_jiantou_l');
    let mxy=document.querySelector('.dajuhui_jiantou_r');

    mxz.onclick=function(){
        y=x-1;
        if(y<0){
            y=start.length-1;
        }
        start[y].style.left="100%";
        animate(start[x],{left:-kuan});
        animate(start[y],{left:0});
        x=y;
    }
    mxy.onclick=function(){
        y=x+1;
        if(y>=start.length){
            y=0;
        }
        start[y].style.left="-100%";
        animate(start[x],{left:kuan});
        animate(start[y],{left:0});
        x=y;
    }
// 大聚会单品
    let x1=0;
    let y1=0;
    let mxbig1=document.querySelector('.start2');
    let start1=document.querySelectorAll('.zipin_box');
    let kuan1=parseInt(getComputedStyle(mxbig1,null).width);
    let mxz1=document.querySelector('.zipin_l');
    let mxy1=document.querySelector('.zipin_r');

    mxz1.onclick=function(){
        y1=x1-1;
        if(y1<0){
            y1=start1.length-1;
        }
        start1[y1].style.left="100%";
        animate(start1[x1],{left:-kuan});
        animate(start1[y1],{left:0});
        x1=y1;
    }
    mxy1.onclick=function(){
        y1=x1+1;
        if(y1>=start1.length){
            y1=0;
        }
        start1[y1].style.left="-100%";
        animate(start1[x1],{left:kuan});
        animate(start1[y1],{left:0});
        x1=y1;
    }
// 视频
    let x2=0;
    let y2=0;
    let mxbig2=document.querySelector('.start3');
    let start2=document.querySelectorAll('.shipin_top_middle_box');
    let kuan2=parseInt(getComputedStyle(mxbig2,null).width);
    let mxz2=document.querySelector('.shipin_l');
    let mxy2=document.querySelector('.shipin_r');
    mxz2.onclick=function(){
        y2=x2-1;
        if(y2<0){
            y2=start2.length-1;
        }
        start2[y2].style.left="100%";
        animate(start2[x2],{left:-kuan});
        animate(start2[y2],{left:0});
        x2=y2;
    }
    mxy2.onclick=function(){
        y2=x2+1;
        if(y2>=start2.length){
            y2=0;
        }
        start2[y].style.left="-100%";
        animate(start2[x2],{left:kuan});
        animate(start2[y2],{left:0});
        x2=y2;
    }  

}