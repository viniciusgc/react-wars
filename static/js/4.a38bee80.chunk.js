(this["webpackJsonpreact-wars"]=this["webpackJsonpreact-wars"]||[]).push([[4],{87:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(40),c=n(147),o=n(0),i=n.n(o),l=n(45),u=n(41),s=n(165),p=n(173),f=n(174),d=n(175),m=n(172),E=n(176),b=n(170),h=n(177),O=n(178),v=n(9),g=n(127),j=n.n(g),y=n(43),P=j.a.create({baseURL:y.a.BASE,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:3e4}),C=n(28),S=n(50),_=function(){return function(e,t){var n=t().main.nextPage;e({type:v.a.FETCH_MORE_PEOPLE}),P.get("".concat(y.a.PEOPLE,"?page=").concat(n)).then((function(t){e({type:v.a.FETCH_MORE_PEOPLE_SUCCESS,payload:t.data})})).catch((function(){S.b.error("Ooops! N\xe3o foi poss\xedvel carregar outros personagens."),e({type:v.a.FETCH_MORE_PEOPLE_FAIL})}))}};function x(){var e=Object(r.a)(["\n  z-index: 100;\n  position: fixed;\n  width: 100%;\n  height: 60px;\n  background: #8936bc;\n  font-size: 30px;\n  font-weight: bold;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: cursive;\n"]);return x=function(){return e},e}var w=Object(u.b)(s.a)(x()),L=function(e){e.children;return i.a.createElement(w,{container:!0,direction:"column",alignItems:"center"},"React Wars")},T=n(166),F=n(182),k=n(168),A=n(179),I=n(169),H=n(171),R=n(39);function M(){var e=Object(r.a)(["\n  && {\n    margin-top: 10px;\n  }\n"]);return M=function(){return e},e}function N(){var e=Object(r.a)(["\n  width: 50vw;\n"]);return N=function(){return e},e}var z=Object(u.b)(H.a)(N()),U=Object(u.b)(A.a)(M()),B=Object(l.b)((function(e){var t=e.main;return Object(a.a)({},t)}),null)((function(e){var t=e.planet,n=e.open,a=e.person,r=e.handleClose,c=Object(R.a)(),o=Object(T.a)(c.breakpoints.down("sm"));return i.a.createElement("div",null,i.a.createElement(F.a,{fullScreen:o,open:n,onClose:r,"aria-labelledby":"responsive-dialog-title"},i.a.createElement(z,{id:"responsive-dialog-title"},a.name," (",a.gender,") ",t.length>0&&"de ".concat(t)),i.a.createElement(k.a,{dividers:!0},i.a.createElement(s.a,{container:!0,direction:"row",justify:"space-around"},i.a.createElement(A.a,{label:"Altura",InputProps:{readOnly:!0},variant:"outlined",value:a.height}),i.a.createElement(A.a,{label:"Massa",variant:"outlined",InputProps:{readOnly:!0},value:a.mass})),i.a.createElement(s.a,{container:!0,direction:"row",justify:"space-around"},i.a.createElement(U,{variant:"outlined",label:"Cor do cabelo",InputProps:{readOnly:!0},value:a.hair_color}),i.a.createElement(U,{variant:"outlined",label:"Cor da pele",InputProps:{readOnly:!0},value:a.skin_color})),i.a.createElement(s.a,{container:!0,direction:"row",justify:"space-around"},i.a.createElement(U,{variant:"outlined",label:"Cor do olho",InputProps:{readOnly:!0},value:a.eye_color}),i.a.createElement(U,{variant:"outlined",label:"Ano de nascimento",InputProps:{readOnly:!0},value:a.birth_year}))),i.a.createElement(I.a,null,i.a.createElement(b.a,{onClick:r,color:"primary",variant:"contained",autoFocus:!0},"Fechar"))))}));function D(){var e=Object(r.a)(["\n  width: 330px;\n  height: 135px;\n"]);return D=function(){return e},e}function J(){var e=Object(r.a)(["\n  width: 255px;\n  height: 36px;\n  && {\n    &:disabled {\n      color: #fff;\n      background-color: #3f51b5;\n      opacity: 0.7;\n    }\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(r.a)(["\n  margin-top: 30px;\n"]);return W=function(){return e},e}function V(){var e=Object(r.a)(["\n  font-size: 17px;\n"]);return V=function(){return e},e}function q(){var e=Object(r.a)(["\n  max-width: 345px;\n"]);return q=function(){return e},e}function G(){var e=Object(r.a)(["\n  padding-bottom: 30px;\n  padding-top: 80px;\n"]);return G=function(){return e},e}var K=Object(u.b)(s.a)(G()),Q=Object(u.b)(h.a)(q()),X=u.b.span(V()),Y=Object(u.b)(s.a)(W()),Z=Object(u.b)(b.a)(J()),$=Object(u.b)(O.a)(D()),ee={fetchPeople:function(){return function(e){e({type:v.a.FETCH_PEOPLE}),P.get("".concat(y.a.PEOPLE)).then((function(t){e({type:v.a.FETCH_PEOPLE_SUCCESS,payload:t.data}),C.b.dispatch(_())})).catch((function(t){S.b.error("Ooops! N\xe3o foi poss\xedvel carregar os personagens."),e({type:v.a.FETCH_PEOPLE_FAIL})}))}},fetchMorePeople:_,fetchStarships:function e(t){return function(n){P.get("".concat(y.a.STARSHIPS,"?page=").concat(t)).then((function(t){var r,c=t.data,o=c.count,i=c.next,l=c.previous,u=c.results;n({type:v.a.FETCH_STARSHIPS_SUCCESS,payload:{count:o,next:i,previous:l,data:(r=u,r.reduce((function(e,t){return e.data[t.url]=t,Object(a.a)({},e)}),{data:{}})).data}}),i&&C.b.dispatch(e(i.match(/\d+/g).join("")))})).catch((function(){return S.b.error("Ooops! N\xe3o foi poss\xedvel carregar algumas starships.")}))}},resetPlanet:function(){return function(e){e({type:v.a.RESET_PLANET})}},fetchPlanet:function(e){return function(t){P.get("".concat(y.a.PLANETS).concat(e)).then((function(e){t({type:v.a.FETCH_PLANET_SUCCESS,payload:e.data.name})}))}}},te=Object(l.b)((function(e){var t=e.main;return Object(a.a)({},t)}),ee)((function(e){var t=e.people,n=e.starships,a=e.loading,r=e.disableButtonLoadMore,l=e.fetchPeople,u=e.fetchMorePeople,h=e.fetchStarships,O=e.fetchPlanet,v=e.resetPlanet,g=Object(o.useState)(!1),j=Object(c.a)(g,2),y=j[0],P=j[1],C=Object(o.useState)({}),S=Object(c.a)(C,2),_=S[0],x=S[1];function w(e){x(e),O(e.homeworld.match(/\d+/).join("")),P(!0)}return Object(o.useEffect)((function(){l()}),[l]),Object(o.useEffect)((function(){h(1)}),[h]),Object(o.useEffect)((function(){v()}),[v]),i.a.createElement(s.a,null,i.a.createElement(L,null,"React Wars"),i.a.createElement(K,{item:!0,xs:12},y&&i.a.createElement(B,{open:y,handleClose:function(){x({}),P(!1),v()},person:_}),a.allPeople?i.a.createElement(s.a,{align:"center"},i.a.createElement(p.a,null)):i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{container:!0,justify:"center",spacing:2},t.results.map((function(e){return i.a.createElement(s.a,{key:e.url,item:!0},i.a.createElement(Q,{onClick:function(){return w(e)}},i.a.createElement(f.a,null,i.a.createElement(d.a,{component:"img",alt:e.name,height:"140",src:(t=e.url.match(/\d+/).join(""),86===t&&(t=87),"https://i.picsum.photos/id/".concat(t,"/350/200.jpg")),title:e.name}),i.a.createElement($,null,i.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name," ",i.a.createElement(X,null,"(",e.gender,")")),i.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},e.starships.map((function(e){return function(e){if(n.data[e])return i.a.createElement(i.a.Fragment,{key:n.data[e].name},i.a.createElement("span",null,n.data[e].name,"  (",n.data[e].starship_class,")"),i.a.createElement("br",null))}(e)}))))),i.a.createElement(E.a,null,i.a.createElement(b.a,{size:"small",color:"primary",onClick:function(){return w(e)}},"Ver mais"))));var t}))),i.a.createElement(Y,{container:!0,direction:"row",justify:"center"},i.a.createElement(Z,{variant:"contained",color:"primary",onClick:u,disabled:a.moreData||r},a.moreData?i.a.createElement(p.a,{size:25,color:"inherit"}):r?"N\xe3o tem mais personagens para carregar":"Carregar mais personagens")))))}));n.d(t,"default",(function(){return te}))}}]);
//# sourceMappingURL=4.a38bee80.chunk.js.map