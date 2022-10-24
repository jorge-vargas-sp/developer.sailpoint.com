"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42836],{69242:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/docs/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},s=void 0,d={unversionedId:"docs/identity-now/event-triggers/early-access/identity-deleted",id:"docs/identity-now/event-triggers/early-access/identity-deleted",title:"Identity Deleted",description:"Fires after an identity is deleted.",source:"@site/products/idn/docs/identity-now/event-triggers/early-access/identity-deleted.md",sourceDirName:"docs/identity-now/event-triggers/early-access",slug:"/docs/event-triggers/triggers/identity-deleted",permalink:"/idn/docs/event-triggers/triggers/identity-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/early-access/identity-deleted.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/idn/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/docs/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Early Access Event Triggers",permalink:"/idn/docs/event-triggers/early-access"},next:{title:"Source Account Created",permalink:"/idn/docs/event-triggers/triggers/source-account-created"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:l};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled\nin your tenant.")),(0,r.kt)("h2",{id:"event-context"},"Event Context"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flow",src:i(73195).Z,width:"1178",height:"229"})),(0,r.kt)("p",null,"Identity deleted events occur when an identity's associated account is deleted\nfrom the identity's authoritative source. After accounts are aggregated and the\nidentity refresh process finds an identity that is not correlated to an account,\nthe associated identity is deleted from IdentityNow. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045"},"Configuring Correlation"),".\nThe Identity deleted event contains any identity attributes as they are\nconfigured in the identity profile. For more information, see\n",(0,r.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877"},"Mapping Identity Profiles"),"."),(0,r.kt)("p",null,"This event trigger provides a flexible way to extend joiner-mover-leaver\nprocesses. This provides more proactive governance and ensures users can quickly\nget necessary access when they enter your organization."),(0,r.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate provisioning actions\nas part of the leaver workflow."),(0,r.kt)("li",{parentName:"ul"},"Notify a system to trigger another action (e.g. deactivate an employee\u2019s badge\nupon termination).")),(0,r.kt)("p",null,"This is an example input from this trigger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "attributes": {\n    "firstname": "John"\n  }\n}\n')),(0,r.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,r.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0},73195:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-deleted-path-48c9bae187bac0382cda77be26264812.png"}}]);