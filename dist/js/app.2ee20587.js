(function(t){function e(e){for(var s,c,i=e[0],d=e[1],o=e[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var d=a[i];0!==n[d]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"2c7c":function(t,e,a){"use strict";var s=a("de35"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"49ec":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCxwNNxcqF6waAAAEY0lEQVRo3t2Zz28bRRTHP7bbqk4l20lEJVoSJFI1RBX/QZtcojYSokolSOBSpQLSHsoJJA4VKurZB5BQJQg90SBKGqIKhZw4IBUOVXNplLZCmBY75Hea2qlUq9QZDh5P1ruzu97ZRZZ47+D1vH3v+2Z25s28NxCGTrHAAoOhbISgBI8RCDZJNMeB/QjJ+82NxJvje+MODPCQPENGtofJ85AT4RxcQiAo06WReX+CLsoIBIvhxqcoIaY00hYqCATPadFIp6RmkVgYF7Kql/0a6RgCwZcaSb/Sy4aBhzQr0tCcpicxjnJUoxVjTmqtkA7nAIyqvrzasE6P0hkNCw8JZhEISgH6kqGEQHA7mhDVwVWm6Q2k08s03/CS/4umMzTOIbp5kTRQZIn75NiOorf+lOQdJtlQX7nG61xnmOR/C97OJR45oK28wae0mhkfYJkiWdepFuNd1j3Ba7zGGddPmyZLiWVdgH6gVu6oZu6mmWgIvMY3aHPYSDCqosqfTgcKFvVZOupkL3M/ELxAcI/OOhudcjlXOe90YEhuHlW+WgdfCAxfBbG68K1FUuYt3ffpUhuIYFq1thn0vsZ3ySg7P6nWKe3eKqmfOQQlFXZi3PCEWOWJp/wHNR37KCGY025qttneQ0r9e8/F8DwXeI09wG4ue7owomyl6Aka+Nq0C2+RkbqTVJJnnmOUCQZqpUsag7c4YHsrxT+eY3DRFD6piXq3HKefdr7zmYob7DVz4G3N4O/0PsPH/MYS2w2sBrNDLZMeE2qgwbBc5e9N4OOOHW9ehegBngeKB2sm+cdhh5kLavCD9L7Kh9xgdgEJte7LPFWSbse7P8rfc7QH7k43f6jnpJqUJSpwSqaYAkGFMRUqztr6sM0eKfk1cP8F70vdGFdkNiEQbDIIC7ZXa8fsjxwBpUYrBg58KHV7be2FOMJl0OztLewGoJ0Xgk8oV6sizgc8Vn8rfMVN+fzE9uo+PidJistGB9mS/L3J11RU6ybnARK0SrYeKd/QDOQzn6Drzq9bLCcVnmfWcNgQKuAydKc4a5HBr7sHIvcItc0vBt9aTz+7Jy1eIfJ6ZA5MmKklNfmP2Qfw2I69RuApX0TS/88om6q2RjARl4OWKGIcsRxKz4R24LSyleKIfxCrHsu36FPuTIaC35l+fWzhcyzXJyat3DOGn7cM/4xqdUlMhl1Ts07yRvD5ugxz3CIp606J1m35tq24coA7geHv2pLTDr/k9IEU6dPzFNcCwU9pyhTW9DzndOC4b4FihNUGF95p3ChNliJLHMeIMlz0iY7rfBK+NOlNexliQhOg1rjGm8FzIPMy3St0c5AUUGKB38khDG35UifjzKjQ1Bj1McO4rdBjSGal2i0EgtkoSrVNLlbvlOvvaMv1xzimbY+sXO99YXEFgWBMI4nowiIuy+5NvLJZlJuH+aXV32Hg4QQ5/tKXFX0vLofIkzMNuo3Q/+PmNAwl2EQgeNSsy2sYpECBk2FM/AvPjuoddMy30gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0yOFQxMzo1NToyMyswMDowMAXOXscAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMjhUMTM6NTU6MjMrMDA6MDB0k+Z7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld")],1)},r=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero app-background"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"is-pulled-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"}],staticClass:"theme-switch",attrs:{type:"checkbox",id:"theme-switch"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(e){var a=t.darkMode,s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=null,c=t._i(a,r);s.checked?c<0&&(t.darkMode=a.concat([r])):c>-1&&(t.darkMode=a.slice(0,c).concat(a.slice(c+1)))}else t.darkMode=n}}}),s("label",{attrs:{for:"theme-switch"}},[!0===t.darkMode?s("span",[s("img",{attrs:{alt:"logo",src:a("5dd5"),width:"40"}})]):s("span",[s("img",{attrs:{alt:"logo",src:a("49ec"),width:"40"}})])])]),s("h1",{staticClass:"title has-text-white"},[t._v(" Covid19 Information ")]),s("h2",{staticClass:"subtitle dynamic-subtitle"},[t._v(" Last Update : "+t._s(t.data.lastUpdate)+" ")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"}],staticClass:"theme-switch",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(e){var a=t.darkMode,s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=null,c=t._i(a,r);s.checked?c<0&&(t.darkMode=a.concat([r])):c>-1&&(t.darkMode=a.slice(0,c).concat(a.slice(c+1)))}else t.darkMode=n}}})])]),s("section",[s("GlobalCard"),s("GlobalTable"),s("br"),s("br"),s("IDCard"),s("br"),s("br"),s("Footer")],1)])},i=[],d=a("c1df"),o=a.n(d),l=a("d4ec"),u=a("bee2"),f=a("bc3a"),b=a.n(f),m="https://covid19.mathdro.id/api",h=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,[{key:"getDataGlobal",value:function(){var t="".concat(m),e=b.a.get(t).then((function(t){return t.data}));return e}},{key:"getDataConfirmedGlobal",value:function(){var t="".concat(m,"/confirmed"),e=b.a.get(t).then((function(t){return t.data}));return e}},{key:"getDailyGlobal",value:function(){var t="".concat(m,"/daily"),e=b.a.get(t).then((function(t){return t.data}));return e}},{key:"getDetailCountry",value:function(t){var e="".concat(m,"/countries/")+t,a=b.a.get(e).then((function(t){return t.data}));return a}}]),t}(),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("br"),t._m(0),a("br"),a("br"),a("p",{staticClass:"is-pulled-left dynamic-title"},[t._v("Fatality Rate : "+t._s(Number((this.deaths/this.confirmed*100).toFixed(1)))+"%")]),a("br"),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.confirmed)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Terkonfirmasi ")])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.recovered)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Sembuh ")])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.deaths)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Meninggal ")])])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"is-size-4  is-pulled-left dynamic-title"},[a("b",[t._v("Data Global")])])}],j=new h,g={name:"GlobalCard",data:function(){return{confirmed:0,recovered:0,deaths:0}},methods:{getData:function(){var t=this;j.getDataGlobal().then((function(e){t.confirmed=e.confirmed.value,t.recovered=e.recovered.value,t.deaths=e.deaths.value}))}},mounted:function(){this.getData()}},p=g,k=a("2877"),C=Object(k["a"])(p,A,v,!1,null,null,null),y=C.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-table",{attrs:{data:t.data,"sticky-header":"true",columns:t.columns}})],1)])])},R=[],M=(a("4160"),a("159b"),a("6612")),N=a.n(M),w=new h,O={name:"GlobalCard",data:function(){return{data:[],countries:[],columns:[{field:"id",label:"#"},{field:"location",label:"Lokasi",searchable:!0},{field:"confirmed",label:"Terkonfirmasi"},{field:"recovered",label:"Sembuh"},{field:"deaths",label:"Meninggal"},{field:"lastUpdate",label:"Pembaharuan"}]}},methods:{getData:function(){var t=this;w.getDataConfirmedGlobal().then((function(e){var a=0;e.forEach((function(e){e.id=a+=1,e.location=t.getLocation(e),e.confirmed=t.formatNumber(e.confirmed),e.deaths=t.formatNumber(e.deaths),e.recovered=t.formatNumber(e.recovered),e.lastUpdate=o()(e.lastUpdate).format("DD/MM/YYYY"),t.data.push(e)}))}))},getDataConfirmedDistincCountry:function(){var t=this;w.getDataConfirmedGlobal().then((function(e){var a=[];e.forEach((function(t){if(void 0===a[t.countryRegion])a[t.countryRegion]={confirmed:t.confirmed,deaths:t.deaths,recovered:t.recovered};else{var e=a[t.countryRegion];a[t.countryRegion]={confirmed:t.confirmed+e.confirmed,deaths:t.deaths+e.deaths,recovered:t.recovered+e.recovered}}})),t.countries=a}))},getLocation:function(t){return null!=t.provinceState&&null!=t.countryRegion?t.provinceState+" ("+t.countryRegion+")":null==t.provinceState&&null!=t.countryRegion?t.countryRegion:null!=t.provinceState&&null==t.countryRegion?t.provinceState:"n/a"},formatNumber:function(t){return N()(t).format("0,0")}},mounted:function(){this.getData()}},Z=O,z=Object(k["a"])(Z,V,R,!1,null,null,null),D=z.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("br"),t._m(0),a("br"),a("br"),a("p",{staticClass:"is-pulled-left dynamic-title"},[t._v("Fatality Rate : "+t._s(Number((this.deaths/this.confirmed*100).toFixed(1)))+"%")]),a("br"),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.confirmed)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Terkonfirmasi ")])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.recovered)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Sembuh ")])])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"card component-background"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title dynamic-title"},[t._v(" "+t._s(this.deaths)+" ")]),a("p",{staticClass:"subtitle dynamic-title"},[t._v(" Meninggal ")])])])])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"is-size-4  is-pulled-left dynamic-title"},[a("b",[t._v("Data Indonesia")])])}],S=new h,U={name:"IDCard",data:function(){return{confirmed:0,recovered:0,deaths:0}},methods:{getData:function(){var t=this;S.getDetailCountry("ID").then((function(e){t.confirmed=e.confirmed.value,t.recovered=e.recovered.value,t.deaths=e.deaths.value}))}},mounted:function(){this.getData()}},G=U,J=Object(k["a"])(G,I,E,!1,null,null,null),_=J.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("br"),a("h3",{staticClass:"is-size-4  is-pulled-left dynamic-title"},[a("b",[t._v("Sumber Data")])]),a("br"),a("br"),a("ul",{staticStyle:{"text-align":"left"}},[a("li",[a("a",{attrs:{href:"https://covid19.mathdro.id/api",target:"_blank"}},[t._v("API Mathdro")])]),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1ma1T9hWbec1pXlwZ89WakRk-OfVUQZsOCFl4FwZxzVw/edit#gid=0",target:"_blank"}},[t._v("KawalCovid.id Indonesia Data")])]),a("li")]),a("br"),a("br"),a("br"),a("p",[t._v(" Dibuat dengan VueJS. Lihat di "),a("a",{attrs:{href:"https://github.com/iniakunhuda/covid19",target:"_blank"}},[t._v("Github")])]),a("br"),a("br"),a("br")])}],F={name:"Footer"},T=F,Q=Object(k["a"])(T,x,B,!1,null,null,null),Y=Q.exports,H=new h,P={name:"HelloWorld",components:{GlobalCard:y,GlobalTable:D,Footer:Y,IDCard:_},props:{msg:String},data:function(){return{data:[],status:{confirmed:0,recovered:0,deaths:0},darkMode:!1}},methods:{getData:function(){var t=this;H.getDataGlobal().then((function(e){t.data=e,t.data.lastUpdate=o()(e.lastUpdate).format("DD/MM/YYYY")}))},setTheme:function(){var t=document.body;t.classList.add("body-background");var e=document.documentElement,a=localStorage.getItem("theme");"dark"===a?(e.setAttribute("theme","dark"),this.darkMode=!0):(e.setAttribute("theme","light"),this.darkMode=!1)}},mounted:function(){this.getData(),this.setTheme()},watch:{darkMode:function(){var t=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),t.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),t.setAttribute("theme","light"))}}},L=P,W=(a("2c7c"),Object(k["a"])(L,c,i,!1,null,"2b3e4c58",null)),q=W.exports,K={name:"App",components:{HelloWorld:q}},X=K,$=(a("034f"),Object(k["a"])(X,n,r,!1,null,null,null)),tt=$.exports,et=a("289d");a("5abe"),a("6418");s["a"].use(et["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(tt)}}).$mount("#app")},"5dd5":function(t,e){t.exports="data:image/png;base64,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"},6418:function(t,e,a){},"85ec":function(t,e,a){},de35:function(t,e,a){}});
//# sourceMappingURL=app.2ee20587.js.map