import{c as h,f as x,h as L,i as M,k as y}from"./chunk-SOZDQI74.js";import{Ba as p,Ca as m,N as r,Pa as o,Qa as n,Ra as g,Ya as a}from"./chunk-4PMED3UX.js";var s=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-apply"]],standalone:!1,decls:2,vars:0,template:function(t,v){t&1&&(o(0,"p"),a(1,"apply works!"),n())},encapsulation:2})};var c=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-leaves"]],standalone:!1,decls:16,vars:0,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"nav"],[1,"nav-item"],["routerLink","apply","routerLinkActive","active",1,"nav-link"],["routerLink","holiday","routerLinkActive","active",1,"nav-link"],["routerLink","balance","routerLinkActive","active",1,"nav-link"],[1,"card-text"]],template:function(t,v){t&1&&(o(0,"div",0)(1,"div",1)(2,"h5",2),a(3,"Leaves"),n(),o(4,"ul",3)(5,"li",4)(6,"a",5),a(7," Apply Leave "),n()(),o(8,"li",4)(9,"a",6),a(10," Check Holidays "),n()(),o(11,"li",4)(12,"a",7),a(13," Leave Balance "),n()()(),o(14,"p",8),g(15,"router-outlet"),n()()())},dependencies:[x,L,M],encapsulation:2})};var d=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-page404leaves"]],standalone:!1,decls:2,vars:0,template:function(t,v){t&1&&(o(0,"p"),a(1,"page404leaves works!"),n())},encapsulation:2})};var f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-holiday"]],standalone:!1,decls:2,vars:0,template:function(t,v){t&1&&(o(0,"p"),a(1,"holiday works!"),n())},encapsulation:2})};var D=[{path:"",component:c,children:[{path:"apply",component:s},{path:"holiday",component:f},{path:"balance",loadChildren:()=>import("./chunk-ATKFQZEJ.js").then(e=>e.BalanceModule)},{path:"",redirectTo:"apply",pathMatch:"full"},{path:"**",component:d}]}],u=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=r({imports:[y.forChild(D),y]})};var k=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=r({imports:[h,u]})};export{k as LeavesModule};