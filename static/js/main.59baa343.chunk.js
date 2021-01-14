(this["webpackJsonpbeam-calculator"]=this["webpackJsonpbeam-calculator"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(4),l=s.n(i);s(14),s(15),s(16);function r(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:Object(c.jsx)("a",{href:"/beam_calculator",children:"BEAM CALCULATOR"})})})}var d=s(2),j=s(5),h=s(6),b=s(8),m=s(7),o=(s(17),function(e){return Object(c.jsx)("div",{className:"find-check",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:e.findSelect,children:"FIND BEAM"}),Object(c.jsx)("li",{onClick:e.checkSelect,children:"CHECK BEAM"})]})})}),x=(s(18),s(19),s.p+"static/media/SHS.043b7f73.svg"),O=s.p+"static/media/RHS.8368783e.svg",u=s.p+"static/media/CHS.481c967b.svg",p=s.p+"static/media/UC.75276d6f.svg",f=s.p+"static/media/UB.c950c6e1.svg",g=s.p+"static/media/PFC.a6a7760d.svg",v=function(e){var t=e.typeSelect,s=e.selected;return Object(c.jsxs)("ul",{className:"type-select",children:[Object(c.jsxs)("li",{onClick:t,className:"rhs"===s?"selected":"",id:"rhs",children:[Object(c.jsx)("img",{src:O,alt:"RHS",className:"svg"}),Object(c.jsx)("p",{children:"RHS"})]}),Object(c.jsxs)("li",{onClick:t,className:"shs"===s?"selected":"",id:"shs",children:[Object(c.jsx)("img",{src:x,alt:"SHS",className:"svg"}),Object(c.jsx)("p",{children:"SHS"})]}),Object(c.jsxs)("li",{onClick:t,className:"chs"===s?"selected":"",id:"chs",children:[Object(c.jsx)("img",{src:u,alt:"CHS",className:"svg"}),Object(c.jsx)("p",{children:"CHS"})]}),Object(c.jsxs)("li",{onClick:t,className:"uc"===s?"selected":"",id:"uc",children:[Object(c.jsx)("img",{src:p,alt:"UC",className:"svg"}),Object(c.jsx)("p",{children:"UC"})]}),Object(c.jsxs)("li",{onClick:t,className:"ub"===s?"selected":"",id:"ub",children:[Object(c.jsx)("img",{src:f,alt:"UB",className:"svg"}),Object(c.jsx)("p",{children:"UB"})]}),Object(c.jsxs)("li",{onClick:t,className:"pfc"===s?"selected":"",id:"pfc",children:[Object(c.jsx)("img",{src:g,alt:"PFC",className:"svg"}),Object(c.jsx)("p",{children:"PFC"})]})]})},N=function(e){var t=e.inputChange,s=e.findBeam,a=e.XorY,n=e.fixSim,i=e.evenPoint;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"inputs",onSubmit:s,children:[Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"span",children:"Span (mm):"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"span",required:!0})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Beam End Type:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["Fixed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"f",name:"fixSim",checked:"f"===n})]}),Object(c.jsxs)("div",{className:"radio",children:["Not Fixed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"s",name:"fixSim",checked:"s"===n})]})]})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"mass",children:"Load (N):"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"load",required:!0})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Load Type:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["Evenly Distributed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"e",name:"evenPoint",checked:"e"===i})]}),Object(c.jsxs)("div",{className:"radio",children:["Point @ Centre",Object(c.jsx)("input",{onChange:t,type:"radio",value:"p",name:"evenPoint",checked:"p"===i})]})]})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"grade",children:"Steel Grade:"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"grade",defaultValue:"355",className:"grade-input",required:!0})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"safety",children:"Safety Factor:"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"safety",defaultValue:"1",step:"0.01",className:"safety-input",required:!0})]}),Object(c.jsxs)("div",{className:"defl-wrapper",children:[Object(c.jsx)("label",{children:"Allowable Deflection:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"L/"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"defl",defaultValue:"250",className:"defl-input",required:!0})]})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Load Axis:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["X",Object(c.jsx)("input",{onChange:t,type:"radio",value:"x",name:"XorY",checked:"x"===a})]}),Object(c.jsxs)("div",{className:"radio",children:["Y",Object(c.jsx)("input",{onChange:t,type:"radio",value:"y",name:"XorY",checked:"y"===a})]})]})]}),Object(c.jsx)("input",{type:"submit",value:"CALCULATE",className:"calc-button"})]})})},S=(s(20),function(e){var t=e.inputChange,s=e.beams,a=e.checkBeam,n=e.beamSelectChange,i=e.XorY,l=e.fixSim,r=e.evenPoint,d=s.map((function(e,t){return Object(c.jsx)("option",{value:t,children:e.desc},t)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"inputs",onSubmit:a,children:[d.length>0?Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"beam",children:"Select Beam:"}),Object(c.jsx)("select",{name:"beam",onChange:n,children:d})]}):Object(c.jsx)("div",{children:"Fetching Beams..."}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"span",children:"Span (mm):"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"span",required:!0})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Beam End Type:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["Fixed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"f",name:"fixSim",checked:"f"===l})]}),Object(c.jsxs)("div",{className:"radio",children:["Not Fixed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"s",name:"fixSim",checked:"s"===l})]})]})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"mass",children:"Load (N):"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"load",required:!0})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Load Type:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["Evenly Distributed",Object(c.jsx)("input",{onChange:t,type:"radio",value:"e",name:"evenPoint",checked:"e"===r})]}),Object(c.jsxs)("div",{className:"radio",children:["Point @ Centre",Object(c.jsx)("input",{onChange:t,type:"radio",value:"p",name:"evenPoint",checked:"p"===r})]})]})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"grade",children:"Steel Grade:"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"grade",defaultValue:"355",className:"grade-input",required:!0})]}),Object(c.jsxs)("div",{className:"input-wrapper",children:[Object(c.jsx)("label",{htmlFor:"safety",children:"Safety Factor:"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"safety",defaultValue:"1",step:"0.01",className:"safety-input",required:!0})]}),Object(c.jsxs)("div",{className:"defl-wrapper",children:[Object(c.jsx)("label",{children:"Allowable Deflection:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"L/"}),Object(c.jsx)("input",{onChange:t,type:"number",name:"defl",defaultValue:"250",className:"defl-input",required:!0})]})]}),Object(c.jsxs)("div",{className:"radios-wrapper",children:[Object(c.jsx)("label",{htmlFor:"XorY",children:"Load Axis:"}),Object(c.jsxs)("div",{className:"radios",children:[Object(c.jsxs)("div",{className:"radio",children:["X",Object(c.jsx)("input",{onClick:t,type:"radio",value:"x",name:"XorY",checked:"x"===i})]}),Object(c.jsxs)("div",{className:"radio",children:["Y",Object(c.jsx)("input",{onClick:t,type:"radio",value:"y",name:"XorY",checked:"y"===i})]})]})]}),Object(c.jsx)("input",{type:"submit",value:"CALCULATE",className:"calc-button"})]}),"    "]})}),C=(s(21),s(22),function(e){var t=e.beam,s=e.calcObject,a=e.deflMod,n=e.stressMod;return Object(c.jsxs)("div",{className:"results",children:[Object(c.jsxs)("div",{className:"beam-display",children:[Object(c.jsxs)("h3",{className:"beam-header",children:["BEAM: ",t.desc]}),Object(c.jsx)("table",{className:"found-table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"Height:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.x,"mm"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"Width:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.y,"mm"]})]}),["U","P"].includes(t.desc[0])?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"Web Thk:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.thkWeb,"mm"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"Flange Thk:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.thkFlange,"mm"]})]})]}):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"Wall Thk:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.thk,"mm"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"kg/m:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.mass,"kg"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"t-left",children:"C.S.A.:"}),Object(c.jsxs)("td",{className:"t-right",children:[t.csa,"mm",Object(c.jsx)("sup",{children:"2"})]})]})]})})]}),Object(c.jsxs)("div",{className:"calcs-display",children:[Object(c.jsx)("h3",{className:"beam-header",children:"CALCULATIONS"}),Object(c.jsx)("table",{className:"calc-table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Load ="}),Object(c.jsx)("td",{children:Object(c.jsxs)("strong",{children:[s.load,"N"]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Force (F) ="}),Object(c.jsx)("td",{colSpan:"2",children:"Load x Safety Factor ="}),Object(c.jsx)("td",{children:Object(c.jsxs)("strong",{children:[s.force,"N"]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Span (L) ="}),Object(c.jsxs)("td",{children:[s.span,"mm"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Youngs Modulus (E) ="}),Object(c.jsx)("td",{children:"205000MPa"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"I ="}),Object(c.jsxs)("td",{children:[1e4*t.i,"mm",Object(c.jsx)("sup",{children:"4"})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Z ="}),Object(c.jsxs)("td",{children:[1e3*t.z,"mm",Object(c.jsx)("sup",{children:"3"})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Max Deflection ="}),Object(c.jsxs)("td",{className:"calc-top",children:["WxL",Object(c.jsx)("sup",{children:"3"})]}),Object(c.jsxs)("td",{children:["= ",Object(c.jsxs)("strong",{children:[s.deflection,"mm"]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsxs)("td",{className:"calc-bottom",children:[a,"xExI"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Allowable Deflection ="}),Object(c.jsxs)("td",{children:["L / ",s.defl]}),Object(c.jsxs)("td",{children:["= ",(s.span/s.defl).toFixed(2),"mm"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Max Stress ="}),Object(c.jsx)("td",{className:"calc-top",children:"WL"}),Object(c.jsxs)("td",{children:["= ",Object(c.jsxs)("strong",{children:[s.stress,"MPa"]})]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsxs)("td",{className:"calc-bottom",children:[n,"xZ"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"c-right",children:"Allowable Stress ="}),Object(c.jsxs)("td",{children:[s.grade," x 0.85"]}),Object(c.jsxs)("td",{children:["= ",(.85*s.grade).toFixed(2),"MPa"]})]})]})})]})]})}),y=function(e){Object(b.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).checkSelect=function(){return c.setState({find:!1,showSelect:!0})},c.findSelect=function(){return c.setState({find:!0,showSelect:!0})},c.getHeader=function(){return c.state.find?"FIND BEAM":"CHECK BEAM"},c.typeSelect=function(e){c.setState({type:e.target.id}),fetch("https://resteel.herokuapp.com/".concat(e.target.id)).then((function(e){return e.json()})).then((function(e){c.setState({beams:e})}))},c.inputChange=function(e){"XorY"===e.target.name||"fixSim"===e.target.name||"evenPoint"===e.target.name?c.setState(Object(d.a)({},e.target.name,e.target.value)):"safety"===e.target.name||"modifier"===e.target.name?c.setState(Object(d.a)({},e.target.name,parseFloat(e.target.value))):c.setState(Object(d.a)({},e.target.name,parseInt(e.target.value)))},c.beamSelectChange=function(e){var t=c.state.beams[e.target.value];t.i=c.getBeamI(t),t.z=c.getBeamZ(t),c.setState({selectedBeam:t})},c.fetchBeams=function(e,t){fetch("https://resteel.herokuapp.com/".concat(c.state.type,"/").concat(c.state.XorY,"/").concat(e,"/").concat(t)).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){e.i=c.getBeamI(e),e.z=c.getBeamZ(e),c.setState({beam:e,found:!0}),c.getCalcs()})).catch((function(e){console.log("err: ",e)}))},c.findBeam=function(e){e.preventDefault();var t=c.state.defl,s=c.state.span,a=c.state.load*c.state.safety,n=c.state.deflMod[c.state.fixSim][c.state.evenPoint],i=c.state.stressMod[c.state.fixSim][c.state.evenPoint],l=c.state.grade,r=Math.ceil(t*a*Math.pow(s,2)/(205e3*n)/1e4),d=Math.ceil(20*a*s/(17*l*i)/1e3);c.fetchBeams(r,d)},c.checkBeam=function(e){e.preventDefault(),c.setState({beam:c.state.selectedBeam},(function(){c.getCalcs()}))},c.getBeamWeight=function(){return c.state.beam.mass*c.state.span},c.getCalcs=function(){var e=Math.ceil(c.state.load*c.state.safety),t=c.state.stressMod[c.state.fixSim][c.state.evenPoint],s=c.state.deflMod[c.state.fixSim][c.state.evenPoint],a={span:c.state.span,mass:c.state.mass,force:e,load:c.state.load,safety:c.state.safety,defl:c.state.defl,grade:c.state.grade,stress:(e*c.state.span/(t*c.state.beam.z*1e3)).toFixed(2),deflection:(e*Math.pow(c.state.span,3)/(205e3*s*c.state.beam.i*1e4)).toFixed(2)};c.setState({calcObject:a})},c.getBeamI=function(e){return"x"===c.state.XorY?e.ixx:e.iyy},c.getBeamZ=function(e){return"x"===c.state.XorY?e.zxx:e.zyy},c.state={showSelect:!1,find:null,check:!1,type:"",span:0,load:0,defl:250,grade:355,safety:1,XorY:"x",fixSim:"s",evenPoint:"p",stressMod:{f:{e:12,p:8},s:{e:8,p:4}},deflMod:{f:{e:384,p:192},s:{e:78.6,p:48}},found:!1,beams:[],selectedBeam:{},calcObject:{}},c}return Object(h.a)(s,[{key:"componentDidMount",value:function(){fetch("https://resteel.herokuapp.com/").then((function(e){return e.json})).then((function(e){return console.log("ping")}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"calc-con",children:[null===this.state.find?Object(c.jsx)(o,{checkSelect:this.checkSelect,findSelect:this.findSelect}):Object(c.jsx)("div",{}),this.state.showSelect?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:this.getHeader()}),Object(c.jsx)(v,{typeSelect:this.typeSelect,selected:this.state.type})]}):Object(c.jsx)("div",{}),""!==this.state.type?this.state.find?Object(c.jsx)(N,{inputChange:this.inputChange,findBeam:this.findBeam,XorY:this.state.XorY,fixSim:this.state.fixSim,evenPoint:this.state.evenPoint,beam:this.state.beam,calcObject:this.state.calcObject}):Object(c.jsx)(S,{inputChange:this.inputChange,checkBeam:this.checkBeam,XorY:this.state.XorY,fixSim:this.state.fixSim,evenPoint:this.state.evenPoint,beams:this.state.beams,beamSelectChange:this.beamSelectChange,beam:this.state.beam,calcObject:this.state.calcObject}):Object(c.jsx)("div",{}),this.state.beam?Object(c.jsx)(C,{beam:this.state.beam,calcObject:this.state.calcObject,stressMod:this.state.stressMod[this.state.fixSim][this.state.evenPoint],deflMod:this.state.deflMod[this.state.fixSim][this.state.evenPoint]}):Object(c.jsx)("div",{})]})}}]),s}(a.Component);var k=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(r,{}),Object(c.jsx)(y,{})]})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),F()}],[[23,1,2]]]);
//# sourceMappingURL=main.59baa343.chunk.js.map