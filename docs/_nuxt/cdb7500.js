(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(e,t,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(138).default)("486a7348",content,!0,{sourceMap:!1})},298:function(e,t,r){"use strict";r(295)},299:function(e,t,r){var n=r(137)((function(i){return i[1]}));n.push([e.i,"form[data-v-14494b62]{display:flex;flex-direction:column;row-gap:1rem;width:30%}",""]),n.locals={},e.exports=n},304:function(e,t,r){"use strict";r.r(t);r(33),r(47),r(29);var n=r(10),o=(r(65),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,e.redirect,e.error,r=e.$axios,e.$claims,n=r.$post("/api/searcher",{}),t.abrupt("return",{filteredData:n.data});case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{nameName:"",description:"",filteredData:[]}},methods:{applyFilters:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("apply filters"),t.prev=1,t.next=4,e.$axios.$post("/api/searcher",{name:e.nameName,description:e.description});case 4:r=t.sent,e.filteredData=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:console.log("fata",e.filteredData);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}}),c=(r(298),r(48)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("Head",[t("Title",[e._v("We bcn | Filter")]),e._v(" "),t("Meta",{attrs:{name:"Description",content:"We bcn is a company especialized in technology..."}})],1),e._v(" "),t("nav",[t("ul",[t("li",[t("RouterLink",{attrs:{to:"/"}},[e._v("Home")])],1)])]),e._v(" "),t("h2",[e._v("Busqueda:")]),e._v(" "),t("br"),e._v(" "),t("form",{on:{submit:function(e){e.preventDefault()}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.nameName,expression:"nameName"}],attrs:{type:"text",name:"name",placeholder:"nombre"},domProps:{value:e.nameName},on:{input:function(t){t.target.composing||(e.nameName=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{type:"text",name:"description",placeholder:"descripción"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),t("button",{on:{click:function(t){return e.applyFilters()}}},[e._v("Aplicar filtros")])]),e._v(" "),t("br"),t("br"),e._v(" "),t("div",e._l(e.filteredData,(function(r,i){return t("div",{key:i,staticClass:"product"},[t("RouterLink",{attrs:{to:"/details/".concat(r.id)}},[t("div",[e._v("\n          "+e._s(r.name)+"\n        ")])]),e._v(" "),t("div",{domProps:{innerHTML:e._s(r.description)}})],1)})),0)],1)}),[],!1,null,"14494b62",null);t.default=component.exports}}]);