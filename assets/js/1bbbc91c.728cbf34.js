"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64714],{53793:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const a={id:"trim",title:"Trim",pagination_label:"Trim",sidebar_label:"Trim",sidebar_class_name:"trim",keywords:["transforms","operations","trim"],description:"Trim whitespaces from both the beginning and ending of input strings.",slug:"/docs/transforms/operations/trim",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/trim",id:"docs/identity-now/transforms/operations/trim",title:"Trim",description:"Trim whitespaces from both the beginning and ending of input strings.",source:"@site/products/idn/docs/identity-now/transforms/operations/trim.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/trim",permalink:"/idn/docs/transforms/operations/trim",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/trim.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"trim",title:"Trim",pagination_label:"Trim",sidebar_label:"Trim",sidebar_class_name:"trim",keywords:["transforms","operations","trim"],description:"Trim whitespaces from both the beginning and ending of input strings.",slug:"/docs/transforms/operations/trim",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Substring",permalink:"/idn/docs/transforms/operations/substring"},next:{title:"Upper",permalink:"/idn/docs/transforms/operations/upper"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],l={toc:m};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Use the trim transform to trim whitespaces from both the beginning and ending of\ninput strings."),(0,i.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,i.kt)("p",null,"The trim transform only requires the transform's ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Required Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"trim"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the\ninput data passed into the transform logic. If no input is provided, the\ntransform takes its input from the source and attribute combination\nconfigured with the UI.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,'This transform removes the whitespace before the " Vice President" input.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Input: " Vice President"\nOutput: "Vice President"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": " Vice President"\n      },\n      "type": "static"\n    }\n  },\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,'This transform removes the whitespace after the "Austin, Texas" input.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Austin, Texas "\nOutput: "Austin, Texas"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "Austin, Texas "\n      },\n      "type": "static"\n    }\n  },\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')))}u.isMDXComponent=!0}}]);