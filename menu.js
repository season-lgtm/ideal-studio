// mobile nav toggle (shared)
document.querySelectorAll('.menutoggle').forEach(function(b){
  b.onclick=function(){
    var n=document.querySelector('.navlinks');
    var open=getComputedStyle(n).display!=='none' && n.style.display==='flex';
    if(open){ n.style.display='none'; return; }
    n.style.display='flex';n.style.position='absolute';n.style.top='70px';n.style.right='22px';
    n.style.flexDirection='column';n.style.alignItems='flex-start';n.style.background='#fff';
    n.style.padding='18px 22px';n.style.borderRadius='14px';n.style.gap='14px';
    n.style.boxShadow='0 12px 30px rgba(0,0,0,.12)';
  };
});
