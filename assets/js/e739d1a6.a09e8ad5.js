"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45227],{49324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>T,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),o=a(74933),l=a(47507),c=a(24310),d=a(63303),p=(a(75035),a(85162));const m={id:"saved-search-get",sidebar_label:"Return a saved search by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Saved Search"],description:"Returns the specified saved search.\n",operationId:"savedSearchGet",parameters:[{in:"path",name:"id",description:"ID of the requested document.",schema:{type:"string"},required:!0,example:"2c91808568c529c60168cca6f90c1313"}],responses:{200:{description:"The requested saved search.",content:{"application/json":{schema:{type:"object",allOf:[{type:"object",properties:{id:{description:"The saved search ID.\n",type:"string",example:"0de46054-fe90-434a-b84e-c6b3359d0c64"},owner:{description:"The owner of the saved search.\n",type:"object",properties:{type:{type:"string",enum:["ACCOUNT_CORRELATION_CONFIG","ACCESS_PROFILE","ACCESS_REQUEST_APPROVAL","ACCOUNT","APPLICATION","CAMPAIGN","CAMPAIGN_FILTER","CERTIFICATION","CLUSTER","CONNECTOR_SCHEMA","ENTITLEMENT","GOVERNANCE_GROUP","IDENTITY","IDENTITY_PROFILE","IDENTITY_REQUEST","LIFECYCLE_STATE","PASSWORD_POLICY","ROLE","RULE","SOD_POLICY","SOURCE","TAG_CATEGORY","TASK_RESULT","REPORT_RESULT","SOD_VIOLATION","ACCOUNT_ACTIVITY"],description:"An enumeration of the types of DTOs supported within the IdentityNow infrastructure.",example:"IDENTITY"},id:{description:"The id of the object.\n",type:"string",example:"2c91808568c529c60168cca6f90c1313"}},required:["type","id"]}}},{type:"object",properties:{name:{description:"The name of the saved search.\n",type:"string",example:"Disabled accounts"},description:{description:"The description of the saved search.\n",type:"string",example:"Disabled accounts"}}},{type:"object",properties:{public:{description:"Indicates if the saved search is public.\n",type:"boolean",default:!1,example:!1},created:{description:"The date the saved search was initially created.\n",type:"string",nullable:!0,format:"date-time",example:"2018-06-25T20:22:28.104Z"},modified:{description:"The last date the saved search was modified.\n",type:"string",nullable:!0,format:"date-time",example:"2018-06-25T20:22:28.104Z"},indices:{description:"The names of the Elasticsearch indices in which to search.\n",type:"array",items:{description:"Enum representing the currently supported indices.\nAdditional values may be added in the future without notice.",type:"string",enum:["accessprofiles","accountactivities","entitlements","events","identities","roles"],example:"identities"},example:["identities"]},columns:{description:"The columns to be returned (specifies the order in which they will be presented) for each document type.\n\nThe currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.\n",type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{field:{description:"The name of the field.\n",type:"string",example:"email"},header:{description:"The value of the header.\n",type:"string",example:"Work Email"}},required:["field"]}},example:{identity:[{field:"displayName",header:"Display Name"},{field:"email",header:"Work Email"},{field:"attributes.cloudLifecycleState",header:"Lifecycle State"}]}},query:{description:"The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.\n",type:"string",example:"@accounts(disabled:true)"},fields:{description:"The fields to be searched against in a multi-field query.\n",type:"array",items:{type:"string"},example:["disabled"]},sort:{description:"The fields to be used to sort the search results.\n",type:"array",items:{type:"string"},example:["displayName"]},filters:{nullable:!0,allOf:[{type:"object",description:"The filters to be applied for each filtered field name.",example:{"attributes.cloudAuthoritativeSource":{type:"EXISTS",exclude:!0},accessCount:{type:"RANGE",range:{lower:{value:"3"}}},created:{type:"RANGE",range:{lower:{value:"2019-12-01",inclusive:!0},upper:{value:"2020-01-01"}}},"source.name":{type:"TERMS",terms:["HR Employees","Corporate Active Directory"],exclude:!0},protected:{type:"TERMS",terms:["true"]}}},{type:"object",properties:{type:{description:"Enum representing the currently supported filter types.\nAdditional values may be added in the future without notice.",type:"string",enum:["EXISTS","RANGE","TERMS"],example:"RANGE"},range:{type:"object",description:"The range of values to be filtered.",properties:{lower:{description:"The lower bound of the range.",type:"object",required:["value"],properties:{value:{description:"The value of the range's endpoint.",type:"string",example:"1"},inclusive:{description:"Indicates if the endpoint is included in the range.",type:"boolean",default:!1,example:!1}}},upper:{description:"The upper bound of the range.",type:"object",required:["value"],properties:{value:{description:"The value of the range's endpoint.",type:"string",example:"1"},inclusive:{description:"Indicates if the endpoint is included in the range.",type:"boolean",default:!1,example:!1}}}}},terms:{description:"The terms to be filtered.",type:"array",items:{type:"string",example:"account_count"}},exclude:{description:"Indicates if the filter excludes results.",type:"boolean",default:!1,example:!1}}}]}},required:["indices","query"]}]}}}},404:{description:"Not Found - returned if the request URL refers to a resource or object that does not exist",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{404:{summary:"An example of a 404 response object",value:{detailCode:"404 Not found",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server did not find a current representation for the target resource."}]}}}}}}},method:"get",path:"/saved-searches/{id}",servers:[{url:"https://{tenant}.api.identitynow.com/v3",description:"This is the production API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow V3 API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.0.0"},postman:{name:"Return a saved search by ID",description:{content:"Returns the specified saved search.\n",type:"text/plain"},url:{path:["saved-searches",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the requested document.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/v3/identity-now-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Return a saved search by ID' (saved-search-get)"},u=void 0,h={unversionedId:"api/v3/saved-search-get",id:"api/v3/saved-search-get",title:"saved-search-get",description:"Return a saved search by ID",source:"@site/products/idn/api/v3/saved-search-get.api.mdx",sourceDirName:"api/v3",slug:"/api/v3/saved-search-get",permalink:"/idn/api/v3/saved-search-get",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Return a saved search by ID' (saved-search-get)",tags:[],version:"current",frontMatter:{id:"saved-search-get",sidebar_label:"Return a saved search by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Saved Search"],description:"Returns the specified saved search.\n",operationId:"savedSearchGet",parameters:[{in:"path",name:"id",description:"ID of the requested document.",schema:{type:"string"},required:!0,example:"2c91808568c529c60168cca6f90c1313"}],responses:{200:{description:"The requested saved search.",content:{"application/json":{schema:{type:"object",allOf:[{type:"object",properties:{id:{description:"The saved search ID.\n",type:"string",example:"0de46054-fe90-434a-b84e-c6b3359d0c64"},owner:{description:"The owner of the saved search.\n",type:"object",properties:{type:{type:"string",enum:["ACCOUNT_CORRELATION_CONFIG","ACCESS_PROFILE","ACCESS_REQUEST_APPROVAL","ACCOUNT","APPLICATION","CAMPAIGN","CAMPAIGN_FILTER","CERTIFICATION","CLUSTER","CONNECTOR_SCHEMA","ENTITLEMENT","GOVERNANCE_GROUP","IDENTITY","IDENTITY_PROFILE","IDENTITY_REQUEST","LIFECYCLE_STATE","PASSWORD_POLICY","ROLE","RULE","SOD_POLICY","SOURCE","TAG_CATEGORY","TASK_RESULT","REPORT_RESULT","SOD_VIOLATION","ACCOUNT_ACTIVITY"],description:"An enumeration of the types of DTOs supported within the IdentityNow infrastructure.",example:"IDENTITY"},id:{description:"The id of the object.\n",type:"string",example:"2c91808568c529c60168cca6f90c1313"}},required:["type","id"]}}},{type:"object",properties:{name:{description:"The name of the saved search.\n",type:"string",example:"Disabled accounts"},description:{description:"The description of the saved search.\n",type:"string",example:"Disabled accounts"}}},{type:"object",properties:{public:{description:"Indicates if the saved search is public.\n",type:"boolean",default:!1,example:!1},created:{description:"The date the saved search was initially created.\n",type:"string",nullable:!0,format:"date-time",example:"2018-06-25T20:22:28.104Z"},modified:{description:"The last date the saved search was modified.\n",type:"string",nullable:!0,format:"date-time",example:"2018-06-25T20:22:28.104Z"},indices:{description:"The names of the Elasticsearch indices in which to search.\n",type:"array",items:{description:"Enum representing the currently supported indices.\nAdditional values may be added in the future without notice.",type:"string",enum:["accessprofiles","accountactivities","entitlements","events","identities","roles"],example:"identities"},example:["identities"]},columns:{description:"The columns to be returned (specifies the order in which they will be presented) for each document type.\n\nThe currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.\n",type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{field:{description:"The name of the field.\n",type:"string",example:"email"},header:{description:"The value of the header.\n",type:"string",example:"Work Email"}},required:["field"]}},example:{identity:[{field:"displayName",header:"Display Name"},{field:"email",header:"Work Email"},{field:"attributes.cloudLifecycleState",header:"Lifecycle State"}]}},query:{description:"The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.\n",type:"string",example:"@accounts(disabled:true)"},fields:{description:"The fields to be searched against in a multi-field query.\n",type:"array",items:{type:"string"},example:["disabled"]},sort:{description:"The fields to be used to sort the search results.\n",type:"array",items:{type:"string"},example:["displayName"]},filters:{nullable:!0,allOf:[{type:"object",description:"The filters to be applied for each filtered field name.",example:{"attributes.cloudAuthoritativeSource":{type:"EXISTS",exclude:!0},accessCount:{type:"RANGE",range:{lower:{value:"3"}}},created:{type:"RANGE",range:{lower:{value:"2019-12-01",inclusive:!0},upper:{value:"2020-01-01"}}},"source.name":{type:"TERMS",terms:["HR Employees","Corporate Active Directory"],exclude:!0},protected:{type:"TERMS",terms:["true"]}}},{type:"object",properties:{type:{description:"Enum representing the currently supported filter types.\nAdditional values may be added in the future without notice.",type:"string",enum:["EXISTS","RANGE","TERMS"],example:"RANGE"},range:{type:"object",description:"The range of values to be filtered.",properties:{lower:{description:"The lower bound of the range.",type:"object",required:["value"],properties:{value:{description:"The value of the range's endpoint.",type:"string",example:"1"},inclusive:{description:"Indicates if the endpoint is included in the range.",type:"boolean",default:!1,example:!1}}},upper:{description:"The upper bound of the range.",type:"object",required:["value"],properties:{value:{description:"The value of the range's endpoint.",type:"string",example:"1"},inclusive:{description:"Indicates if the endpoint is included in the range.",type:"boolean",default:!1,example:!1}}}}},terms:{description:"The terms to be filtered.",type:"array",items:{type:"string",example:"account_count"}},exclude:{description:"Indicates if the filter excludes results.",type:"boolean",default:!1,example:!1}}}]}},required:["indices","query"]}]}}}},404:{description:"Not Found - returned if the request URL refers to a resource or object that does not exist",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{404:{summary:"An example of a 404 response object",value:{detailCode:"404 Not found",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"The server did not find a current representation for the target resource."}]}}}}}}},method:"get",path:"/saved-searches/{id}",servers:[{url:"https://{tenant}.api.identitynow.com/v3",description:"This is the production API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow V3 API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.0.0"},postman:{name:"Return a saved search by ID",description:{content:"Returns the specified saved search.\n",type:"text/plain"},url:{path:["saved-searches",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the requested document.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"idn/api/v3/identity-now-v-3-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Return a saved search by ID' (saved-search-get)"},sidebar:"openApiSidebar",previous:{title:"Updates an existing saved search",permalink:"/idn/api/v3/saved-search-update"},next:{title:"Delete a document by ID",permalink:"/idn/api/v3/saved-search-delete"}},y={},f=[{value:"Return a saved search by ID",id:"return-a-saved-search-by-id",level:2}],g={toc:f};function T(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"return-a-saved-search-by-id"},"Return a saved search by ID"),(0,s.kt)("p",null,"Returns the specified saved search."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"id",description:"ID of the requested document.",schema:{type:"string"},required:!0,example:"2c91808568c529c60168cca6f90c1313"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requested saved search.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"The saved search ID.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"owner"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The owner of the saved search.")),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"An enumeration of the types of DTOs supported within the IdentityNow infrastructure.",schemaName:"string",qualifierMessage:"**Possible values:** [`ACCOUNT_CORRELATION_CONFIG`, `ACCESS_PROFILE`, `ACCESS_REQUEST_APPROVAL`, `ACCOUNT`, `APPLICATION`, `CAMPAIGN`, `CAMPAIGN_FILTER`, `CERTIFICATION`, `CLUSTER`, `CONNECTOR_SCHEMA`, `ENTITLEMENT`, `GOVERNANCE_GROUP`, `IDENTITY`, `IDENTITY_PROFILE`, `IDENTITY_REQUEST`, `LIFECYCLE_STATE`, `PASSWORD_POLICY`, `ROLE`, `RULE`, `SOD_POLICY`, `SOURCE`, `TAG_CATEGORY`, `TASK_RESULT`, `REPORT_RESULT`, `SOD_VIOLATION`, `ACCOUNT_ACTIVITY`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"The id of the object.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name of the saved search.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaDescription:"The description of the saved search.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"public",required:!1,schemaDescription:"Indicates if the saved search is public.\n",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"The date the saved search was initially created.\n",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"modified",required:!1,schemaDescription:"The last date the saved search was modified.\n",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"indices",required:!1,schemaDescription:"The names of the Elasticsearch indices in which to search.\n",schemaName:"string[]",qualifierMessage:"**Possible values:** [`accessprofiles`, `accountactivities`, `entitlements`, `events`, `identities`, `roles`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"columns"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The columns to be returned (specifies the order in which they will be presented) for each document type."),(0,s.kt)("p",null,"The currently supported document types are: ",(0,s.kt)("em",{parentName:"p"},"accessprofile"),", ",(0,s.kt)("em",{parentName:"p"},"accountactivity"),", ",(0,s.kt)("em",{parentName:"p"},"account"),", ",(0,s.kt)("em",{parentName:"p"},"aggregation"),", ",(0,s.kt)("em",{parentName:"p"},"entitlement"),", ",(0,s.kt)("em",{parentName:"p"},"event"),", ",(0,s.kt)("em",{parentName:"p"},"identity"),", and ",(0,s.kt)("em",{parentName:"p"},"role"),".")),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"items"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"field",required:!1,schemaDescription:"The name of the field.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"header",required:!1,schemaDescription:"The value of the header.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"query",required:!1,schemaDescription:"The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.\n",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"fields",required:!1,schemaDescription:"The fields to be searched against in a multi-field query.\n",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"sort",required:!1,schemaDescription:"The fields to be used to sort the search results.\n",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"filters"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The filters to be applied for each filtered field name.")),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"Enum representing the currently supported filter types.\nAdditional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`EXISTS`, `RANGE`, `TERMS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"range"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The range of values to be filtered.")),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"lower"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The lower bound of the range.")),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The value of the range's endpoint.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"inclusive",required:!1,schemaDescription:"Indicates if the endpoint is included in the range.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"upper"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The upper bound of the range.")),(0,s.kt)(c.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The value of the range's endpoint.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"inclusive",required:!1,schemaDescription:"Indicates if the endpoint is included in the range.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"terms",required:!1,schemaDescription:"The terms to be filtered.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"exclude",required:!1,schemaDescription:"Indicates if the filter excludes results.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "id": "string",\n  "owner": {\n    "type": "ACCOUNT_CORRELATION_CONFIG",\n    "id": "string"\n  },\n  "name": "string",\n  "description": "string",\n  "public": false,\n  "created": "2022-10-24",\n  "modified": "2022-10-24",\n  "indices": [\n    "accessprofiles"\n  ],\n  "columns": {},\n  "query": "string",\n  "fields": [\n    "string"\n  ],\n  "sort": [\n    "string"\n  ],\n  "filters": {\n    "type": "EXISTS",\n    "range": {\n      "lower": {\n        "value": "string",\n        "inclusive": false\n      },\n      "upper": {\n        "value": "string",\n        "inclusive": false\n      }\n    },\n    "terms": [\n      "string"\n    ],\n    "exclude": false\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found - returned if the request URL refers to a resource or object that does not exist")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"messages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"causes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "detailCode": "string",\n  "trackingId": "string",\n  "messages": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ],\n  "causes": [\n    {\n      "locale": "string",\n      "localeOrigin": "DEFAULT",\n      "text": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "detailCode": "404 Not found",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server did not find a current representation for the target resource."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);