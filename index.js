import{a as d,S as p,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="49718330-58801d0a59045377f458b76fd",h="https://pixabay.com/api/";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};try{const e=await d.get(h,{params:o});if(e.data&&e.data.hits)return e.data;throw new Error("No data returned from API")}catch(e){throw console.error("Error fetching images:",e),e}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a");function b(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){l.innerHTML=""}function w(){u.classList.add("visible")}function v(){u.classList.remove("visible")}const f=document.querySelector(".form"),c=f.elements["search-text"];f.addEventListener("submit",s=>{s.preventDefault();const o=c.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}w(),L(),y(o).then(e=>{const a=e.hits;if(a.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(a)}).catch(e=>{i.error({message:"Network error. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{v(),c.value=""})});
//# sourceMappingURL=index.js.map
