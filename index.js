import{a as S,S as q,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const E="49718330-58801d0a59045377f458b76fd",R="https://pixabay.com/api/",P=15;async function f(s,e=1){const o={key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:e};return(await S.get(R,{params:o})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),$=new q(".gallery a");function h(s){const e=s.map(o=>`
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
`).join("");m.insertAdjacentHTML("beforeend",e),$.refresh()}function M(){m.innerHTML=""}function g(){p.classList.add("visible")}function b(){p.classList.remove("visible")}function L(){y.classList.add("visible")}function v(){y.classList.remove("visible")}const w=document.querySelector(".form"),u=w.elements["search-text"],A=document.querySelector(".load-more");let a="",i=1,d=0;w.addEventListener("submit",async s=>{if(s.preventDefault(),a=u.value.trim(),i=1,!a){n.warning({message:"Please enter a search term",position:"topRight"});return}M(),v(),g();try{const e=await f(a,i);if(d=e.totalHits,e.hits.length===0){n.info({message:"No images found. Try another keyword.",position:"topRight"});return}h(e.hits),d>i*15&&L()}catch{n.error({message:"Error fetching images.",position:"topRight"})}finally{b(),u.value=""}});A.addEventListener("click",async()=>{i++,g(),v();try{const s=await f(a,i);h(s.hits);const e=document.querySelectorAll(".gallery-item"),o=e[e.length-1];o&&o.scrollIntoView({behavior:"smooth"}),i*15>=d?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch{n.error({message:"Error loading more images.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
