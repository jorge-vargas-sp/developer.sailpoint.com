"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39924],{2854:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=i(87462),l=(i(67294),i(3905)),r=i(52991),a=i(53438);const o={id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:1,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/docs/rules/cloud-rules",tags:["Rules"]},s=void 0,u={unversionedId:"docs/identity-now/rules/cloud-rules/cloud-executed-rules",id:"docs/identity-now/rules/cloud-rules/cloud-executed-rules",title:"Cloud Executed Rules",description:"Overview of cloud-executed rules",source:"@site/products/idn/docs/identity-now/rules/cloud-rules/index.md",sourceDirName:"docs/identity-now/rules/cloud-rules",slug:"/docs/rules/cloud-rules",permalink:"/idn/docs/rules/cloud-rules",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/cloud-rules/index.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",sidebarPosition:1,frontMatter:{id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:1,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/docs/rules/cloud-rules",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"Rules",permalink:"/idn/docs/rules"},next:{title:"Account Profile Attribute Generator",permalink:"/idn/docs/rules/cloud-rules/account-profile-attribute-generator"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Supported Cloud Rules",id:"supported-cloud-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Submitting for Rule Review",id:"submitting-for-rule-review",level:2},{value:"Review Guidelines",id:"review-guidelines",level:2},{value:"Review Expectations",id:"review-expectations",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cloud-Executed Rules")," or ",(0,l.kt)("strong",{parentName:"p"},"Cloud Rules")," typically only perform a\nspecific function, such as calculating attribute values.\nCloud Rules all execute within the SailPoint cloud and offer access to\nobjects and data, but they do not offer any sort of externalized\nconnectivity."),(0,l.kt)("p",null,"Because these rules execute in a multi-tenant cloud environment, they have a very\nrestricted context, and the review process is carefully scrutinized to ensure\nthat they execute in an efficient and secure manner."),(0,l.kt)("h2",{id:"supported-cloud-rules"},"Supported Cloud Rules"),(0,l.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}),(0,l.kt)("h2",{id:"configuration-process"},"Configuration Process"),(0,l.kt)("p",null,"To ensure maximum compatibility, platform integrity, and security, SailPoint has\ninstantiated a review process to ensure that any submitted Cloud Rules meet SailPoint\nrequirements and that they do not contain code that can harm the system.\nThe review process also checks the rules to verify their intended purposes and use cases."),(0,l.kt)("p",null,"In this process, SailPoint does ",(0,l.kt)("em",{parentName:"p"},"not check")," whether the rule executes correctly\nor verify that it works as expected to deliver specific outcomes. The review is merely\nan integrity check on the rule itself."),(0,l.kt)("h2",{id:"submitting-for-rule-review"},"Submitting for Rule Review"),(0,l.kt)("p",null,"To submit your Cloud Rule for review, approval, and inclusion in the\nSailPoint platform, submit them with\n",(0,l.kt)("a",{parentName:"p",href:"https://www.sailpoint.com/services/professional/"},"SailPoint Professional Services"),".\nIf you need help writing and testing rules, Professional Services can help you with\nthat process as well. Make sure your contact information is up to date,\nin case the review team needs to contact you."),(0,l.kt)("h2",{id:"review-guidelines"},"Review Guidelines"),(0,l.kt)("p",null,"All submitted rules must follow proper rule submission guidelines."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Best Practices"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ensure that all rule configurations are complete and accurate."),(0,l.kt)("li",{parentName:"ul"},"Check whether your rule follows SailPoint best practice guidance, and ensure that you have\nconsidered other product features first."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rule Quality"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Rules must follow the ",(0,l.kt)("a",{parentName:"li",href:"/idn/docs/rules#rule-guidelines"},"Rule Guidelines"),"\nand ",(0,l.kt)("a",{parentName:"li",href:"/idn/docs/rules#rule-code-restrictions"},"Code Restrictions")),(0,l.kt)("li",{parentName:"ul"},"Rules must be adequately tested prior to submission."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Documentation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Include detailed comments for non-obvious features in the configurations,\nincluding supporting documentation where appropriate. This includes\njustification for why something was created or done in a certain way. -\n",(0,l.kt)("em",{parentName:"li"},"e.g. I did this because...")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Standards"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Rules must omit commented out blocks or unfinished, incomplete, or untested\ncode."),(0,l.kt)("li",{parentName:"ul"},"Rules must be submitted with appropriate UTF-8 encoding."),(0,l.kt)("li",{parentName:"ul"},"Rules must convert url-encoded characters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&amp;")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},"&")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&lt;")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&gt;")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},">")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rule File Naming"))),(0,l.kt)("p",null,"The file naming convention for rules is: ",(0,l.kt)("inlineCode",{parentName:"p"},"Rule - {type} - {name}.xml")),(0,l.kt)("p",null,"If this is your rule:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">')),(0,l.kt)("p",null,"This should be your file name:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rule - IdentityAttribute - Calculate Lifecycle.xml")),(0,l.kt)("p",null,'If you do not have a type, use "Generic" as the type. It would look\nlike this:'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rule - Generic - My Generic Rule.xml")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Updating Existing Rules and Versioning")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The best practice is to maintain a single rule for a given use case in the\ntenant. Creating additional rules while updating to maintain versioning is\nnot supported because doing so may cause issues during reviews and support."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example:"),' For an AD Before Provisioning rule called "AD\nBeforeProvisioningRule", you have the file "Rule - BeforeProvisioning -\nAD BeforeProvisioningRule.xml". When you are updating the logic for AD, it is best\nto update the file/rule with the same name, so changes can be properly\ntracked to the single object.'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deployment Window Requirements")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Rules are generally reviewed and deployed, if they are accepted\nwithout feedback, within 24 hours."),(0,l.kt)("li",{parentName:"ul"},"If specific windows are required and you want full control of when a rule\nis updated, use these steps to follow the versioning best practices:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Submit your request for a new rule with the name: ",(0,l.kt)("inlineCode",{parentName:"li"},"<original name>-TEMP")),(0,l.kt)("li",{parentName:"ul"},"Apply the new rule during the change window."),(0,l.kt)("li",{parentName:"ul"},"Validate the updated rule logic."),(0,l.kt)("li",{parentName:"ul"},"Once the rule is validated, submit your request to update original rule with the updated logic."),(0,l.kt)("li",{parentName:"ul"},"Once the original rule is updated, apply the original rule as the production\nconfiguration."),(0,l.kt)("li",{parentName:"ul"},"Submit your request to delete the TEMP rule.")))))),(0,l.kt)("h2",{id:"review-expectations"},"Review Expectations"),(0,l.kt)("p",null,"Once you have submitted your rule and you are in the review process, remember these points:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Timing:")," SailPoint will examine your rule as soon as possible. Most rules are\nreviewed within 24 hours of submission. However, if your rule is complex,\npoorly documented, hard to read, or if it presents new issues, it may require\ngreater scrutiny and consideration. If your rule is repeatedly rejected for\nthe same guideline violation, your rule's review may take longer to complete."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status Updates:")," Your rule's current status will be reflected in your\n",(0,l.kt)("a",{parentName:"li",href:"https://www.sailpoint.com/services/professional/#contact-form"},"SailPoint Expert Services request"),",\nso you can monitor its progress there."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Expedite Requests:")," If you have a critical timing issue, you can request an\nexpedited review. Respect your fellow implementers by seeking expedited\nreview only when you truly need it. If you are found to be abusing this system, SailPoint\nmay reject further requests going forward."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rejections:")," SailPoint's goal is to apply these guidelines fairly and consistently,\nbut mistaken rejections can happen. If your rule has been rejected and you have questions or you\nwould like to provide additional information, communicate directly with\nthe rule review team. This may help get your rule into IdentityNow, and it can\nhelp SailPoint improve the process or identify a need for clarity in its policies. If\nyou still disagree with the outcome, let SailPoint know and someone can look into it."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Changes:")," Rule changes or modifications to meet guidelines are not the reviewer's\nresponsibility. They are the responsibility of the person(s) submitting the rule.\nReviewers may give advice, examples, etc. to\nhelp, but doing so does not guarantee a solution. You should test the rules with the changes\nbefore resubmission.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(67294),l=i(86010),r=i(53438),a=i(39960),o=i(13919),s=i(95999);const u="cardContainer_fWXF",d="cardTitle_rnsV",c="cardDescription_PWke";function p(e){let{href:t,children:i}=e;return n.createElement(a.Z,{href:t,className:(0,l.Z)("card padding--lg",u)},i)}function m(e){let{href:t,icon:i,title:r,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,l.Z)("text--truncate",d),title:r},i," ",r),a&&n.createElement("p",{className:(0,l.Z)("text--truncate",c),title:a},a))}function h(e){let{item:t}=e;const i=(0,r.Wl)(t);return i?n.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){var t;let{item:i}=e;const l=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(m,{href:i.href,icon:l,title:i.label,description:null==a?void 0:a.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(k,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{items:t,className:i}=e;return n.createElement("section",{className:(0,l.Z)("row",i)},function(e){return e.filter((e=>"category"!==e.type||!!(0,r.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}}}]);