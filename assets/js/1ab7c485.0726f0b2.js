"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[48311],{738:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));const s={id:"entitlement-list",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","entitlement list"],description:"Gather a list of all entitlements available on the source.",slug:"/docs/saas-connectivity/commands/entitlement-list",tags:["Connectivity","Connector Command"]},l=void 0,o={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/entitlement-list",id:"docs/identity-now/saas-connectivity/connector-commands/entitlement-list",title:"Entitlement List",description:"Gather a list of all entitlements available on the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/entitlement-list.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/entitlement-list",permalink:"/idn/docs/saas-connectivity/commands/entitlement-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/entitlement-list.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"entitlement-list",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","entitlement list"],description:"Gather a list of all entitlements available on the source.",slug:"/docs/saas-connectivity/commands/entitlement-list",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Update",permalink:"/idn/docs/saas-connectivity/commands/account-update"},next:{title:"Entitlement Read",permalink:"/idn/docs/saas-connectivity/commands/entitlement-read"}},r={},m=[{value:"Example StdEntitlementListInput",id:"example-stdentitlementlistinput",level:3},{value:"Example StdEntitlementListOutput",id:"example-stdentitlementlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Defining the Schema",id:"defining-the-schema",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:m};function c(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementListInput")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementListOutput")))),(0,a.kt)("h3",{id:"example-stdentitlementlistinput"},"Example StdEntitlementListInput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "type": "group"\n}\n')),(0,a.kt)("h3",{id:"example-stdentitlementlistoutput"},"Example StdEntitlementListOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The entitlement list command triggers during a manual or scheduled entitlement\naggregation operation within IDN. This operation gathers a list of all\nentitlements available on the target source, usually multi-valued entitlements\nlike groups or roles. This operation provides IDN administrators with a list of\nentitlements available on the source so they can create access profiles and\nroles accordingly, and it provides IDN with more details about the entitlements.\nThe entitlement schema\u2019s minimum requirements are name and ID, but you can add\nother values, such as created date, updated date, status, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Discover Schema 4",src:n(83917).Z,width:"2628",height:"1228"})),(0,a.kt)("h2",{id:"defining-the-schema"},"Defining the Schema"),(0,a.kt)("p",null,"The entitlement schema is defined in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json"},"connector-spec.json"),"\nfile. Currently, only the multi-valued \u201cgroup\u201d type is supported. The following\nvalues are the minimum requirements, but you can add more attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n"entitlementSchemas": [\n {\n  "type": "group",\n  "displayAttribute": "name",\n  "identityAttribute": "id",\n  "attributes": [\n   {\n    "name": "id",\n    "type": "string",\n    "description": "Unique ID of the group (ex. admin)"\n   },\n   {\n    "name": "name",\n    "type": "string",\n    "description": "The display name of the group (ex. Admin)"\n   }\n  ]\n }\n],\n...\n')),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"This can be implemented in the main connector file,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {\n    const groups = await airtable.getAllEntitlements()\n\n    for (const group of groups) {\n        res.send(group.toStdEntitlementListOutput())\n    }\n})\n...\n...\n...\npublic toStdEntitlementListOutput(): StdEntitlementListOutput {\n    return this.buildStandardObject();\n}\nprivate buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {\n    return {\n        key: SimpleKey(this.id),\n        type: 'group',\n        attributes: {\n            id: this.id,\n            name: this.name\n        }\n    }\n}\n")))}c.isMDXComponent=!0},83917:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/entitlement_list_idn-746c496b20dbf4823d27a3b9f63af578.png"}}]);