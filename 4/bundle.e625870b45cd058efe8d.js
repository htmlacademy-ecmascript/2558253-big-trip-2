(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",y={};y[b]=h;var $=function(e){return e instanceof D},g=function e(t,n,i){var s;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!i&&s&&(b=s),s||!i&&b},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},S=_;S.l=g,S.i=$,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e)}var v=h.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!S.u(t)||t,p=S.p(e),f=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},m=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,v=this.$M,_=this.$D,b="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case o:var y=this.$locale().weekStart||0,$=(h<y?h+7:h)-y;return f(c?_-$:_+(6-$),v);case a:case d:return m(b+"Hours",0);case r:return m(b+"Minutes",1);case s:return m(b+"Seconds",2);case i:return m(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=S.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],m=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](m),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[S.p(e)]()},v.add=function(n,c){var d,p=this;n=Number(n);var f=S.p(c),m=function(e){var t=M(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return m(1);if(f===o)return m(7);var h=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*h;return S.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return S.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:S.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(e,t){return t||h[e]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var f,m=S.p(d),h=M(n),v=(h.utcOffset()-this.utcOffset())*e,_=this-h,b=S.m(this,h);return b=(f={},f[u]=b/12,f[l]=b,f[c]=b/3,f[o]=(_-v)/6048e5,f[a]=(_-v)/864e5,f[r]=_/t,f[s]=_/e,f[i]=_/1e3,f)[m]||_,p?b:S.a(b)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=g(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},h}(),w=D.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=g,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=y[b],M.Ls=y,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca1",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"http://picsum.photos/300/200?r=0.0762563005163317",description:"Chamonix parliament building"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",name:"Amsterdam",pictures:[]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca3",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Madrid",pictures:[{src:"https://loremflickr.com/248/152?random=55",description:"Nunc fermentum tortor ac porta dapibus."},{src:"https://loremflickr.com/248/152?random=56",description:"Nunc fermentum tortor ac porta dapibus."}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca4",description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",name:"New-York",pictures:[{src:"https://loremflickr.com/248/152?random=66",description:"Phasellus eros mauris."},{src:"https://loremflickr.com/248/152?random=67",description:"Phasellus eros mauris."},{src:"https://loremflickr.com/248/152?random=68",description:"Phasellus eros mauris."},{src:"https://loremflickr.com/248/152?random=69",description:"Phasellus eros mauris."}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca5",description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Tokyo",pictures:[{src:"https://loremflickr.com/248/152?random=75",description:"Sed blandit, eros vel aliquam faucibus."},{src:"https://loremflickr.com/248/152?random=76",description:"Sed blandit, eros vel aliquam faucibus."},{src:"https://loremflickr.com/248/152?random=77",description:"Sed blandit, eros vel aliquam faucibus."}]}],t=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Play my music",price:100},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Fast and furios ride",price:1e3}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Window seat",price:20}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa35",title:"Meal plan",price:60},{id:"b4c3e4e6-9053-42ce-b747-e281314baa36",title:"Wake me up",price:10}]},{type:"sightseeing",offers:[]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa37",title:"Window seat",price:30},{id:"b4c3e4e6-9053-42ce-b747-e281314baa38",title:"Meal plan",price:40},{id:"b4c3e4e6-9053-42ce-b747-e281314baa39",title:"Extra baggage",price:55},{id:"b4c3e4e6-9053-42ce-b747-e281314baa40",title:"Upgrade to business class",price:300}]},{type:"restaurant",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Michelin Star chef",price:1200},{id:"b4c3e4e6-9053-42ce-b747-e281314baa42",title:"Live music",price:150}]}],i=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808a",basePrice:1500,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-21T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edca1",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa37","b4c3e4e6-9053-42ce-b747-e281314baa38","b4c3e4e6-9053-42ce-b747-e281314baa39","b4c3e4e6-9053-42ce-b747-e281314baa40"],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808b",basePrice:1e3,dateFrom:"2019-07-22T22:55:56.845Z",dateTo:"2019-07-25T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edca2",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa35","b4c3e4e6-9053-42ce-b747-e281314baa36"],type:"train"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:3400,dateFrom:"2019-07-26T22:55:56.845Z",dateTo:"2019-07-30T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edca3",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31","b4c3e4e6-9053-42ce-b747-e281314baa32","b4c3e4e6-9053-42ce-b747-e281314baa33"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808d",basePrice:900,dateFrom:"2019-07-26T22:55:56.845Z",dateTo:"2019-07-30T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edca4",isFavorite:!1,offers:[],type:"sightseeing"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808e",basePrice:5800,dateFrom:"2019-08-01T22:55:56.845Z",dateTo:"2019-09-14T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edca5",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa41","b4c3e4e6-9053-42ce-b747-e281314baa42"],type:"restaurant"}];function s(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function r(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}const a=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class o{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}class l{getTemplate(){return'\n    <ul class="trip-events__list"></ul>\n    '}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}var c=n(484),u=n.n(c);function d(e,t){return e?u()(e).format(t):""}class p{constructor(e,t,n){this.point=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{basePrice:i,dateFrom:s,dateTo:r,type:o}=e,l=n.find((t=>t.type===e.type)).offers,c=l.filter((t=>e.offers.includes(t.id))),u=t.find((t=>t.id===e.destination)),{name:p,description:f,pictures:m}=u||{},h=e.id||0;return`<form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-${h}">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${o}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${h}" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n    ${a.map((e=>{return`<div class="event__type-item">\n                          <input id="event-type-${e}-${h}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${e===o?"checked":""}>\n                          <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-${h}">${t=e,t?t.charAt(0).toUpperCase()+t.slice(1):""}</label>\n                        </div>`;var t})).join("")}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-${h}">\n                      ${o}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-${h}" type="text" name="event-destination" value="${p||""}" list="destination-list-${h}">\n                    <datalist id="destination-list-${h}">\n                      ${t.map((e=>`<option value="${e.name}"></option>`)).join("")}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-${h}">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-${h}" type="text" name="event-start-time" value="${d(s,"YY/MM/DD HH:mm")}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-${h}">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-${h}" type="text" name="event-end-time" value="${d(r,"YY/MM/DD HH:mm")}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-${h}">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-${h}" type="text" name="event-price" value="${i}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">${e.id?"Delete":"Cancel"}</button>\n                  ${e.id?'<button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>':""}\n                </header>\n                <section class="event__details">\n                ${l.length?`<section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                    ${l.map((e=>`<div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.title}-${h}" type="checkbox" name="event-offer-${e.title}" ${c.map((e=>e.id)).includes(e.id)?"checked":""}>\n                        <label class="event__offer-label" for="event-offer-${e.title}-${h}">\n                          <span class="event__offer-title">${e.title}</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">${e.price}</span>\n                        </label>\n                      </div>`)).join("")}\n                    </div>\n                  </section>`:""}\n    ${u?`<section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${f}</p>\n                    ${m.length?`<div class="event__photos-container">\n                      <div class="event__photos-tape">\n                      ${m.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`))}\n                      </div>\n                    </div>`:""}\n                  </section>`:""}\n                </section>\n              </form>`}(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{constructor(e,t,n){this.point=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:a,type:o}=e,l=n.find((t=>t.type===e.type)).offers.filter((t=>e.offers.includes(t.id))),c=t.find((t=>t.id===e.destination));return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime=${d(s,"YYYY-MM-DD")}>${d(s,"MMM-D")}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${o.toLowerCase()}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${o} ${c.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime=${d(s,"YYYY-MM-DDTHH:mm")}>${d(s,"HH:mm")}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime=${d(s,"YYYY-MM-DDTHH:mm")}>${d(s,"HH:mm")}</time>\n                  </p>\n                  <p class="event__duration">${function(e,t){const n=u()(e),i=u()(t),s=i.diff(n,"minute"),r=i.diff(n,"hour"),a=i.diff(n,"day");if(s<60)return`${s}M`;if(a<1){const e=s%60;return`${String(r%24).padStart(2,"0")}H ${String(e).padStart(2,"0")}M`.trim()}{const e=r%24,t=s%60;return`${String(a).padStart(2,"0")}D ${String(e).padStart(2,"0")}H ${String(t).padStart(2,"0")}M`.trim()}}(s,r)}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${i}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                ${l.map((e=>function({title:e,price:t}){return`<li class="event__offer">\n       <span class="event__offer-title">${e}</span>\n       &plus;&euro;&nbsp;\n       <span class="event__offer-price">${t}</span>\n    </li>`}(e))).join("")}\n                </ul>\n                <button class="event__favorite-btn ${a?"event__favorite-btn--active":""} " type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}class m{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}getElement(){return this.element||(this.element=s(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=document.querySelector(".page-header"),_=v.querySelector(".trip-main"),b=v.querySelector(".trip-controls__filters"),y=document.querySelector(".page-main").querySelector(".trip-events"),$=new class{filterComponent=new m;constructor({filterContainer:e}){this.filterContainer=e}init(){r(this.filterComponent,this.filterContainer)}}({filterContainer:b}),g=new class{infoComponent=new h;constructor({infoContainer:e}){this.infoContainer=e}init(){r(this.infoComponent,this.infoContainer,"afterbegin")}}({infoContainer:_}),M=new class{_points=[];_destinations=[];_offers=[];init(){this._points=structuredClone(i),this._destinations=structuredClone(e),this._offers=structuredClone(t)}get points(){return this._points}get destinations(){return this._destinations}get offers(){return this._offers}};M.init();const S=new class{sortComponent=new o;eventsListComponent=new l;constructor({boardContainer:e,pointModel:t}){this.boardContainer=e,this.pointModel=t}init(){const e=this.pointModel.points,t=this.pointModel.destinations,n=this.pointModel.offers;r(this.sortComponent,this.boardContainer),r(this.eventsListComponent,this.boardContainer),r(new p({basePrice:0,dateFrom:(new Date).toISOString(),dateTo:(new Date).toISOString(),destination:0,isFavorite:!1,offers:[],type:a[0]},t,n),this.eventsListComponent.getElement()),r(new p(e[1],t,n),this.eventsListComponent.getElement());for(const i of e)r(new f(i,t,n),this.eventsListComponent.getElement())}}({boardContainer:y,pointModel:M});S.init(),$.init(),g.init()})()})();
//# sourceMappingURL=bundle.e625870b45cd058efe8d.js.map