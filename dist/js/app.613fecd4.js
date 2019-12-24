(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/movies-app/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1589:function(t,e,a){},"2a17":function(t,e,a){},4253:function(t,e,a){},"458f":function(t,e,a){},"51cf":function(t,e,a){t.exports=a.p+"img/powered-by-the-movie-DB-green.ec4595d1.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("main",[a("router-view")],1),a("Footer")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header container-fluid",attrs:{id:"header"}},[s("b-navbar",{staticClass:"navigation",attrs:{toggleable:"sm",type:"dark",sticky:!0}},[s("b-navbar-brand",{attrs:{href:"https://www.themoviedb.org/",target:"_blank"}},[s("img",{staticClass:"logo",attrs:{src:a("51cf"),alt:"logo"}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"navigation__search ml-auto justify-content-end"},[s("vue-bootstrap-typeahead",{staticClass:"my-2 my-sm-0 w-100 navigation__typeahead",attrs:{data:t.movies,serializer:function(t){return t.title},placeholder:"Search for a movie...",maxMatches:20},on:{hit:t.chooseMovie},scopedSlots:t._u([{key:"suggestion",fn:function(e){var a=e.data,i=e.htmlText;return[s("div",{staticClass:"d-flex justify-content-start align-items-center text-left"},[s("img",{staticStyle:{width:"40px",height:"auto"},attrs:{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+a.poster_path}}),s("span",{staticClass:"ml-3",domProps:{innerHTML:t._s(i)}}),s("strong",{staticClass:"ml-auto",domProps:{innerHTML:t._s(""+a.release_date.split("-")[0])}})])]}}]),model:{value:t.query,callback:function(e){t.query=e},expression:"query"}},[s("template",{slot:"append"},[s("button",{staticClass:"navigation__typeahead-btn pr-1 pl-3 py-0",attrs:{disabled:!t.movies.length},on:{click:function(e){return t.chooseMovie(t.movies[0])}}},[s("md-search-icon",{staticClass:"md-search-icon",attrs:{w:"40px",h:"40px",animate:"shake"}})],1)])],2)],1)],1)],1)],1)},o=[],c=(a("99af"),a("bc3a")),l=a.n(c);l.a.defaults.baseURL="https://api.themoviedb.org/3/";var u="api_key=04322954778d78bd6fc31bdc578dc2b0",d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l.a.get("movie/popular?".concat(u,"&language=en-US&page=").concat(t))},v=function(t){return l.a.get("movie/".concat(t,"?").concat(u))},m=function(t){return l.a.get("movie/".concat(t,"/similar?").concat(u,"&language=en-US"))},p=function(t){return l.a.get("search/movie?".concat(u,"&language=en-US&query=").concat(t,"&page=1"))},f=a("d45f"),h=a("2ef0"),g=a.n(h),_={name:"Header",components:{VueBootstrapTypeahead:f["a"]},data:function(){return{query:"",movies:[]}},methods:{searchMovies:function(t){var e=this;p(t).then((function(t){e.movies=t.data.results}))},chooseMovie:function(t){this.query="",this.movies=[],t.id!==this.$route.params.id&&this.$router.push("/movies/".concat(t.id))}},watch:{query:g.a.debounce((function(t){this.searchMovies(t)}),1e3)}},b=_,w=(a("eadf"),a("2877")),x=Object(w["a"])(b,r,o,!1,null,null,null),y=x.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row row-cols-1 row-cols-sm-2 footer"},[t._m(0),a("div",{staticClass:"col-12 footer__logo-wrapper"},[a("a",{attrs:{href:"https://github.com/Andreas-Just",target:"_blank"}},[a("logo-github-icon",{staticClass:"footer__logo-github",attrs:{w:"40px",h:"40px",animate:"shake"}})],1),a("a",{attrs:{href:"https://www.linkedin.com/in/andreas-just/",target:"_blank"}},[a("logo-linkedin-icon",{staticClass:"footer__logo-linkedin",attrs:{w:"40px",h:"40px",animate:"shake"}})],1),a("a",{attrs:{href:"https://join.skype.com/invite/ndowTtpYxB1B",target:"_blank"}},[a("logo-skype-icon",{staticClass:"footer__logo-skype",attrs:{w:"40px",h:"40px",animate:"shake"}})],1)])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("p",[t._v("© Andreas Just. All Rights Reserved.")]),a("p",[t._v("Film data provided by TMDb")])])}],k={name:"Footer"},j=k,S=(a("a194"),Object(w["a"])(j,C,M,!1,null,null,null)),P=S.exports,O={name:"App",components:{Header:y,Footer:P}},D=O,$=(a("5c0b"),Object(w["a"])(D,i,n,!1,null,null,null)),T=$.exports,E=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.popularMovies.length?a("div",{staticClass:"col-12 movies"},[a("div",{staticClass:"row justify-content-between align-items-center mt-3"},[t._m(0),a("div",{staticClass:"col-sm-7 col-lg-6 d-flex align-items-center pl-0 pr-2"},[a("b-form-select",{attrs:{options:t.options,state:!0},on:{change:t.sortBy},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("p",{staticClass:"mb-0 movies__sort"},[t._v("order")]),a("button",{staticClass:"movies__sort-btn p-0",attrs:{disabled:!t.selected},on:{click:t.sortOrder}},[t.flag?a("md-arrow-dropdown-circle-icon",{staticClass:"md-arrow-icon",attrs:{w:"40px",h:"40px",animate:"beat"}}):a("md-arrow-dropup-circle-icon",{staticClass:"md-arrow-icon",attrs:{w:"40px",h:"40px",animate:"beat"}})],1)],1)]),a("div",{staticClass:"row justify-content-around"},t._l(t.popularMovies,(function(e){return a("Movie",{key:e.id,style:"max-width:"+t.width.max+"rem; min-width:"+t.width.min+"rem",attrs:{movie:e,width:t.width}})})),1),a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-12"},[a("b-pagination",{staticClass:"movies__pagination mx-lg-5 px-lg-5",attrs:{align:"fill",variant:"dark","total-rows":t.totalPages,"per-page":t.perPage,size:"sm"},on:{change:t.onPageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])]):a("div",{staticClass:"d-flex justify-content-center align-items-center flex-grow-1"},[a("Spinner")],1)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-5 col-lg-6 no-gutters px-2"},[a("h2",{staticClass:"movies__title m-sm-0 text-danger"},[t._v("Popular Movies")])])}],F=(a("4e82"),a("53ca")),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col movie"},[a("b-card",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hide,expression:"hide"}],staticClass:"my-3 card",attrs:{"no-body":"",id:t.movie.id,"img-src":"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+t.movie.poster_path,"img-alt":t.movie.title,"img-center":"",tag:"article"},on:{click:t.toggle}},[a("b-button",{staticClass:"movie__btn",style:t.width.max>10?"font-size: 14px":"font-size: 10px",attrs:{to:"/movies/"+t.movie.id,squared:"",block:""}},[t._v(" View more ")])],1),a("b-popover",{attrs:{target:""+t.movie.id,triggers:"click",placement:"left",offset:"15",show:t.opened},on:{"update:show":function(e){t.opened=e}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.movie.title)+" "),a("br"),a("span",[t._v(t._s(t.movie.release_date.split("-")[0]))])]},proxy:!0}])},[t._v(" Movie rating "),t.rating?a("span",{staticClass:"movie__stars-wrapper"},[t._l(t.countStars(),(function(t,e){return a("md-star-icon",{key:e,staticClass:"movie__stars-icon",attrs:{w:"16px",h:"16px"}})})),t._l(5-t.countStars(),(function(e,s){return a("md-star-outline-icon",{key:s+t.countStars(),staticClass:"movie__stars-icon",attrs:{w:"16px",h:"16px"}})}))],2):t.rating?t._e():a("span",{staticClass:"movie__stars-wrapper"},t._l(5,(function(t,e){return a("md-star-outline-icon",{key:e,staticClass:"movie__stars-icon",attrs:{w:"16px",h:"16px"}})})),1),a("b",[t._v(t._s(t.rating))])])],1)},z=[],A=a("e67d"),L=a.n(A),U={name:"Movie",props:{movie:{type:Object,required:!0},width:{type:Object,required:!0}},data:function(){return{opened:!1,rating:this.movie.vote_average}},methods:{toggle:function(){this.opened=!0},hide:function(){this.opened=!1},countStars:function(){return Math.floor(this.rating/2)}},mounted:function(){this.popupItem=this.$el},directives:{ClickOutside:L.a}},R=U,H=(a("a6eb"),Object(w["a"])(R,I,z,!1,null,null,null)),W=H.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animation animation-5"},[a("h3",[t._v("Loading...")]),a("div",{staticClass:"lds-ellipsis"},[a("div",{staticClass:"child"}),a("div",{staticClass:"child"}),a("div",{staticClass:"child"}),a("div",{staticClass:"child"})])])}],N={name:"Spinner"},G=N,Y=(a("d044"),Object(w["a"])(G,J,V,!1,null,"6065e0f6",null)),K=Y.exports,Q={name:"Movies",components:{Movie:W,Spinner:K},data:function(){var t=this;return{popularMovies:[],currentPage:1,perPage:20,totalPages:null,width:{max:12,min:11},selected:null,options:[{value:null,text:"Please select a sort by..."},{value:"popularity",text:"Popularity"},{value:"title",text:"Title"},{value:"release_date",text:"Date"},{value:"vote_average",text:"Rating"},{value:"vote_count",text:"Votes"}],flag:!0,sing:1,sortUp:{date:function(e,a){return Date.parse(e[t.selected])>Date.parse(a[t.selected])?1:-1},number:function(e,a){return e[t.selected]>a[t.selected]?1:-1},string:function(e,a){return e[t.selected].localeCompare(a[t.selected])}},sortDown:{date:function(e,a){return Date.parse(e[t.selected])<Date.parse(a[t.selected])?1:-1},number:function(e,a){return e[t.selected]<a[t.selected]?1:-1},string:function(e,a){return a[t.selected].localeCompare(e[t.selected])}}}},created:function(){this.getMoviesByPopular()},methods:{getMoviesByPopular:function(){var t=this;d(this.currentPage).then((function(e){var a=e.data;t.popularMovies=a.results,t.currentPage=a.page,t.totalPages=a.total_pages}))},onPageChange:function(t){this.currentPage=t,this.getMoviesByPopular(),this.selected=null,this.flag=!0},sortBy:function(){var t;t="release_date"===this.selected?"date":Object(F["a"])(this.popularMovies[0][this.selected]),this.flag?this.popularMovies.sort(this.sortDown[t]):this.popularMovies.sort(this.sortUp[t])},sortOrder:function(){this.flag=!this.flag,this.sortBy()}}},X=Q,Z=(a("668d"),Object(w["a"])(X,q,B,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid movie-item d-flex flex-grow-1"},[t.isDataLoaded?a("div",{staticClass:"d-flex flex-column flex-grow-1"},[a("div",{staticClass:"row"},[t.currentMovie.title?a("b-breadcrumb",{staticClass:"flex-grow-1 movie-item__breadcrumb",attrs:{items:[{text:"Movies",to:"/movies"},{text:t.currentMovie.title,active:!0}]}}):a("b-breadcrumb",{staticClass:"flex-grow-1 movie-item__breadcrumb",attrs:{items:[{text:"Movies",to:"/movies"},{text:t.currentMovie.original_title,active:!0}]}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 d-flex flex-column justify-content-start align-items-center align-items-sm-end"},[a("b-img",{staticClass:"movie-item__poster",attrs:{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+t.currentMovie.poster_path,alt:"Poster",fluid:""}}),a("div",{staticClass:"row no-gutters flex-column mt-4"},[a("div",{staticClass:"col"},[t.currentMovie.vote_average?a("span",{staticClass:"movie-item__stars-wrapper"},[t.currentMovie.vote_average===t.countStars?a("span",{staticClass:"movie-item__stars-wrapper"},[t._l(t.countStars,(function(t,e){return a("md-star-icon",{key:e,staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}})})),t._l(10-t.countStars,(function(e,s){return a("md-star-outline-icon",{key:s+t.countStars,staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}})}))],2):a("span",{staticClass:"movie-item__stars-wrapper"},[t._l(t.countStars,(function(t,e){return a("md-star-icon",{key:e,staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}})})),a("md-star-half-icon",{staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}}),t._l(9-t.countStars,(function(e,s){return a("md-star-outline-icon",{key:s+t.countStars,staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}})}))],2)]):a("span",{staticClass:"movie-item__stars-wrapper"},t._l(10-t.countStars,(function(t,e){return a("md-star-outline-icon",{key:e,staticClass:"movie-item__stars-icon",attrs:{w:"18.5px",h:"18.5px"}})})),1)]),a("div",{staticClass:"movie-item__rating col d-flex justify-content-center justify-content-sm-end",style:t.currentMovie.vote_average<5?"color: red":t.currentMovie.vote_average>7?"color: green":null},[a("h3",[t._v(t._s(t.currentMovie.vote_average))]),a("h6",[t._v(t._s(t.currentMovie.vote_count))])])])],1),a("div",{staticClass:"col d-flex flex-column"},[t.currentMovie.title?a("h2",{staticClass:"text-danger align-self-sm-start movie-item__title"},[t._v(t._s(t.currentMovie.title))]):a("h2",{staticClass:"text-danger align-self-sm-start movie-item__title"},[t._v(t._s(t.currentMovie.original_title))]),a("h3",{staticClass:"align-self-sm-start movie-item__original_title mb-3"},[t._v(t._s(t.currentMovie.original_title))]),a("b-table",{staticClass:"movie-item__table text-left",attrs:{items:t.sortDataTable,"thead-class":"d-none",small:"",hover:""}})],1)]),t.similarMovies.length?a("div",{staticClass:"row justify-content-around mx-0"},t._l(t.countFilms,(function(e){return a("Movie",{key:e.id,style:"max-width:"+t.width.max+"rem; min-width:"+t.width.min+"rem",attrs:{movie:e,width:t.width}})})),1):t._e()]):a("div",{staticClass:"d-flex justify-content-center align-items-center flex-grow-1"},[a("Spinner")],1)])},at=[],st=(a("a15b"),a("d81d"),a("fb6a"),a("b0c0"),a("a9e3"),a("159b"),{name:"MovieItem",props:{pageId:{type:[Number,String],required:!0}},components:{Movie:W,Spinner:K},data:function(){return{currentMovie:null,similarMovies:[],isDataLoaded:!1,width:{max:"8rem",min:"6rem"},breadcrumb:[{text:"Movies",to:"/movies"},{text:"Movie",active:!0}],contentWidth:document.documentElement.clientWidth,countFilms:null}},created:function(){var t=this;this.getAllMovieInfo(),window.onresize=function(){return t.handleResize()}},beforeUpdate:function(){this.getAllMovieInfo(),this.countFilms=this.similarMovies.slice(0,Math.floor(this.contentWidth/120))},destroyed:function(){window.onresize=null},computed:{countStars:function(){return Math.floor(this.currentMovie.vote_average)}},methods:{getAllMovieInfo:function(){var t=this;l.a.all([v(this.pageId),m(this.pageId)]).then(l.a.spread((function(e,a){t.currentMovie=e.data,t.similarMovies=a.data.results,t.isDataLoaded=!0})))},handleResize:function(){this.contentWidth=document.documentElement.clientWidth},showFormattedDate:function(t){var e={day:"2-digit",month:"long",year:"numeric"},a=new Intl.DateTimeFormat("en-GB",e);return a.format(Date.parse(t))},changeTypeData:function(t){var e=[];for(var a in t){var s={icon:"📹"};s.name=a,s.value=t[a],e.push(s)}return e},sortDataTable:function(){var t=this,e=[];return this.changeTypeData(this.currentMovie).forEach((function(a){switch(a.name){case"release_date":a.id=1,a.name="release",a.value=t.showFormattedDate(a.value),e.push(a);break;case"production_countries":a.id=2,a.name="countries",a.value=a.value.map((function(t){return t.name})).join(", "),e.push(a);break;case"genres":a.id=3,a.value=a.value.map((function(t){return t.name})).join(", "),e.push(a);break;case"production_companies":a.id=4,a.name="companies",a.value=a.value.map((function(t){return t.name})).join(", "),e.push(a);break;case"tagline":a.id=5,a.name="slogan",e.push(a);break;case"overview":a.id=6,e.push(a);break;case"status":a.id=7,e.push(a);break;case"budget":a.id=8,a.value+=" $",e.push(a);break;case"revenue":a.id=9,a.value+=" $",e.push(a);break;case"runtime":a.id=10,a.value+=" min",e.push(a);break}})),e.sort((function(t,e){return t.id-e.id})),e}}}),it=st,nt=(a("fe00"),Object(w["a"])(it,et,at,!1,null,null,null)),rt=nt.exports;s["default"].use(E["a"]);var ot=new E["a"]({mode:"history",routes:[{path:"/",redirect:"/movies"},{path:"/movies",name:"Movies",component:tt},{path:"/movies/:id",name:"Movie",props:function(t){return{pageId:t.params.id}},component:rt},{path:"*",redirect:"/movies"}]}),ct=ot,lt=a("5f5b"),ut=a("6218");s["default"].use(ut["a"]),s["default"].use(lt["a"]),new s["default"]({router:ct,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("458f"),i=a.n(s);i.a},6488:function(t,e,a){},"668d":function(t,e,a){"use strict";var s=a("814c"),i=a.n(s);i.a},"814c":function(t,e,a){},a194:function(t,e,a){"use strict";var s=a("2a17"),i=a.n(s);i.a},a6eb:function(t,e,a){"use strict";var s=a("4253"),i=a.n(s);i.a},c65f:function(t,e,a){},d044:function(t,e,a){"use strict";var s=a("6488"),i=a.n(s);i.a},eadf:function(t,e,a){"use strict";var s=a("c65f"),i=a.n(s);i.a},fe00:function(t,e,a){"use strict";var s=a("1589"),i=a.n(s);i.a}});
//# sourceMappingURL=app.613fecd4.js.map