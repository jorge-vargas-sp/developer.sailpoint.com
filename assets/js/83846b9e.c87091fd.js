"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60332],{69439:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"first-valid",title:"First Valid",pagination_label:"First Valid",sidebar_label:"First Valid",sidebar_class_name:"firstValid",keywords:["transforms","operations","first","valid"],description:"Return the first piece of data that is not null.",slug:"/docs/transforms/operations/first-valid",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/first-valid",id:"docs/identity-now/transforms/operations/first-valid",title:"First Valid",description:"Return the first piece of data that is not null.",source:"@site/products/idn/docs/identity-now/transforms/operations/first-valid.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/first-valid",permalink:"/idn/docs/transforms/operations/first-valid",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/first-valid.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"first-valid",title:"First Valid",pagination_label:"First Valid",sidebar_label:"First Valid",sidebar_class_name:"firstValid",keywords:["transforms","operations","first","valid"],description:"Return the first piece of data that is not null.",slug:"/docs/transforms/operations/first-valid",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"E.164 Phone",permalink:"/idn/docs/transforms/operations/e164-phone"},next:{title:"Generate Random String",permalink:"/idn/docs/transforms/operations/generate-random-string"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the first valid transform to perform if/then/else operations on multiple\ndifferent data points to return the first piece of data that is not null. This\nis often useful for the SailPoint username (uid) attribute in which case each\nidentity requires a value, but the desired information is not available yet\n(e.g., Active Directory username). In these cases, you can use a first valid\ntransform to populate the uid attribute with the user's linked Active Directory\n(AD) account information if the uid attribute is not null. If the attribute is\nnull, use a different attribute from a source that the user does have, like\nhis/her employee number."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The first valid transform requires an array list of ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," that you must\nconsider. These can be static strings or other nested transforms' return values.\nRemember that the transform returns the first entry in the array that evaluates\nto a non-null value, so you are recommended to provide the entries in the array\nin descending order of preference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "sAMAccountName"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "Okta",\n          "attributeName": "login"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "employeeID"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "Test First Valid Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"firstValid"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"values")," - This is an array of attributes to evaluate for existence."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ignoreErrors")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether to proceed\nto the next option if an error (like an NPE) occurs.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This transform first attempts to return the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"sAMAccountName")," from his/her\nAD account. In the event that the user does not have an AD account, the\ntransform then attempts to return the user's Okta login. If the Okta login is\nalso blank, the transform returns the user's employee ID from his/her HR record."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "sAMAccountName"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "Okta",\n          "attributeName": "login"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "employeeID"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "First Valid Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform is often useful for populating the work email identity attribute.\nSince the work email attribute is a required field for a valid identity, it\ncannot be blank. However, often new hires do not have an AD account and/or email\nprovisioned until after the user has been provisioned. A common practice in this\nsituation is to return a static string of "none" to ensure that this required\nattribute does not remain empty.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "mail"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "value": "none"\n        },\n        "type": "static"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "First Valid Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform is often useful for populating an attribute called "Manager DN".\nIt pulls the manager of the identity and then gets the identity attribute\n"Network DN" for the manager. "Network DN" pulls directly from\n',(0,a.kt)("inlineCode",{parentName:"p"},"distinguishedName")," in AD. With this transform, you can set a user's manager's\nDN as an identity attribute to allow for attribute sync down to AD. Without\n",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreErrors")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", this transform throws a null pointer exception\n(NPE) for any user without a manager. With ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreErrors")," set to true, the first\nvalue in the ",(0,a.kt)("inlineCode",{parentName:"p"},"firstValid"),' throws an error for users without managers, but the\nerror is ignored, and the transform selects the empty string to set the "Manager\nDN" identity attribute to.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "ignoreErrors": "true",\n    "values": [\n      {\n        "attributes": {\n          "value": "$identity.manager.attributes.networkDn"\n        },\n        "type": "static"\n      },\n      ""\n    ]\n  },\n  "name": "Example_Transform_ManagerDN",\n  "type": "firstValid"\n}\n')))}m.isMDXComponent=!0}}]);