(this["webpackJsonpbeam-calculator"]=this["webpackJsonpbeam-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),l=c(3),i=c.n(l);c(17),c(18),c(19);function r(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h1",{children:Object(s.jsx)("a",{href:"/beam_calculator",children:"BEAM CALCULATOR"})})})}var j=c(4),d=c(6),h=c(7),o=c(9),b=c(8),m=(c(20),function(e){return Object(s.jsx)("div",{className:"find-check",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:e.findSelect,children:"FIND BEAM"}),Object(s.jsx)("li",{onClick:e.checkSelect,children:"CHECK BEAM"})]})})}),x=(c(21),c(2)),O=(c(22),c.p+"static/media/SHS.043b7f73.svg"),u=c.p+"static/media/RHS.8368783e.svg",f=c.p+"static/media/CHS.481c967b.svg",p=c.p+"static/media/UC.75276d6f.svg",g=c.p+"static/media/UB.c950c6e1.svg",N=c.p+"static/media/PFC.a6a7760d.svg",v=function(e){var t=e.typeSelect,c=e.selected;return Object(s.jsxs)("ul",{className:"type-select",children:[Object(s.jsx)(x.a,{content:"Rectangular Hollow Section",children:Object(s.jsxs)("li",{onClick:t,className:"rhs"===c?"selected":"",id:"rhs",children:[Object(s.jsx)("img",{src:u,alt:"RHS",className:"svg"}),"RHS"]})}),Object(s.jsx)(x.a,{content:"Square Hollow Section",children:Object(s.jsxs)("li",{onClick:t,className:"shs"===c?"selected":"",id:"shs",children:[Object(s.jsx)("img",{src:O,alt:"SHS",className:"svg"}),"SHS"]})}),Object(s.jsx)(x.a,{content:"Circular Hollow Section",children:Object(s.jsxs)("li",{onClick:t,className:"chs"===c?"selected":"",id:"chs",children:[Object(s.jsx)("img",{src:f,alt:"CHS",className:"svg"}),"CHS"]})}),Object(s.jsx)(x.a,{content:"Universal Column",children:Object(s.jsxs)("li",{onClick:t,className:"uc"===c?"selected":"",id:"uc",children:[Object(s.jsx)("img",{src:p,alt:"UC",className:"svg"}),"UC"]})}),Object(s.jsx)(x.a,{content:"Universal Beam",children:Object(s.jsxs)("li",{onClick:t,className:"ub"===c?"selected":"",id:"ub",children:[Object(s.jsx)("img",{src:g,alt:"UB",className:"svg"}),"UB"]})}),Object(s.jsx)(x.a,{content:"Parallel Flange Channel",children:Object(s.jsxs)("li",{onClick:t,className:"pfc"===c?"selected":"",id:"pfc",children:[Object(s.jsx)("img",{src:N,alt:"PFC",className:"svg"}),"PFC"]})})]})},S=(c(23),function(e){var t=e.foundBeam,c=e.calcObject;return Object(s.jsxs)("div",{className:"results",children:[Object(s.jsxs)("div",{className:"beam-display",children:[Object(s.jsx)("h3",{className:"beam-header",children:t.desc}),Object(s.jsx)("table",{className:"found-table",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"t-left",children:"Height:"}),Object(s.jsxs)("td",{className:"t-right",children:[t.x,"mm"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"t-left",children:"Width:"}),Object(s.jsxs)("td",{className:"t-right",children:[t.y,"mm"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"t-left",children:"Wall Thk:"}),Object(s.jsxs)("td",{className:"t-right",children:[t.thk,"mm"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"t-left",children:"kg/m:"}),Object(s.jsxs)("td",{className:"t-right",children:[t.mass,"kg"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"t-left",children:"C.S.A.:"}),Object(s.jsxs)("td",{className:"t-right",children:[t.csa,"mm",Object(s.jsx)("sup",{children:"2"})]})]})]})})]}),Object(s.jsxs)("div",{className:"calcs-display",children:[Object(s.jsx)("h3",{className:"beam-header",children:"CALCULATIONS"}),Object(s.jsx)("table",{className:"calc-table",children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Force (F) ="}),Object(s.jsx)("td",{colSpan:"2",children:"W x 9.81 x Safety Factor ="}),Object(s.jsx)("td",{children:Object(s.jsxs)("strong",{children:[c.force,"N"]})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Span (L) ="}),Object(s.jsxs)("td",{children:[c.span,"mm"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Youngs Modulus (E) ="}),Object(s.jsx)("td",{children:"205000MPa"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"I ="}),Object(s.jsxs)("td",{children:[1e4*t.i,"mm",Object(s.jsx)("sup",{children:"4"})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Z ="}),Object(s.jsxs)("td",{children:[1e3*t.z,"mm",Object(s.jsx)("sup",{children:"3"})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Max Deflection ="}),Object(s.jsxs)("td",{className:"calc-top",children:["WxL",Object(s.jsx)("sup",{children:"3"})]}),Object(s.jsxs)("td",{children:["= ",Object(s.jsxs)("strong",{children:[c.deflection,"mm"]})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{className:"calc-bottom",children:"48xExI"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Allowable Deflection ="}),Object(s.jsxs)("td",{children:["L / ",c.defl]}),Object(s.jsxs)("td",{children:["= ",(c.span/c.defl).toFixed(2),"mm"]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Max Stress ="}),Object(s.jsx)("td",{className:"calc-top",children:"WL"}),Object(s.jsxs)("td",{children:["= ",Object(s.jsxs)("strong",{children:[c.stress,"MPa"]})]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{}),Object(s.jsx)("td",{className:"calc-bottom",children:"4xZ"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"c-right",children:"Allowable Stress ="}),Object(s.jsxs)("td",{children:[c.grade," x 0.85"]}),Object(s.jsxs)("td",{children:["= ",(.85*c.grade).toFixed(2),"MPa"]})]})]})})]})]})}),C=(c(24),function(e){var t=e.inputChange,c=e.findBeam,a=e.XorY;return Object(s.jsxs)("form",{className:"inputs",onSubmit:c,children:[Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("label",{htmlFor:"span",children:"Span (mm):"}),Object(s.jsx)("input",{onChange:t,type:"number",name:"span",required:!0})]}),Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("label",{htmlFor:"mass",children:"Weight (kg):"}),Object(s.jsx)("input",{onChange:t,type:"number",name:"mass",required:!0})]}),Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("label",{htmlFor:"grade",children:"Steel Grade:"}),Object(s.jsx)("input",{onChange:t,type:"number",name:"grade",defaultValue:"355",className:"grade-input",required:!0})]}),Object(s.jsxs)("div",{className:"input-wrapper",children:[Object(s.jsx)("label",{htmlFor:"safety",children:"Safety Factor:"}),Object(s.jsx)("input",{onChange:t,type:"number",name:"safety",defaultValue:"1",step:"0.01",className:"safety-input",required:!0})]}),Object(s.jsxs)("div",{className:"defl-wrapper",children:[Object(s.jsx)("label",{children:"Allowable Deflection:"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"L/"}),Object(s.jsx)("input",{onChange:t,type:"number",name:"defl",defaultValue:"250",className:"defl-input",required:!0})]})]}),Object(s.jsxs)("div",{className:"radios-wrapper",children:[Object(s.jsx)("label",{htmlFor:"XorY",children:"Load Axis:"}),Object(s.jsxs)("div",{className:"radios",children:[Object(s.jsxs)("div",{className:"radio",children:[Object(s.jsx)("input",{onClick:t,type:"radio",value:"x",name:"XorY",checked:"x"===a}),"X"]}),Object(s.jsxs)("div",{className:"radio",children:[Object(s.jsx)("input",{onClick:t,type:"radio",value:"y",name:"XorY",checked:"y"===a}),"Y"]})]})]}),Object(s.jsx)("input",{type:"submit",value:"CALCULATE",className:"calc-button"})]})}),y=function(e){var t=e.inputChange,c=e.findBeam,a=e.foundBeam,n=e.XorY,l=e.calcObject;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Find Beam"}),Object(s.jsx)(C,{inputChange:t,findBeam:c,XorY:n}),a?Object(s.jsx)(S,{foundBeam:a,calcObject:l}):Object(s.jsx)("div",{})]})},B=function(e){e.inputChange;var t=e.beams.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.desc})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Check Beam"}),t.length>0?Object(s.jsxs)("label",{children:["Select Beam:",Object(s.jsx)("select",{name:"beam",children:t})]}):Object(s.jsx)("div",{children:"Fetching Beams..."})]})},k=(c(25),function(e){Object(o.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(d.a)(this,c),(s=t.call(this,e)).checkSelect=function(){return s.setState({find:!1,showSelect:!0})},s.findSelect=function(){return s.setState({find:!0,showSelect:!0})},s.typeSelect=function(e){s.setState({type:e.target.id}),fetch("https://resteel.herokuapp.com/".concat(e.target.id)).then((function(e){return e.json()})).then((function(e){s.setState({beams:e})}))},s.inputChange=function(e){"XorY"===e.target.name?s.setState(Object(j.a)({},e.target.name,e.target.value)):"safety"===e.target.name?s.setState(Object(j.a)({},e.target.name,parseFloat(e.target.value))):s.setState(Object(j.a)({},e.target.name,parseInt(e.target.value)))},s.fetchBeams=function(e,t){console.log("fetchBeam"),fetch("https://resteel.herokuapp.com/".concat(s.state.type,"/").concat(s.state.XorY,"/").concat(e,"/").concat(t)).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){console.log("fetched"),console.log("api data: ",e),e.i=s.getBeamI(e),e.z=s.getBeamZ(e),s.setState({foundBeam:e,found:!0}),s.getCalcs()})).catch((function(e){console.log("err: ",e)}))},s.findBeam=function(e){e.preventDefault(),console.log("findBeam"),s.setState({showSelect:!1});var t=s.state.defl,c=s.state.span,a=9.81*s.state.mass*s.state.safety,n=s.state.grade,l=Math.ceil(t*a*Math.pow(c,2)/984e4/1e4),i=Math.ceil(5*a*c/(17*n)/1e3);console.log("minI :>> ",l),console.log("minZ :>> ",i),s.fetchBeams(l,i)},s.getBeamWeight=function(){return s.state.foundBeam.mass*s.state.span},s.getCalcs=function(){console.log("getCalcs");var e=9.81*s.state.mass*s.state.safety,t={span:s.state.span,mass:s.state.mass,force:e,safety:s.state.safety,defl:s.state.defl,grade:s.state.grade,stress:(e*s.state.span/(4*s.state.foundBeam.z*1e3)).toFixed(2),deflection:(e*Math.pow(s.state.span,3)/(984e4*s.state.foundBeam.i*1e4)).toFixed(2)};s.setState({calcObject:t})},s.getBeamI=function(e){return"x"===s.state.XorY?e.ixx:e.iyy},s.getBeamZ=function(e){return"x"===s.state.XorY?e.zxx:e.zyy},s.state={showSelect:!1,find:"",check:!1,type:"",span:0,mass:0,defl:250,grade:355,safety:1,XorY:"x",found:!1,beams:[],calcObject:{}},s}return Object(h.a)(c,[{key:"componentDidMount",value:function(){fetch("https://resteel.herokuapp.com/").then((function(e){return e.json})).then((function(e){return console.log("ping")}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"calc-con",children:[""===this.state.find?Object(s.jsx)(m,{checkSelect:this.checkSelect,findSelect:this.findSelect}):Object(s.jsx)("div",{}),this.state.showSelect?Object(s.jsx)(v,{typeSelect:this.typeSelect,selected:this.state.type}):Object(s.jsx)("div",{}),""!==this.state.type?this.state.find?Object(s.jsx)(y,{inputChange:this.inputChange,findBeam:this.findBeam,XorY:this.state.XorY,foundBeam:this.state.foundBeam,calcObject:this.state.calcObject}):Object(s.jsx)(B,{inputChange:this.inputChange,beams:this.state.beams}):Object(s.jsx)("div",{})]})}}]),c}(a.Component));var F=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(r,{}),Object(s.jsx)(k,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),w()}],[[26,1,2]]]);
//# sourceMappingURL=main.25185fbe.chunk.js.map