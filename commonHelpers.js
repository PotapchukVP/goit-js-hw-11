import{i as c,S as p}from"./assets/vendor-18365dff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="/goit-js-hw-11/assets/bi_x-octagon-2-17638c89.svg",a=document.querySelector(".gallery-wrapper"),d=document.querySelector(".search-button"),u=document.querySelector(".loader-position");c.settings({timeout:5e3,theme:"light",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 250, 1)",maxWidth:"392px",messageSize:"322px",position:"topRight",color:"#EF4040",progressBar:!0,progressBarColor:"#B51B1B",icon:"",iconText:"",iconColor:"",iconUrl:f,image:"",imageWidth:50,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!0,displayMode:0,target:"",targetFirst:!0,animateInside:!1,progressBarEasing:"linear",overlayClose:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}});const g="41858556-aa96e57fcb7c92b306b25a0e4",m="https://pixabay.com/api/";let i={key:g,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9};const y=new p(".gallery-item a",{close:!0,captions:!0,captionsData:"alt",captionDelay:250});d.addEventListener("click",n=>{n.preventDefault(),i.q=document.querySelector("#input-field").value.trim(),u.style.display="flex";const t=new URLSearchParams(i).toString(),o=`${m}?${t}`;h(o).then(l=>b(l)).catch(l=>console.error(l))});function h(n){return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function b(n){u.style.display="none";let t="";if(n.totalHits===0)return a.innerHTML=t,c.show();n.hits.map(o=>{t+=`<li class="gallery-item"> 
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}">
      </a>
      <div class="image-info">
  <label class="label-text">Likes
    <p>${o.likes}</p>
  </label>
  <label class="label-text">Views
    <p>${o.views}</p>
  </label>
  <label class="label-text">Comments
    <p>${o.comments}</p>
  </label>
  <label class="label-text">Downloads
    <p>${o.downloads}</p>
  </label>
</div>
    </li>`}),a.innerHTML=t,y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
