import{a as R,S,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="49718330-58801d0a59045377f458b76fd",E="https://pixabay.com/api/",B=15;async function f(s,t=1){const o={key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:B,page:t};return(await R.get(E,{params:o})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),P=new S(".gallery a");function y(s){const t=s.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${o.likes}</p>
        <p><b>Views:</b> ${o.views}</p>
        <p><b>Comments:</b> ${o.comments}</p>
        <p><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){p.innerHTML=""}function g(){m.classList.add("visible")}function b(){m.classList.remove("visible")}function L(){h.classList.add("visible")}function v(){h.classList.remove("visible")}const w=document.querySelector(".form"),u=w.elements["search-text"],M=document.querySelector(".load-more");let a="",i=1,d=0;w.addEventListener("submit",async s=>{if(s.preventDefault(),a=u.value.trim(),i=1,!a){n.warning({message:"Please enter a search term",position:"topRight"});return}$(),v(),g();try{const t=await f(a,i);if(d=t.totalHits,t.hits.length===0){n.info({message:"No images found. Try another keyword.",position:"topRight"});return}y(t.hits),d>i*15&&L()}catch{n.error({message:"Error fetching images.",position:"topRight"})}finally{b(),u.value=""}});M.addEventListener("click",async()=>{i++,g(),v();try{const s=await f(a,i);y(s.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),i*15>=d?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch{n.error({message:"Error loading more images.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
