"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17261],{36884:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=e(87462),t=(e(67294),e(3905));const i={id:"error-handling",title:"Error Handling",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"errorHandling",keywords:["connectivity","connectors","error handling"],description:"Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong.",slug:"/docs/saas-connectivity/in-depth/error-handling",tags:["Connectivity"]},a=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/in-depth/error-handling",id:"docs/identity-now/saas-connectivity/in-depth/error-handling",title:"Error Handling",description:"Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/error-handling.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/error-handling",permalink:"/idn/docs/saas-connectivity/in-depth/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/error-handling.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",sidebarPosition:3,frontMatter:{id:"error-handling",title:"Error Handling",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"errorHandling",keywords:["connectivity","connectors","error handling"],description:"Any time code can fail due to validation issues, connectivity or configuration errors, handle the error and provide information back to the user about what went wrong.",slug:"/docs/saas-connectivity/in-depth/error-handling",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Debugging",permalink:"/idn/docs/saas-connectivity/in-depth/debugging"},next:{title:"Linting",permalink:"/idn/docs/saas-connectivity/in-depth/linting"}},c={},l=[{value:"Connector Errors",id:"connector-errors",level:2},{value:"Custom Errors",id:"custom-errors",level:2}],d={toc:l};function p(n){let{components:r,...e}=n;return(0,t.kt)("wrapper",(0,o.Z)({},d,e,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Any time code can fail due to validation issues, connectivity or configuration\nerrors, handle the error and provide information back to the user about what\nwent wrong. If you handle your errors properly, it will be easier to debug and\npinpoint what happened in your connector when something goes wrong."),(0,t.kt)("h2",{id:"connector-errors"},"Connector Errors"),(0,t.kt)("p",null,"The connector SDK has a built-in ConnectorError to use in your project to handle\nmost generic errors:"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ConnectorError } from \"@sailpoint/connector-sdk\"\n\n...\n\nexport class AirtableClient {\n\n...\n\n    async getAllAccounts(): Promise<AirtableAccount[]> {\n        return this.airTableBase('Users').select({\n            view: 'Grid view'\n        }).firstPage().then(records => {\n            const recordArray: Array<AirtableAccount> = []\n            for (const record of records) {\n                recordArray.push(AirtableAccount.createWithRecords(record))\n            }\n            return recordArray\n        }).catch(err => {\n            throw new ConnectorError('error while getting accounts: ' + err)\n        })\n    }\n")),(0,t.kt)("h2",{id:"custom-errors"},"Custom Errors"),(0,t.kt)("p",null,"You can also create custom errors and use them in your code to give more\nmeaningful and specific responses to error states. For example, when you are\nconfiguring your connector, it is recommended that you throw an\n",(0,t.kt)("inlineCode",{parentName:"p"},"InvalidConfigurationError")," instead of a generic ConnectorError. To do this,\ncreate the custom error:"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/errors/invalid-configuration-error.ts"},"invalid-configuration-error.ts")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ConnectorError, ConnectorErrorType } from "@sailpoint/connector-sdk";\n\n/**\n * Thrown when an application missing configuration during initialization\n */\n\nexport class InvalidConfigurationError extends ConnectorError {\n  /**\n   * Constructor\n   * @param message Error message\n   * @param type ConnectorErrorType they type of error\n   */\n  constructor(message: string, type?: ConnectorErrorType) {\n    super(message, type);\n    this.name = "InvalidConfigurationError";\n  }\n}\n')),(0,t.kt)("p",null,"Then throw the error in your code:"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"import { InvalidConfigurationError } from \"./errors/invalid-configuration-error\"\n\nexport class AirtableClient {\n    private readonly airTableBase: Airtable.Base\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        // Following properties actually do not exist in the config -- it just serves as an example.\n        if (config.apiKey == null) {\n            throw new InvalidConfigurationError('token must be provided from config')\n        }\n        if (config.airtableBase == null) {\n            throw new InvalidConfigurationError('airtableBase base id needed')\n        }\n        Airtable.configure({apiKey: config.apiKey})\n        this.airTableBase = Airtable.base(config.airtableBase)\n    }\n\n    ...\n\n}\n")))}p.isMDXComponent=!0}}]);