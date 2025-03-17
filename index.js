import{a as d,i as f}from"./assets/vendor-fJOPArbH.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="49383034-f250c1a79c2ac8474ecbb0034",m="https://pixabay.com/api/";async function p(o){const n=`${m}?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await d.get(n);return console.log("Дані з Pixabay:",r.data),r.data.hits}catch(r){throw console.error("Помилка запиту:",r),console.log("Error details:",r.response?r.response.data:r),r}}function h(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}function i(o){f.error({title:"Error",message:o})}function L(o){if(!o.length)return;const n=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${r}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${s}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>`).join("");document.querySelector(".gallery").innerHTML=n,lightbox.refresh()}const c=document.querySelector(".form"),q=c.querySelector('input[name="search-text"]');c.addEventListener("submit",async o=>{o.preventDefault();const n=q.value.trim();if(!n){i("Please enter a search query!");return}h(),g();try{const r=await p(n);r.hits.length===0?i("Sorry, there are no images matching your search query. Please try again!"):L(r.hits)}catch{i("Failed to fetch images. Please try again later.")}finally{b()}});
//# sourceMappingURL=index.js.map
