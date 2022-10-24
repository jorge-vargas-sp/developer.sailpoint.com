"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38705],{8861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={id:"static",title:"Static",pagination_label:"Static",sidebar_label:"Static",sidebar_class_name:"static",keywords:["transforms","operations","static"],description:"Return a fixed string value.",slug:"/docs/transforms/operations/static",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/static",id:"docs/identity-now/transforms/operations/static",title:"Static",description:"Return a fixed string value.",source:"@site/products/idn/docs/identity-now/transforms/operations/static.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/static",permalink:"/idn/docs/transforms/operations/static",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/static.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"static",title:"Static",pagination_label:"Static",sidebar_label:"Static",sidebar_class_name:"static",keywords:["transforms","operations","static"],description:"Return a fixed string value.",slug:"/docs/transforms/operations/static",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Split",permalink:"/idn/docs/transforms/operations/split"},next:{title:"Substring",permalink:"/idn/docs/transforms/operations/substring"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the static transform to return a fixed string value, or more commonly, to\nevaluate\n",(0,r.kt)("a",{parentName:"p",href:"https://velocity.apache.org/engine/1.7/user-guide.html"},"Velocity Template Language"),".\nThe latter implementation is often useful when you are using if/then/else logic\nor iterating through a for loop. The static transform can also take other\ndynamically provided variables as inputs into the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," attribute."),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When you are using static transforms within the create profile for a source,\nyou can enter the value directly in the input field if the user selects Static\nas the attribute type."),(0,r.kt)("li",{parentName:"ul"},"Because IdentityNow supports the ability to order attributes in a create\nprofile, you can use the Velocity template of an attribute higher in the list\nto generate a static value for an attribute that is lower in the list. For\nexample, if you wanted to generate an email address based on a display name,\nyou would need to do the follwing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Move the "displayName" attribute higher in the list so that it is created\nbefore the email address.'),(0,r.kt)("li",{parentName:"ul"},'In the "mail" attribute, select Static for the attribute type. In the Static\nValue field, enter ',(0,r.kt)("inlineCode",{parentName:"li"},"$displayName@yourdomain.com"),"."))))),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"In addition to the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes, the static transform\nrequires a value attribute to be specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "value": "Employee"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"static.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," - This must evaluate to a JSON string either through a fixed value\nor through conditional logic using Velocity Template Language."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The static transform can implement variables within the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," expression.\nThese variables can be defined as optional attributes within the transform\nand can themselves be the results of other transforms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This transform uses a dynamic variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"workerType"),", which is set to the\nvalue of the user's HR record's empType value. The static transform then returns\nthat value through the use of Velocity variable notation (i.e.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"$<variableName>"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "workerType": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "empType"\n      },\n      "type": "accountAttribute"\n    },\n    "value": "$workerType"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"This transform extends the previous one to show how you can use if/else logic to\nreturn data based on contingent logic."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "workerType": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "empType"\n      },\n      "type": "accountAttribute"\n    },\n    "value": "#if($workerType==\'Employee\')Full-Time#{else}Contingent#end"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://velocity.apache.org/engine/1.7/user-guide.html"},"https://velocity.apache.org/engine/1.7/user-guide.html"))))}m.isMDXComponent=!0}}]);