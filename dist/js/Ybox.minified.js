function YBox(){let e=this;this.init=function(){let t=document.querySelectorAll(".openPopup");for(let o=0;o<t.length;o++)t[o].addEventListener("click",function(t){t.preventDefault(),e.openPopup("",this)});document.body.addEventListener("keyup",function(t){e.onKeyup(t)})},this.onKeyup=function(t){let o=document.querySelector(".myPopImg");if(!o)return;let n=o.getAttribute("src"),r=document.querySelector(`.openPopup[href="${n}"`);39===t.keyCode&&e.myPrevPopup(r),37===t.keyCode&&e.myNextPopup(r),27===t.keyCode&&e.closePopup()},this.onPopupOpen=function(e){return e&&"function"==typeof e&&e()},this.onPopupClose=function(e){return e&&"function"==typeof e&&e()},this.onNextItemClick=function(e){return e&&"function"==typeof e&&e()},this.onPrevItemClick=function(e){return e&&"function"==typeof e&&e()},this.openPopup=function(t,o){let n="",r=!0,i="",u="";void 0===o&&(r=!1),r&&(n=o.getAttribute("data-popup-class"),i=o.getAttribute("href")),u=document.createRange().createContextualFragment(`<div class="blackOpacityPOP">\n                    <div class="myPopup ${n}">\n                        <div class="insertPopAjaxHere"></div>\n                        <button type="button" class="closePOP" title="Close"></button>\n                    </div>\n                </div>`),document.addEventListener("click",function(t){"blackOpacityPOP active"!=t.target.className&&"closePOP"!=t.target.className||e.closePopup()});let l=document.querySelector(".myPopupPlaceHolder"),c=document.querySelector(".insertPopAjaxHere");if(document.querySelector(".myPopup"))if(document.querySelector(".myPopup.myPopImgWrap")){if(l)l.parentNode.insertBefore(c.innerHTML,l);else{(l=document.createElement("div")).classList.add("myPopupPlaceHolder");let e=document.querySelector(".myPopImg");l.style.width=e?e.width:0,l.style.height=e?e.height:0}c.appendChild(l),e.insertPopHtml(o,r,i,t,function(){e.onPopupOpen()})}else e.helpers.animate(c,"opacity",0,.2,function(){l&&l.parentNode.removeChild(l),c.innerHTML="",e.insertPopHtml(o,r,i,t,function(){e.onPopupOpen()}),e.helpers.animate(c,"opacity",1,.2)});else document.body.appendChild(u),e.insertPopHtml(o,r,i,t,function(){document.querySelector(".blackOpacityPOP").classList.add("active"),e.onPopupOpen()})},this.insertPopHtml=function(t,o,n,r,i){let u=document.querySelector(".myPopup"),l=document.querySelector(".myPopupPlaceHolder"),c=document.querySelector(".insertPopAjaxHere");if(o)if(t.classList.contains("openPopup_iframe")){if(u.classList.add("myIframePopup"),n.toLowerCase().indexOf("youtube")>-1||n.toLowerCase().indexOf("youtu.be")>-1){let e=n.replace(/^[^v]+v.(.{11}).*/,"$1").replace("https://youtu.be/","").replace(/.*youtube.com\/embed\//,"");n=`https://www.youtube.com/embed/${e}?wmode=transparent&rel=0&autoplay=1`}c.innerHTML=`<iframe src="${n}"  frameborder="0" wmode="Opaque" allowfullscreen class="iframePOP"></iframe>`}else if(t.classList.contains("openPopup_ajax")){let e=new XMLHttpRequest;e.onload=function(){e.status>=200&&e.status<300?(console.log("success!",e),c.innerHTML=e.response):(c.innerHTML="Oops - something went wrong - it's probably your fault",console.log("The request failed!"))},e.onerror=function(e){console.warn(e),c.innerHTML="Oops - something went wrong :(  <br> it's probably your fault"},e.open("GET",n),e.send()}else if(-1==n.indexOf("#")){u.classList.add("myPopImgWrap"),l&&l.parentNode.removeChild(l),document.querySelector(".myPopImg")?c.appendChild(document.createRange().createContextualFragment('<div style="text-align:center;position:absolute;right:0;left:0;top:0;bottom:0;height:100%;width:100%;"><div class="loader07"></div></div>')):c.appendChild(document.createRange().createContextualFragment('<div style="text-align:center;"><div class="loader07"></div></div>'));let o=new Image;o.src=n,o.className="myPopImg",o.onload=function(){let o=`<div class="myPopImgZoom"><img src="${n}" alt="" class="myPopImg" /></div>`,r=t.getAttribute("data-group");r&&document.querySelector(`.openPopup[data-group="${r}"]`)&&(o=`<button type="button" class="myPopNextImg" title="Next"></button>${o}<button type="button" class="myPopPrevImg" title="Prev"></button>`),c.innerHTML=o,window.screen.width<=767&&zoom({zoom:"myPopImgZoom"}),document.querySelector(".myPopNextImg").addEventListener("click",function(){e.myNextPopup(t)}),document.querySelector(".myPopPrevImg").addEventListener("click",function(){e.myPrevPopup(t)})}}else{let t=document.querySelector(n),o=document.createRange().createContextualFragment('<div class="myPopupPlaceHolder"></div>');t.appendChild(o);let r=document.createElement("div");r.innerHTML=t.innerHTML,c.appendChild(r),e.init()}else c.innerHTML=r;i&&i()},this.myNextPopup=function(t){let o,n=t.getAttribute("data-group"),r=!1,i=document.querySelectorAll(`.openPopup[data-group=${n}]`);for(let e=0;e<i.length;e++){let n=i[e];r||n.getAttribute("href")==t.getAttribute("href")&&(r=!0,o=e+1<i.length?i[e+1]:i[0])}o&&(o.click(),e.onNextItemClick())},this.myPrevPopup=function(t){let o,n=t.getAttribute("data-group"),r=!1,i=document.querySelectorAll(`.openPopup[data-group=${n}]`);for(let e=0;e<i.length;e++){let n=i[e];r||n.getAttribute("href")==t.getAttribute("href")&&(r=!0,o=e-1>=0?i[0]:i[i.length-1])}o&&(o.click(),e.onPrevItemClick())},this.closePopup=function(){let t=document.querySelector(".blackOpacityPOP"),o=document.querySelector(".insertPopAjaxHere"),n=document.querySelector(".myPopupPlaceHolder");t.classList.remove("active"),setTimeout(function(){n&&n.parentNode&&(n.appendChild(document.createRange().createContextualFragment(o.innerHTML)),n.parentNode.removeChild(n)),t&&t.parentNode&&t.parentNode.removeChild(t),e.onPopupClose(),document.body.removeEventListener("keyup",function(t){e.onKeyup(t)})},600)},this.helpers={animate:function(e,t,o,n,r){e.style.transition=`all ${n}s`,e.style[t]=`${o}`,setTimeout(()=>{e.style.transition="initial",r&&r()},1e3*n)}}}