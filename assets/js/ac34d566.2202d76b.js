"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[10994],{2116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={id:"sap-provisioning-modify-rule",title:"SAP HR Provisioning Modify Rule",pagination_label:"SAP HR Provisioning Modify Rule",sidebar_label:"SAP HR Provisioning Modify Rule",sidebar_class_name:"sapHRProvisioningModifyRule",keywords:["cloud","rules","sap"],description:"This rule performs SAP HR modification operations during provisioning. This rule is typically used for attribute sync to custom SAP HR attributes.",slug:"/docs/rules/connector-rules/sap-provisioning-modify-rule",tags:["Rules"]},r=void 0,s={unversionedId:"docs/identity-now/rules/connector-rules/sap-provisioning-modify-rule",id:"docs/identity-now/rules/connector-rules/sap-provisioning-modify-rule",title:"SAP HR Provisioning Modify Rule",description:"This rule performs SAP HR modification operations during provisioning. This rule is typically used for attribute sync to custom SAP HR attributes.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/sap_hr_provisioning_modify_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/sap-provisioning-modify-rule",permalink:"/idn/docs/rules/connector-rules/sap-provisioning-modify-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/sap_hr_provisioning_modify_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666628305,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"sap-provisioning-modify-rule",title:"SAP HR Provisioning Modify Rule",pagination_label:"SAP HR Provisioning Modify Rule",sidebar_label:"SAP HR Provisioning Modify Rule",sidebar_class_name:"sapHRProvisioningModifyRule",keywords:["cloud","rules","sap"],description:"This rule performs SAP HR modification operations during provisioning. This rule is typically used for attribute sync to custom SAP HR attributes.",slug:"/docs/rules/connector-rules/sap-provisioning-modify-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"SAP BuildMap Rule",permalink:"/idn/docs/rules/connector-rules/sap-buildmap-rule"},next:{title:"Web Services After Operation Rule",permalink:"/idn/docs/rules/connector-rules/webservices-after-provisioning-rule"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This rule performs SAP HR modification operations during provisioning.\nThis rule is typically used for attribute sync to custom SAP HR attributes."),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It\nmay offer special abilities to perform connector-related functions, and it may\noffer managed connections to sources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the\nvirtual appliance, and they are viewable by SailPoint personnel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rule Execution",src:n(25089).Z,width:"1525",height:"618"})),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"application"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,o.kt)("td",{parentName:"tr",align:null},"Reference to the application object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,o.kt)("td",{parentName:"tr",align:null},"Reference to the application schema.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"destination"),(0,o.kt)("td",{parentName:"tr",align:null},"com.sap.conn.jco.JCoDestination"),(0,o.kt)("td",{parentName:"tr",align:null},"Connected and ready-to-use SAP destination object that can be used to call BAPI function modules and call to SAP tables.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"plan"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningPlan"),(0,o.kt)("td",{parentName:"tr",align:null},"Provisioning plan containing the provisioning request(s).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"request"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningPlan.AbstractRequest"),(0,o.kt)("td",{parentName:"tr",align:null},"AccountRequest being processed. It is always null for this global rule. It is only set for SapHrOperationProvisioning.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connector"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.SAPHRConnector"),(0,o.kt)("td",{parentName:"tr",align:null},"Application connector being used for the operation.")))),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"result"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningResult"),(0,o.kt)("td",{parentName:"tr",align:null},"ProvisioningResult object containing the provisioning request's status (success, failure, retry, etc.).")))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="SapHrOperationProvisioning">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n\n<Rule name="Example Rule" type="SapHrOperationProvisioning">\n\n  <Description>\n\nThis rule is used by the SAP HR connector for provisioning of the data.\n\n</Description>\n\n  <Source><![CDATA[\n  import sailpoint.object.*;\n  import sailpoint.object.ProvisioningPlan.AccountRequest;\n  import sailpoint.object.ProvisioningPlan.AttributeRequest;\n  import sailpoint.object.ProvisioningPlan.ObjectOperation;\n  import sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\n  import sailpoint.tools.Util;\n  import java.text.SimpleDateFormat;\n  import java.util.Date;\n  import java.util.Map;\n  import java.util.HashMap;\n  import com.sap.conn.jco.AbapException;\n  import com.sap.conn.jco.JCoDestination;\n  import com.sap.conn.jco.JCoException;\n  import sailpoint.connector.ConnectorException;\n  import com.sap.conn.jco.JCoFunction;\n  import com.sap.conn.jco.JCoParameterField;\n  import com.sap.conn.jco.JCoParameterFieldIterator;\n  import com.sap.conn.jco.JCoParameterList;\n  import com.sap.conn.jco.JCoStructure;\n  import com.sap.conn.jco.JCoTable;\n  import com.sap.conn.jco.JCoContext;\n\n  // subtype values for email , Telephone or system user name\n  String SUBTYPE_EMAIL = "0010"; //Sub info type for email address\n  String SUBTYPE_PHONE= "0020"; //Sub info type for telephone number\n  String SUBTYPE_SY_USERNAME= "0001";  //Sub info type for sy-username which can be mapped to SAMAccountName of AD\n\n  ProvisioningResult result = new ProvisioningResult();\n\n  //This function will modify the email address , Telephone or system user name if recieved in the plan\n  public void doProvision() throws Exception {\n    List<AccountRequest> accReqList = plan.getAccountRequests();\n    String accNativeIdentity = null;\n    String endDateStr = "", beginDateStr = "";\n    SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");\n\n    if (!Util.isEmpty(accReqList)) {\n      for( AccountRequest accountReq : accReqList ) {\n        result.setStatus( ProvisioningResult.STATUS_COMMITTED );\n        accNativeIdentity = accountReq.getNativeIdentity();\n\n        // For update operation only Email,Telephone,SY-UNAME atrribute are supported\n        AttributeRequest emailAttr = accountReq.getAttributeRequest("Email");\n        AttributeRequest phoneAttrib = accountReq.getAttributeRequest("Telephone");\n        AttributeRequest syUserAttrib = accountReq.getAttributeRequest("System user name (SY-UNAME)");\n        HashMap beginEndDateList = getCommunicationData( accNativeIdentity );\n\n        //Finding the email attribute in provisioning plan and trying to modify the account\'s email id\n        if ( null != emailAttr ) {\n          if(null !=beginEndDateList && beginEndDateList.containsKey("emailBegin")) {\n            beginDateStr = formatter.format(beginEndDateList.get("emailBegin"));\n            endDateStr = formatter.format(beginEndDateList.get("emailEnd"));\n          }\n          modifyCommunicationData(accNativeIdentity, emailAttr.getValue(), SUBTYPE_EMAIL,beginDateStr,endDateStr);\n        }\n\n        //Finding the Telephone attribute in provisioning plan and trying to modify the account\'s phone\n        if ( null != phoneAttrib ) {\n          if(null !=beginEndDateList && beginEndDateList.containsKey("phoneBegin")) {\n            beginDateStr = formatter.format(beginEndDateList.get("phoneBegin"));\n            endDateStr = formatter.format(beginEndDateList.get("phoneEnd"));\n          }\n          modifyCommunicationData(accNativeIdentity, phoneAttrib.getValue(), SUBTYPE_PHONE,beginDateStr,endDateStr);\n        }\n\n        //Finding the system user name attribute in provisioning plan and trying to modify the account\'s System User Name\n        if ( null != syUserAttrib) {\n          if(null !=beginEndDateList && beginEndDateList.containsKey("syUserBegin")) {\n            beginDateStr = formatter.format(beginEndDateList.get("syUserBegin"));\n            endDateStr = formatter.format(beginEndDateList.get("syUserEnd"));\n          }\n          modifyCommunicationData(accNativeIdentity,syUserAttrib.getValue(), SUBTYPE_SY_USERNAME,beginDateStr,endDateStr);\n        }\n      }\n    }\n  }\n\n  // This function will get the communication details about a given employee\n  // In this example the email, Telephone and system user name begin and end date will be retrieved\n  public HashMap getCommunicationData( String id ) throws Exception {\n    HashMap commAttrsList = new HashMap();\n    JCoFunction getCommDetail = connector.getFunction(destination, "BAPI_EMPLCOMM_GETDETAILEDLIST");\n    getCommDetail.getImportParameterList().setValue("EMPLOYEENUMBER", id);\n    getCommDetail.getImportParameterList().setValue("TIMEINTERVALLOW", new Date());\n    getCommDetail.getImportParameterList().setValue("TIMEINTERVALHIGH", new Date());\n\n    try {\n      getCommDetail.execute(destination);\n    } catch (Exception e) {\n      connector.checkForExceptions(getCommDetail);\n      throw new Exception(e);\n    }\n\n    JCoTable commTable = getCommDetail.getTableParameterList().getTable("COMMUNICATION");\n    if ( commTable != null ) {\n      int rows = commTable.getNumRows();\n      for (int i = 0; i < rows; i++) {\n        commTable.setRow(i);\n        String commType = commTable.getString("SUBTYPE");\n        commAttrsList = getDateData(commTable, commAttrsList, commType);\n      }\n    }\n    return commAttrsList;\n  }\n\n\n  // function captures the begin date and end date\n  public HashMap getDateData(JCoTable commTable, HashMap commAttrsList, String commType) {\n    Date validBegDate = commTable.getDate("VALIDBEGIN");\n    Date validEndDate = commTable.getDate("VALIDEND");\n    if ( validBegDate != null && validEndDate != null ) {\n      if (commType.equals(SUBTYPE_EMAIL)) {\n        commAttrsList.put("emailBegin", validBegDate);\n        commAttrsList.put("emailEnd", validEndDate);\n      } else if (commType.equals(SUBTYPE_PHONE)) {\n        commAttrsList.put("phoneBegin", validBegDate);\n        commAttrsList.put("phoneEnd", validEndDate);\n      }else if (commType.equals(SUBTYPE_SY_USERNAME)) {\n        commAttrsList.put("syUserBegin", validBegDate);\n        commAttrsList.put("syUserEnd", validEndDate);\n      }\n    }\n    return commAttrsList;\n  }\n\n\n  /**Function modifies the email address , Telephone number and System user name of SAP HR record.\n  If Email or Phone is present(assigned) then used BAPI_EMPLCOMM_CHANGE\n  If Email or Phone is not present(assigned) then used BAPI_EMPLCOMM_CREATE\n  * @param userId\n  * @param parValue\n  * @param type\n  * @param begDate\n  * @param endDate\n  * @throws ConnectorException\n  */\n\n  private void modifyCommunicationData( String userId, String parValue, String type,String begDate,String endDate ) throws ConnectorException {\n    JCoFunction jcoFunctionObject;\n    if (begDate.length() > 1 ) { //If date is alreday present then use BAPI_EMPLCOMM_CHANGE to modify data\n      jcoFunctionObject = connector.getFunction(destination,"BAPI_EMPLCOMM_CHANGE");\n    } else { //If date is not present then use BAPI_EMPLCOMM_CREATE to add data\n      jcoFunctionObject = connector.getFunction(destination,"BAPI_EMPLCOMM_CREATE");\n    }\n\n    // BAPI locks the record for processing\n    JCoFunction functionEnqueue = destination.getRepository().getFunction("BAPI_EMPLOYEE_ENQUEUE");\n    functionEnqueue.getImportParameterList().setValue("NUMBER", userId);\n    if ( functionEnqueue == null )\n      throw new RuntimeException("BAPI_EMPLOYEE_ENQUEUE not found in SAP.");\n\n    // BAPI to modify Communication data - email and phone\n    if ( jcoFunctionObject == null )\n      throw new RuntimeException("BAPI_EMPLCOMM_CHANGE not found in SAP.");\n\n    String returnPersonnelID = null;\n    jcoFunctionObject.getImportParameterList().setValue("EMPLOYEENUMBER", userId); // Personal Number\n    jcoFunctionObject.getImportParameterList().setValue("SUBTYPE", type); // SubType 0010/0020 - Email/Phone\n    jcoFunctionObject.getImportParameterList().setValue("VALIDITYBEGIN", begDate); // Begin Date\n    jcoFunctionObject.getImportParameterList().setValue("VALIDITYEND", endDate); // End Date\n    jcoFunctionObject.getImportParameterList().setValue("COMMUNICATIONID", parValue); // Email Address to modify\n\n    // BAPI unlocks the record after processing\n    JCoFunction functionDequeue = destination.getRepository().getFunction("BAPI_EMPLOYEE_DEQUEUE");\n    functionDequeue.getImportParameterList().setValue("NUMBER", userId);\n    if ( functionDequeue == null )\n      throw new RuntimeException("BAPI_EMPLOYEE_DEQUEUE not found in SAP.");\n\n    try {\n      // executing Bapis\n      JCoContext.begin(destination);\n      functionEnqueue.execute(destination);\n      jcoFunctionObject.execute(destination);\n      functionDequeue.execute(destination);\n    } catch (ConnectorException e) {\n      throw e;\n    } finally {\n      JCoContext.end(destination);\n    }\n  }\n\n  doProvision();\n  return result;\n\n    ]]></Source>\n\n</Rule>\n')))}p.isMDXComponent=!0},25089:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);