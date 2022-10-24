"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[96873],{42314:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=e(87462),o=(e(67294),e(3905));const i={id:"account-list",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","account list"],description:"Aggregate all accounts from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-list",tags:["Connectivity","Connector Command"]},s=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-list",id:"docs/identity-now/saas-connectivity/connector-commands/account-list",title:"Account List",description:"Aggregate all accounts from the source into IdentityNow.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-list.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-list",permalink:"/idn/docs/saas-connectivity/commands/account-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-list.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"account-list",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","account list"],description:"Aggregate all accounts from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-list",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Enable",permalink:"/idn/docs/saas-connectivity/commands/account-enable"},next:{title:"Account Read",permalink:"/idn/docs/saas-connectivity/commands/account-read"}},r={},l=[{value:"Example StdAccountListOutput",id:"example-stdaccountlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l};function u(t){let{components:n,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountListOutput")))),(0,o.kt)("h3",{id:"example-stdaccountlistoutput"},"Example StdAccountListOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The account list command aggregates all accounts from the target source into\nIdentityNow. IDN calls this command during a manual or scheduled account\naggregation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account List",src:e(9145).Z,width:"2500",height:"846"})),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"For you to be able to implement this endpoint, the web service must expose an\nAPI for listing user accounts and entitlements (i.e. roles or groups).\nSometimes, a target source\u2019s API has a single endpoint providing all the\nattributes and entitlements a source account contains. However, some APIs may\nbreak these attributes and entitlements into separate API endpoints, requiring\nyou to make multiple calls to gather all an account's necessary data. The\nfollowing code from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts"),"\nshows the necessary steps to create a complete account from the various\nendpoints the API offers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"async getAllAccounts(): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view'\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n")),(0,o.kt)("p",null,"The following code snippet from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),"\nshows how to register the account list command on the connector object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {\n            const accounts = await airtable.getAllAccounts()\n\n            for (const account of accounts) {\n                res.send(account.toStdAccountListOutput())\n            }\n        })\n...\n")),(0,o.kt)("p",null,"IDN expects each user in the target source to be converted into a format IDN\nunderstands. The specific attributes the web service returns depend on what your\nsource provides."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"public toStdAccountListOutput(): StdAccountListOutput {\n    return this.buildStandardObject();\n}\n\nprivate buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {\n    return {\n        key: SimpleKey(this.id),\n        disabled: !this.enabled,\n        locked: this.locked,\n        attributes: {\n            id: this.id,\n            displayName: this.displayName,\n            department: this.department,\n            firstName: this.firstName,\n            lastName: this.lastName,\n            email: this.email,\n            entitlements: this.entitlments,\n        },\n    }\n}\n")),(0,o.kt)("p",null,"The result of the account list command is not an array of objects but several\nindividual objects. This is the format IDN expects, so if you see something like\nthe following result while testing, it is normal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "department": "sailpoint admins",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n{\n    "key": {\n        "simple": {\n            "id": "john"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john",\n        "displayName": "John Doe External",\n        "department": "external",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@gmail.com",\n        "entitlements": [\n            "administrator"\n        ]\n    }\n}\n')))}u.isMDXComponent=!0},9145:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/account_list_idn-85ebe702c2bd034283e898d73b72e7fe.png"}}]);