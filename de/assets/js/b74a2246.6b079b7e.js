"use strict";(self.webpackChunkstudyu_docs=self.webpackChunkstudyu_docs||[]).push([[190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),p=i,f=c["".concat(d,".").concat(p)]||c[p]||h[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Overview",s={unversionedId:"designer/overview",id:"designer/overview",title:"Overview",description:"Designer Lifecycle",source:"@site/docs/04-designer/01-overview.md",sourceDirName:"04-designer",slug:"/designer/overview",permalink:"/de/docs/designer/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StudyU Designer",permalink:"/de/docs/category/studyu-designer"},next:{title:"Development",permalink:"/de/docs/category/development"}},d={},l=[{value:"1. How to use the StudyU Designer",id:"1-how-to-use-the-studyu-designer",level:2},{value:"1.1 Dashboard",id:"11-dashboard",level:3},{value:"1.2 Editor",id:"12-editor",level:3}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Designer Lifecycle",src:n(7086).Z,width:"8192",height:"2974"})),(0,i.kt)("h2",{id:"1-how-to-use-the-studyu-designer"},"1. How to use the StudyU Designer"),(0,i.kt)("p",null,"The StudyU designer is divided into two main components, the dashboard and the editor."),(0,i.kt)("h3",{id:"11-dashboard"},"1.1 Dashboard"),(0,i.kt)("p",null,"The dashboard includes two lists of studies: draft studies (studies that are still being worked on and can still be deleted) and published studies that users can participate in (results are downloadable). By clicking on a draft study or the add button, the editor is opened."),(0,i.kt)("h3",{id:"12-editor"},"1.2 Editor"),(0,i.kt)("p",null,"The editor allows specification of different study aspects according to the study model. The editor is split further into sections (arranged in a logical order, but you can switch between them)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Meta Data: This section allows you to edit the study title, description and select a descriptive icon to represent your study."),(0,i.kt)("li",{parentName:"ol"},"Interventions: Here you can define the different interventions that are offered to the user, including the tasks each intervention comprises and how these tasks are to be scheduled."),(0,i.kt)("li",{parentName:"ol"},"Eligibility Questions: In the questionnaire, the eligibility questions are added which the user needs to answer before participating in the study. You can specify Boolean questions as well as single and multiple-choice questions. The answers of the user to these questions are not stored and are not available in the downloadable study data."),(0,i.kt)("li",{parentName:"ol"},"Eligibility Criteria: Using the questions defined in the section before, you are now able to define the eligibility criteria by specifying which answers lead to an exclusion, together with a reasoning for the users on why they are excluded. This section can only be edited once the eligibility questionnaire above contains at least one question."),(0,i.kt)("li",{parentName:"ol"},"Observations: In this section you can define the observations the user has to report on and how they are to be scheduled. In the current version the user can be asked to answer different questions. Additionally, you can also set up slider questions."),(0,i.kt)("li",{parentName:"ol"},"Schedule: Here you can edit the study\u2019s schedule information, number of cycles, phase duration, whether or not a baseline phase should be included, and the sequence of the interventions. Please consider that different interventions have different impacts, e.g., a longer washout period or a longer time until an effect can be observed."),(0,i.kt)("li",{parentName:"ol"},"Report: You can define the setup of the report the user receives. You are able to add and configure the different report sections."),(0,i.kt)("li",{parentName:"ol"},"Results: You can specify which observation results you want to include in your data export."),(0,i.kt)("li",{parentName:"ol"},"Consent: You can set up the study specific consent form in a modular way."),(0,i.kt)("li",{parentName:"ol"},"Publish: Here you can save the study as a draft or publish it. If saved as draft, you can continue editing the study at a later point in time. When you want to publish the study, it is first validated, to check whether all necessary aspects are specified. Once published it is available to the users of the StudyU app.")))}c.isMDXComponent=!0},7086:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/designer_lifecycle-fc4b4b612d1b6b4ca4b7f0f41b549c33.png"}}]);