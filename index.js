import{S as u,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const f="https://pixabay.com/api/",m="46290699-f987c2a4595ee60b837e9e9f4";function y(t){const l=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${l.toString()}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g(t){const l=document.querySelector(".gallery"),e=t.hits.map(o=>`<li class="gallery-query">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img class="gallery-img"
                    src="${o.webformatURL}"
                    data-source="${o.largeImageURL}"
                    alt="${o.tags}"
                    width="360"  onclick="return false">
                <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${o.likes}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${o.views}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${o.comments}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${o.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",e)}function p(){document.querySelector(".loader").classList.remove("visually-hidden")}function h(){document.querySelector(".loader").classList.add("visually-hidden")}const i=document.querySelector(".search-form"),L=document.querySelector(".gallery");let n=null;function c(t){d.error({title:"",message:t,position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}function w(t){t.hits.forEach(l=>{const e=new Image;e.src=l.largeImageURL})}i.addEventListener("submit",t=>{t.preventDefault();const l=i.elements.searchQuery.value.trim().toLowerCase();if(l===""){c("Sorry, there are no images matching your search query. Please try again!");return}L.innerHTML="",p(),y(l).then(e=>{if(e.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}g(e),w(e),n?n.refresh():n=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(e=>{console.error(e),c("An error occurred while fetching images. Please try again.")}).finally(()=>{h(),i.reset()})});
//# sourceMappingURL=index.js.map
