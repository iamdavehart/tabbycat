/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */



export const errorCodes = {
signIn:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains both username/password and a personal access token, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401001",
    "condition": "Login error",
    "details": "The credentials (name or password, or personal access token name or secret) are invalid for the specified site, or the site content URL is invalid."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the request body for a user sign-in doesn't correspond to an existing user on the site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST. If you are signing in to a Tableau online site, this error may be caused by leaving the pod name out of the server address in the URI.The error can also be caused by attempting to make a request to a SSL-protected server using HTTP, rather than HTTPS."
  }
],
signOut:[
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
switchSite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401000",
    "condition": "Unauthorized access",
    "details": "No authentication credentials were provided."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized access",
    "details": "Invalid authentication credentials were provided."
  },
  {
    "status": "401",
    "code": "401003",
    "condition": "Switch site error",
    "details": "There was a problem switching sites. The site might be unavailable or is not found."
  },
  {
    "status": "403",
    "code": "403070",
    "condition": "Cannot switch to the same site",
    "details": "The site specified as the destination site is also the current site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
createSite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing, incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Invalid storage quota",
    "details": "The storage quota value was not a positive number."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Invalid user quota",
    "details": "The user quota value was not a positive number."
  },
  {
    "status": "400",
    "code": "400013",
    "condition": "Invalid administrator mode",
    "details": "The user provided an administrator mode that is not ContentOnly or ContentAndUsers. Note: An empty string or all whitespace is invalid."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409001",
    "condition": "Site name conflict",
    "details": "The site name in the request already belongs to an existing site."
  },
  {
    "status": "409",
    "code": "409002",
    "condition": "Site URL conflict",
    "details": "The content URI in the request already belongs to an existing site."
  },
  {
    "status": "409",
    "code": "409004",
    "condition": "User quota and tiered capacity conflict",
    "details": "The request cannot set both tiered capacity attributes and userQuota. One or the other must be null."
  },
  {
    "status": "409",
    "code": "409004",
    "condition": "License limit exceeded",
    "details": "The request cannot set tiered capacity attributes or userQuota values that are larger than the number of active licenses configured for the site."
  },
  {
    "status": "409",
    "code": "409004",
    "condition": "Administrator mode or user quota conflict",
    "details": "The request cannot set adminMode to ContentOnly and also specify a userQuota value."
  }
],
querySite:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySiteByID:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySiteByName:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySiteByContentUrl:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySites:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for the sites at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getRecentlyViewedForSite:[
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewsForSite:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid parameter value",
    "details": "The includeUsageStatistics was provided with a value other than true or false."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbook views, but the caller doesn't have Read permission."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
deleteSite:[
  {
    "status": "403",
    "code": "403002",
    "condition": "Deletion not allowed.",
    "details": "An attempt was made to delete the default Tableau Server site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteSiteByID:[
  {
    "status": "403",
    "code": "403002",
    "condition": "Deletion not allowed.",
    "details": "An attempt was made to delete the default Tableau Server site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteSiteByName:[
  {
    "status": "403",
    "code": "403002",
    "condition": "Deletion not allowed.",
    "details": "An attempt was made to delete the default Tableau Server site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteSiteByContentUrl:[
  {
    "status": "403",
    "code": "403002",
    "condition": "Deletion not allowed.",
    "details": "An attempt was made to delete the default Tableau Server site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDataDrivenAlert:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Delete forbidden",
    "details": "A user called this method who does not have the required permissions"
  },
  {
    "status": "404",
    "code": "409023",
    "condition": "Resource Not Found",
    "details": "The data-driven alert ID specified in the URI is invalid."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
queryDataDrivenAlertDetails:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A user queried this method who does not have the required permissions"
  },
  {
    "status": "404",
    "code": "409023",
    "condition": "Resource Not Found",
    "details": "The data-driven alert ID specified in the URI is invalid."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDataDrivenAlerts:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for the sites at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A user queried this method who does not have the required permissions"
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
addUserToDataDrivenAlert:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Write forbidden",
    "details": "A user called this method who does not have the required permissions."
  },
  {
    "status": "403",
    "code": "409028",
    "condition": "Adding recipient to data-driven alert forbidden",
    "details": "The user is not authorized to add the recipient to the data-driven alert."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Resource Not Found",
    "details": "The user ID specified in the request body is invalid."
  },
  {
    "status": "404",
    "code": "409023",
    "condition": "Resource Not Found",
    "details": "The data-driven alert ID specified in the URI is invalid."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
deleteUserFromDataDrivenAlert:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Delete forbidden",
    "details": "A user called this method who does not have the required permissions."
  },
  {
    "status": "403",
    "code": "409029",
    "condition": "Deleting recipient from data-driven alert forbidden",
    "details": "The user is not authorized to remove the recipient from the data-driven alert."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Resource Not Found",
    "details": "The user ID specified in the request body is invalid."
  },
  {
    "status": "404",
    "code": "409023",
    "condition": "Resource Not Found",
    "details": "The data-driven alert ID specified in the URI is invalid."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
updateDataDrivenAlert:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Write forbidden",
    "details": "A user called this method who does not have the required permissions."
  },
  {
    "status": "403",
    "code": "409030",
    "condition": "Updating data-driven alert forbidden",
    "details": "The user is not authorized to update the data-driven alert."
  },
  {
    "status": "404",
    "code": "409023",
    "condition": "Resource Not Found",
    "details": "The data-driven alert ID specified in the URI is invalid."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Resource Not Found",
    "details": "The user ID specified in the request body is invalid."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addFlowPermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a flow. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the flow."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addFlowTaskToSchedule:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized Access",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403098",
    "condition": "Update Forbidden",
    "details": "A non-administrator user called this method, but the caller doesn't have sufficient permissions."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is unknown."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
deleteFlow:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Deletion forbidden",
    "details": "A non-administrator user called this method but doesn't have Read (view) and Delete permission for the flow."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteFlowPermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a flow. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the flow."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allowor Denyat the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allowor Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteFlowPermissionsForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a flow. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the flow."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allowor Denyat the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allowor Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteFlowPermissionsForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a flow. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the flow."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allowor Denyat the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allowor Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
downloadFlow:[
  {
    "status": "403",
    "code": "403097",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to download a flow, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getFlowRunTask:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Operation unauthorized",
    "details": "The user is not authorized to get the task."
  },
  {
    "status": "404",
    "code": "404026",
    "condition": "Task not found",
    "details": "The task ID in the URI doesn't correspond to an existing task."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getFlowRunTasks:[
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
publishFlow:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Malformed request body",
    "details": "The XML content in the MIME multipart request is not empty."
  },
  {
    "status": "400",
    "code": "400089",
    "condition": "Missing flow name",
    "details": "Flow name is required and was not specified."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Invalid permissions",
    "details": "The caller does not have the necessary permissions to publish the flow."
  },
  {
    "status": "400",
    "code": "400090",
    "condition": "Missing flow payload",
    "details": "The flow information (the structure containing the flow description, flow project) was not included in the request body."
  },
  {
    "status": "400",
    "code": "400086",
    "condition": "Invalid flow attachment",
    "details": "The name of the flow doesn't end in .tfl or .tflx."
  },
  {
    "status": "400",
    "code": "400087",
    "condition": "Generic flow publishing error",
    "details": "The flow could not be published for some other reason than those specified earlier."
  },
  {
    "status": "409",
    "code": "409041",
    "condition": "Flow already found in destination",
    "details": "The flow name should be unique, or the overwrite flag parameter should be set to true."
  },
  {
    "status": "403",
    "code": "403008",
    "condition": "Insufficient storage quota",
    "details": "The flow could not be published because there is not enough storage remaining on the server to accommodate its size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project on the site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
queryFlow:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query the flow, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryFlowConnections:[
  {
    "status": "403",
    "code": "403092",
    "condition": "Read forbidden",
    "details": "A user who is not a server administrator user attempted to query the flow connections, but the caller doesn't have Readpermission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryFlowPermissions:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryFlowsForSite:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number is not an integer, is less than one, or is greater than the final page number for users at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403101",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query flows for the site, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryFlowsForUser:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for flows at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size exceeds upper limit",
    "details": "The page size parameter exceeds the system-wide upper limit of 1000."
  },
  {
    "status": "403",
    "code": "403101",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query flows for the user, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
runFlowTask:[
  {
    "status": "400",
    "code": "400084",
    "condition": "Flow run task error",
    "details": "The task specified is not a flow run task."
  }
],
updateFlow:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403098",
    "condition": "Owner update forbidden",
    "details": "A non-administrator user tried to change the owner for the flow."
  },
  {
    "status": "403",
    "code": "403030",
    "condition": "Project update forbidden",
    "details": "A non-administrator user tried to change the project for the flow, but the caller doesn't have Write permission for the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Owner not found",
    "details": "The owner ID in the request body doesn't correspond to an existing owner."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project."
  },
  {
    "status": "409",
    "code": "409041",
    "condition": "Flow name conflict",
    "details": "The flow name in the request already belongs to the specified site. For the purpose of uniqueness checks, flow names are case-insensitive."
  }
],
updateFlowConnection:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403103",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to update a flow, but the caller doesn't have Write permission."
  },
  {
    "status": "403",
    "code": "403098",
    "condition": "Owner update forbidden",
    "details": "A non-administrator user tried to change connection information for the flow, but the caller doesn't have Write permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
createProject:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Bad request",
    "details": "The request cannot set content permissions to LockedToProjectWithoutNested for a REST API version lower than 3.8."
  },
  {
    "status": "403",
    "code": "403008",
    "condition": "Insufficient storage on site",
    "details": "The samples could not be published because there is not enough storage space remaining on the server to accommodate the samples."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409006",
    "condition": "Project name conflict",
    "details": "The project name in the request already belongs to the specified site. For the purpose of uniqueness checks, project names are case-insensitive."
  }
],
queryProjects:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
updateProject:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Bad request",
    "details": "The request cannot set content permissions to LockedToProjectWithoutNested for a REST API version lower than 3.8."
  },
  {
    "status": "403",
    "code": "403005",
    "condition": "Update forbidden",
    "details": "Attempt to rename the default project, which cannot be renamed."
  },
  {
    "status": "403",
    "code": "403008",
    "condition": "Insufficient storage on site",
    "details": "The samples could not be published because there is not enough storage space remaining on the server to accommodate the samples."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Update forbidden",
    "details": "A non-administrative user tried to update the project, but does not have permissions to update the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "The request body contains a project ID (which is optional) and it doesn't match the ID in the URI."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409006",
    "condition": "Project name conflict",
    "details": "The project name in the request already belongs to the specified site. For the purpose of uniqueness checks, project names are case-insensitive."
  }
],
deleteProject:[
  {
    "status": "403",
    "code": "403003",
    "condition": "Deletion forbidden",
    "details": "Attempt to delete the default project, which cannot be deleted."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project or the project is not found on this site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
publishWorkbook:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Malformed request body",
    "details": "The XML content in the MIME multipart request is not empty."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Missing workbook",
    "details": "There is no attachment in the request and no uploadSessionID parameter."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Unexpected attachments",
    "details": "The message had both an uploadSessionId parameter and an attachment, or the request body contained more than one attachment."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid embed value",
    "details": "The request body contains a <connectionCredentials> element and it has an embed attribute whose value is not true or false."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid overwrite value",
    "details": "The overwrite parameter must be true or false."
  },
  {
    "status": "400",
    "code": "400011",
    "condition": "Publishing error",
    "details": "The workbook could not be published for some other reason than those specified earlier."
  },
  {
    "status": "400",
    "code": "400020",
    "condition": "Invalid workbook file name",
    "details": "The name of the workbook doesn't end in .twb or .twbx."
  },
  {
    "status": "400",
    "code": "400035",
    "condition": "Missing or invalid file type",
    "details": "The request included an uploadSessionId parameter but no file type, or the file type was something other than .twb or .twbx."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Insufficient publishing permission",
    "details": "A non-administrator user attempted to publish a workbook, but the caller doesn't have sufficient project permissions."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Unlicensed publishing forbidden",
    "details": "A non-administrator user attempted to publish a workbook. This is disallowed for all projects (including the default project)."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Overwrite forbidden",
    "details": "A workbook with the specified name already exists and the overwrite parameter was not set to true."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Problem connecting to data source",
    "details": "There was a problem connecting to a data source used by the workbook. This can be due to missing or invalid connection credentials or because the referenced data source is not available on the server."
  },
  {
    "status": "403",
    "code": "403008",
    "condition": "Insufficient storage quota",
    "details": "The workbook could not be published because there is not enough storage remaining on the server to accommodate its size."
  },
  {
    "status": "403",
    "code": "403130",
    "condition": "Publishing overwrite",
    "details": "A workbook with the same name already exists."
  },
  {
    "status": "403",
    "code": "403131",
    "condition": "Concurrent update",
    "details": "The workbook is already being published in another process."
  },
  {
    "status": "403",
    "code": "403132",
    "condition": "Failed connection check",
    "details": "One or more data sources used by the workbook could not be reached."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project on the site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The user specified overwrite as true but no workbook with the specified name exists on the site."
  },
  {
    "status": "404",
    "code": "404015",
    "condition": "File upload not found",
    "details": "The file upload session ID in the uploadSessionId parameter doesn't correspond to an existing file upload on the site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
addTagsToView:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400076",
    "condition": "Error adding tags",
    "details": "There was a problem adding tags to the specified view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Adding tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add tags. This error is raised even if the <tags> element is empty."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is not for an existing site."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in URI doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Workbook ID mismatch",
    "details": "The request body contains a view ID (which is optional) and it doesn't match the ID in the URI."
  },
  {
    "status": "404",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addTagsToWorkbook:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400049",
    "condition": "Error adding tags",
    "details": "There was a problem adding tags to the specified workbook."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Adding tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add tags. This error is raised even if the <tags> element is empty."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is not for an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Workbook ID mismatch",
    "details": "The request body contains a workbook ID (which is optional) and it doesn't match the ID in the URI."
  },
  {
    "status": "404",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
queryViewsForWorkbook:[
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid parameter value",
    "details": "The includeUsageStatistics was provided with a value other than true or false."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbook views, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewData:[
  {
    "status": "400",
    "code": "400080",
    "condition": "Bad Request",
    "details": "The view ID in the URI doesn't correspond to a view available on the specified site."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbook views, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewImage:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query a view preview image, but the caller doesn't have Read permission."
  },
  {
    "status": "403",
    "code": "403068",
    "condition": "Forbidden",
    "details": "The endpoint has been disabled on the server. To enable the endpoint, a server administrator must use tsm to configure the sheet_image.enabled setting. For more information, see tsm configuration set Options in the Tableau Server help."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view in the specified workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewPDF:[
  {
    "status": "400",
    "code": "400080",
    "condition": "Bad Request",
    "details": "The view ID in the URI doesn't correspond to a view available on the specified site."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbook views, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewPreviewImage:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query a view preview image, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view in the specified workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryWorkbook:[
  {
    "status": "403",
    "code": "403018",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query the workbook, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryWorkbookConnections:[
  {
    "status": "403",
    "code": "403021",
    "condition": "Read forbidden",
    "details": "A user who is not a server administrator user attempted to query the workbook connections, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getView:[
  {
    "status": "404",
    "code": "404006",
    "condition": "Resource not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getViewByPath:[
  {
    "status": "404",
    "code": "404006",
    "condition": "Resource not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getViewRecommendations:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getWorkbookRevisions:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "403",
    "code": "403056",
    "condition": "A non-administrator user attempted to get workbook revision information, but the caller doesn't have sufficient permissions.",
    "details": ""
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
hideViewRecommendations:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404029",
    "condition": "Content not found",
    "details": "The content ID in the URI doesn't correspond to an existing content of the requested type."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
unhideViewRecommendations:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404029",
    "condition": "Content not found",
    "details": "The content ID in the URI doesn't correspond to an existing content of the requested type."
  },
  {
    "status": "404",
    "code": "404035",
    "condition": "Recommendation not found",
    "details": "A hidden recommendation for the given content ID was not found."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
queryWorkbookPreviewImage:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query the workbook preview image, but the caller doesn't have Read permission for the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryWorkbooksForSite:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number is not an integer, is less than one, or is greater than the final page number for users at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size exceeds upper limit",
    "details": "The page size parameter exceeds the system-wide upper limit of 1000."
  },
  {
    "status": "403",
    "code": "403018",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbooks for the site, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryWorkbooksForUser:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size exceeds upper limit",
    "details": "The page size parameter exceeds the system-wide upper limit of 1000."
  },
  {
    "status": "403",
    "code": "403018",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query workbooks for the user, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadViewCrosstabExcel:[
  {
    "status": "400",
    "code": "400101",
    "condition": "Unknown error",
    "details": "There was a problem downloading or querying this file."
  },
  {
    "status": "400",
    "code": "400130",
    "condition": "Unknown error",
    "details": "The view ID in the URI doesn't correspond to a view available on the specified site."
  },
  {
    "status": "401",
    "code": "4001XX",
    "condition": "Unauthorized",
    "details": "The authentication token for the request is missing, invalid, or expired."
  },
  {
    "status": "403",
    "code": "4031XX",
    "condition": "Unauthorized",
    "details": "A user attempted to download a .xlsx file without Read and/or ExportData permissions for the workbook or view, and is not an administrator."
  },
  {
    "status": "404",
    "code": "404xxx",
    "condition": "Site or view not found",
    "details": "The site or view specified in the request could not be found."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadWorkbook:[
  {
    "status": "403",
    "code": "403019",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to download a workbook, but the caller doesn't have ExportXml permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadWorkbookPDF:[
  {
    "status": "400",
    "code": "400101",
    "condition": "Unknown error",
    "details": "There was a problem downloading or querying this workbook."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Unauthorized",
    "details": "A non-administrator user attempted to download a pdf, but they don't have Read and/or ExportImage permissions for the workbook or user does not have Read permissions for the the views of the workbook."
  },
  {
    "status": "403",
    "code": "403105",
    "condition": "Unauthorized",
    "details": "The PDF export feature is disabled on the server or the server is not configured to allow PDF exports using the REST API."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadWorkbookPowerpoint:[
  {
    "status": "400",
    "code": "400101",
    "condition": "Unknown error",
    "details": "There was a problem downloading or querying this workbook."
  },
  {
    "status": "401",
    "code": "4001XX",
    "condition": "Unknown error",
    "details": "There was a problem downloading or querying this workbook."
  },
  {
    "status": "403",
    "code": "4031XX",
    "condition": "Unauthorized",
    "details": "A non-administrator user attempted to download a .pptx file, but they don't have Read and/or ExportImage permissions for the workbook or user does not have Read permissions for the the views of the workbook."
  },
  {
    "status": "403",
    "code": "403105",
    "condition": "Unauthorized",
    "details": "The PowerPoint export feature is disabled on the server or the server is not configured to allow PowerPoint exports using the REST API."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadWorkbookRevision:[
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "403",
    "code": "403019",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to download a workbook, but the caller doesn't have required permissions."
  },
  {
    "status": "404",
    "code": "404024",
    "condition": "Workbook revision not found",
    "details": "The revision number in the URI doesn't correspond to an existing data source revision."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
updateWorkbook:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403025",
    "condition": "Project update forbidden",
    "details": "A non-administrator user tried to change the workbook project, but the caller doesn't have Write permission for the target project."
  },
  {
    "status": "403",
    "code": "403027",
    "condition": "Owner update forbidden",
    "details": "A non-administrator user tried to change the workbook owner."
  },
  {
    "status": "403",
    "code": "403027",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to change the workbook, but the caller doesn't have Write permission for the workbook."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Update forbidden",
    "details": "A non-administrative user tried to update the workbook, but does not have permissions to publish the updated workbook to the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Owner not found",
    "details": "The owner ID in the request body doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't match the project ID provided in the request body."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
updateWorkbookConnection:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403029",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to update the workbook connection, but the caller doesn't have Write permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404020",
    "condition": "Connection not found",
    "details": "The connection ID in the URI doesn't correspond to an existing connection."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
updateWorkbookNow:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad Request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401000",
    "condition": "Unauthorized Access",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Update Forbidden",
    "details": "A non-administrator user attempted to query workbook views, but the caller doesn't have sufficient permissions."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Update forbidden",
    "details": "A non-administrative user tried to update the workbook, but does not have permissions to publish the updated workbook to the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is unknown."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Resource not found",
    "details": "The workbook ID in the URI is unknown."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
deleteWorkbook:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteTagFromView:[
  {
    "status": "400",
    "code": "400078",
    "condition": "Error deleting tag",
    "details": "There was a problem deleting the tag from the specified view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Deleting tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete a tag from the specified workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404007",
    "condition": "Tag not found",
    "details": "The tag in the URI doesn't exist for the specified workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteTagFromWorkbook:[
  {
    "status": "400",
    "code": "400051",
    "condition": "Error deleting tag",
    "details": "There was a problem deleting the tag from the specified workbook."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Deleting tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete a tag from the specified workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404007",
    "condition": "Tag not found",
    "details": "The tag in the URI doesn't exist for the specified workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
getDataAccelerationReportForASite:[
  {
    "status": "405",
    "code": "40500",
    "condition": "Invalid requests method",
    "details": "Request type was not GET"
  }
],
publishDataSource:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The request message is missing or incomplete, or contains malformed XML. Make sure that the Content-Length value is set."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Missing data source",
    "details": "There is no attachment in the request for the data source."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid overwrite value",
    "details": "The overwrite parameter must be set to true or false."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid append value",
    "details": "The append parameter must be set to true or false."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid embed value",
    "details": "The request body contains a <connectionCredentials> element and it has an embed attribute whose value is not true or false."
  },
  {
    "status": "400",
    "code": "400010",
    "condition": "Invalid data source filename",
    "details": "The name of the data source file did not end with the suffix .hyper, .tds, .tdsx, or .tde."
  },
  {
    "status": "400",
    "code": "400010",
    "condition": "Missing or invalid file type",
    "details": "The request included an uploadSessionId parameter but no file type, or the file type was something other than hyper, tds, tdsx, or tde."
  },
  {
    "status": "400",
    "code": "400010",
    "condition": "Unexpected attachments",
    "details": "The message had both a uploadSessionId parameter and an attachment, or the message contained more than one attachment."
  },
  {
    "status": "400",
    "code": "400011",
    "condition": "Publishing error",
    "details": "The data source could not be published for some other reason than those specified earlier."
  },
  {
    "status": "400",
    "code": "400019",
    "condition": "Malformed request body",
    "details": "The request message is missing or incomplete, or contains malformed XML. Make sure that the Content-Length value is set."
  },
  {
    "status": "400",
    "code": "400055",
    "condition": "Incompatible overwrite and append values",
    "details": "The overwrite and append parameter cannot both be set to true."
  },
  {
    "status": "400",
    "code": "400129",
    "condition": "Invalid Ask Data enablement",
    "details": "The enablement setting in the request body is not valid for the current server configuration."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Insufficient publishing permission",
    "details": "A non-administrator user attempted to publish a data source, but the caller doesn't have sufficient project permissions."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Unlicensed publishing forbidden",
    "details": "A non-administrator user who is unlicensed attempted to publish a data source. This is disallowed for all projects (including the default project)."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Overwrite forbidden",
    "details": "A data source with the specified name already exists and the overwrite parameter was not set to true."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Problem connecting to data source",
    "details": "There was a problem connecting to a data source. This can be due to missing or invalid connection credentials or because the referenced data source is not available on the server."
  },
  {
    "status": "403",
    "code": "403008",
    "condition": "Insufficient storage quota",
    "details": "The data source could not be published because there is not enough storage remaining on the server to accommodate its size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The append parameter is true but the data source name specified in the request body does not correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project on the site."
  },
  {
    "status": "404",
    "code": "404015",
    "condition": "File upload not found",
    "details": "The file upload session ID in the request body doesn't correspond to an existing file upload on the site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
addTagsToDataSource:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400075",
    "condition": "Error adding tags",
    "details": "There was a problem adding tags to the specified data source."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Adding tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add tags. This error is raised even if the <tags> element is empty."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is not for an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Data source ID mismatch",
    "details": "The request body contains a data source ID (which is optional) and it doesn't match the ID in the URI."
  },
  {
    "status": "404",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
deleteTagFromDataSource:[
  {
    "status": "400",
    "code": "400077",
    "condition": "Error deleting tag",
    "details": "There was a problem deleting the tag from the specified data source."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Deleting tags forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete a tag from the specified data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404007",
    "condition": "Tag not found",
    "details": "The tag in the URI doesn't exist for the specified data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
queryDataSource:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to query a data source, but the caller doesn't have Connect permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDataSources:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDataSourceConnections:[
  {
    "status": "403",
    "code": "403021",
    "condition": "Read forbidden",
    "details": "A user who is not a server administrator user attempted to query the data source connections, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getDataSourceRevisions:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "403",
    "code": "403054",
    "condition": "A non-administrator user attempted to get data source revision information, but the caller doesn't have sufficient permissions.",
    "details": ""
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadDataSource:[
  {
    "status": "403",
    "code": "403028",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to download a data source, but the caller doesn't have Read permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
downloadDataSourceRevision:[
  {
    "status": "403",
    "code": "403028",
    "condition": "Read forbidden",
    "details": "A non-administrator user attempted to download a data source, but the caller doesn't have required permissions."
  },
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404024",
    "condition": "Data source revision not found",
    "details": "The revision number in the URI doesn't correspond to an existing data source revision."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
updateDataSource:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400129",
    "condition": "Invalid Ask Data enablement",
    "details": "The requested enablement setting in the request body does not correspond to the site configuration."
  },
  {
    "status": "403",
    "code": "403027",
    "condition": "Owner update forbidden",
    "details": "A non-administrator user tried to change the owner for the data source."
  },
  {
    "status": "403",
    "code": "403030",
    "condition": "Project update forbidden",
    "details": "A non-administrator user tried to change the project for the data source, but the caller doesn't have Write permission for the project."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to update a data source, but the caller doesn't have Write permission."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "Owner not found",
    "details": "The owner ID in the request body doesn't correspond to an existing owner."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409015",
    "condition": "Data source name conflict",
    "details": "The data source name in the request already belongs to the specified site. For the purpose of uniqueness checks, data source names are case-insensitive."
  }
],
updateDataSourceConnection:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403023",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to update a data source, but the caller doesn't have Write permission."
  },
  {
    "status": "403",
    "code": "403027",
    "condition": "Owner update forbidden",
    "details": "A non-administrator user tried to change connection information, but the caller doesn't have Write permission."
  },
  {
    "status": "403",
    "code": "403062",
    "condition": "Unsupported operation",
    "details": "The data source contains multiple connections, but the URI did not include /connections/connection-id to indicate which connection should be updated."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
updateDataSourceNow:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad Request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401000",
    "condition": "Unauthorized Access",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Update Forbidden",
    "details": "A non-administrator user attempted to update a data source, but the caller doesn't have sufficient permissions."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is unknown."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI is unknown."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
deleteDataSource:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Deletion forbidden",
    "details": "A non-administrator user called this method but doesn't have Read (view) and Delete permission for the data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source in the site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
removeDataSourceRevision:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Deletion forbidden",
    "details": "A non-administrator user attempted to remove a data source revision, but the caller doesn't have required permissions."
  },
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "403",
    "code": "403055",
    "condition": "Cannot delete head revision",
    "details": "The head (first) version cannot be deleted. To remove the data source, call Delete Data Source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404024",
    "condition": "Data source revision not found",
    "details": "The revision number in the URI doesn't correspond to an existing data source revision."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
createGroup:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400013",
    "condition": "Invalid site role",
    "details": "The value of the siteRole attribute must be Creator, Explorer, ExplorerCanPublish, SiteAdministratorCreator, SiteAdministratorExplorer, Unlicensed, or Viewer."
  },
  {
    "status": "400",
    "code": "400019",
    "condition": "Malformed import element",
    "details": "When the <import> element is present in the request body, the following attributes must be specified: source with the value ActiveDirectory; domainName; and siteRole If any of these is missing, the element is malformed."
  },
  {
    "status": "403",
    "code": "403011",
    "condition": "ActiveDirectory is not configured",
    "details": "The <import> element is present, but Tableau Server is configured for local authentication."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404016",
    "condition": "Domain not found",
    "details": "The request body includes an <import> element, but the specified domain name doesn't exist in Active Directory."
  },
  {
    "status": "404",
    "code": "404017",
    "condition": "Active Directory group not found",
    "details": "The request body includes an <import> element, but no group exists in Active Directory that matches the specified group name."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409009",
    "condition": "Group name conflict",
    "details": "The group name in the request already belongs to the specified site. For the purpose of uniqueness checks, group names are case-insensitive."
  }
],
addUserToGroup:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group name in the request body doesn't correspond to an existing group."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409011",
    "condition": "User conflict",
    "details": "The specified user is already a member of the group."
  }
],
addUserToSite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400013",
    "condition": "Invalid site role",
    "details": "The value of the siteRole attribute must be Explorer, ExplorerCanPublish, SiteAdministratorCreator, SiteAdministratorExplorer, Unlicensed, or Viewer."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The server is configured to use Active Directory for authentication, and the username specified in the request body doesn't match an existing user in Active Directory."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409000",
    "condition": "User conflict",
    "details": "The specified user already exists on the site."
  },
  {
    "status": "409",
    "code": "409005",
    "condition": "Guest user conflict",
    "details": "The Tableau Server API doesn't allow adding a user with the guest role to a site."
  }
],
getGroupsForAUser:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "User not found",
    "details": "The group ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getUsersInGroup:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getUsersOnSite:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number is not an integer, is less than one, or is greater than the final page number for users at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryGroups:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryUserOnSite:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "403",
    "code": "403133",
    "condition": "Query user permissions forbidden",
    "details": "The user does not have permissions to query user information for other users."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
updateGroup:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "400013",
    "condition": "Invalid site role",
    "details": "The value of the minimumSiteRole attribute must be Explorer, ExplorerCanPublish, SiteAdministratorCreator, SiteAdministratorExplorer, Unlicensed, or Viewer."
  },
  {
    "status": "403",
    "code": "400019",
    "condition": "Malformed import element",
    "details": "If the body includes an <import> element, it must contain a source, domainName, and minimumSiteRole attribute. If any of these attributes are missing, the element is malformed. In addition, the source attribute must have a value of ActiveDirectory; otherwise the element is malformed."
  },
  {
    "status": "403",
    "code": "403011",
    "condition": "ActiveDirectory not configured",
    "details": "The request body contains an <import> element is included, but Tableau Server is configured for local authentication."
  },
  {
    "status": "403",
    "code": "403020",
    "condition": "Imported group name update forbidden",
    "details": "The request body contains an <import> element and the value of the name attribute of the <group> element in the request body is different from the name of the group imported into Tableau Server as referenced by the group-id value in the URI."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404016",
    "condition": "Domain not found",
    "details": "The request body includes an <import> element, but the specified domain name doesn't exist in Active Directory."
  },
  {
    "status": "404",
    "code": "404017",
    "condition": "Active Directory group not found",
    "details": "The request body includes an <import> element, but no group with the name specified in the <group> element exists in Active Directory."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409009",
    "condition": "Group name conflict",
    "details": "The group name in the request is already in use in the specified site. For the purpose of uniqueness checks, group names are case-insensitive."
  }
],
updateUser:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400000",
    "condition": "Invalid email address",
    "details": "The email attribute does not contain a valid email address."
  },
  {
    "status": "403",
    "code": "403009",
    "condition": "Licensing update on self forbidden",
    "details": "A user cannot update their own licensing role."
  },
  {
    "status": "403",
    "code": "403009",
    "condition": "Guest update forbidden",
    "details": "The Guest user is a special user and cannot be updated."
  },
  {
    "status": "400",
    "code": "400013",
    "condition": "Invalid site role",
    "details": "The value of the siteRole attribute must be Creator, Explorer, ExplorerCanPublish, ServerAdministrator, SiteAdministratorExplorer, SiteAdministratorCreator, Unlicensed, or Viewer."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409000",
    "condition": "User conflict",
    "details": "The user with the specified name is already registered on the site in the same domain."
  },
  {
    "status": "409",
    "code": "409014",
    "condition": "Licensing conflict",
    "details": "The request is attempting to update the user to a licensing role that has insufficient capacity."
  }
],
removeUserFromGroup:[
  {
    "status": "400",
    "code": "400032",
    "condition": "Deletion failed",
    "details": "A problem arose that prevented the user from being removed from the site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user name in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group name in the URI doesn't correspond to an existing group."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
removeUserFromSite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Deletion failed",
    "details": "Some other problem arose that prevented the user from being removed from the site."
  },
  {
    "status": "403",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  },
  {
    "status": "409",
    "code": "409003",
    "condition": "User asset conflict",
    "details": "The specified user still owns content on Tableau Server and cannot be deleted."
  }
],
deleteGroup:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group or the group is not part of the specified site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
addDefaultDatabasePermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "403",
    "code": "403114",
    "condition": "Permissions setting forbidden",
    "details": "Default permissions cannot be added because the database asset is locked."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404003",
    "condition": "Resource not found",
    "details": "The database ID in the URI doesn't correspond to a database asset on the site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
queryDefaultDatabasePermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400120",
    "condition": "Bad request",
    "details": "Permissions could not be returned because support for explicit permissions is available for database assets associated with published data sources only."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to see the database asset."
  },
  {
    "status": "403",
    "code": "403115",
    "condition": "Permissions setting forbidden",
    "details": "Default permissions cannot be queried because the user is not a Tableau Server admin, Tableau Online site admin, or have explicit Set Permissions on the database asset."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404003",
    "condition": "Resource not found",
    "details": "The database ID in the URI doesn't correspond to a database asset on the site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
removeWorkbookRevision:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Deletion forbidden",
    "details": "A non-administrator user attempted to remove a data source revision, but the caller doesn't have required permissions."
  },
  {
    "status": "403",
    "code": "403053",
    "condition": "Version history not enabled",
    "details": "version history is not enabled for the specified site."
  },
  {
    "status": "403",
    "code": "403055",
    "condition": "Cannot delete head revision",
    "details": "The head (first) version cannot be deleted. To remove the workbook, call Delete Workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404024",
    "condition": "Workbook revision not found",
    "details": "The revision number in the URI doesn't correspond to an existing workbook revision."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
addDataSourcePermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The specified capability is invalid for a data source. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "No permissions to set permissions.",
    "details": "A user attempted to add permissions to a data source, but the caller doesn't have permission to set permissions on the data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user specified in the request body doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The specified data source doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group specified in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "A capability specified in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addProjectPermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability specified in the request is not in the list of valid capability names for this method.   The mode of the capability for ProjectLeader cannot be set to Deny."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "A project ID specified in the URI does not match the project ID specified in the request body. (You do not have to specify a project ID in the request body.)"
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addDefaultPermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write."
  },
  {
    "status": "400",
    "code": "400042",
    "condition": "Malformed permissions qualifier",
    "details": "The request body includes a <workbook> or <datasource> element."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "A project ID specified in the URI does not match the project ID specified in the request body. (You do not have to specify a project ID in the request body.)"
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addDefaultPermissionsForWorkbooks:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write."
  },
  {
    "status": "400",
    "code": "400042",
    "condition": "Malformed permissions qualifier",
    "details": "The request body includes a <workbook> or <datasource> element."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "A project ID specified in the URI does not match the project ID specified in the request body. (You do not have to specify a project ID in the request body.)"
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addDefaultPermissionsForDatasources:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write."
  },
  {
    "status": "400",
    "code": "400042",
    "condition": "Malformed permissions qualifier",
    "details": "The request body includes a <workbook> or <datasource> element."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "A project ID specified in the URI does not match the project ID specified in the request body. (You do not have to specify a project ID in the request body.)"
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addDefaultPermissionsForFlows:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write."
  },
  {
    "status": "400",
    "code": "400042",
    "condition": "Malformed permissions qualifier",
    "details": "The request body includes a <workbook> or <datasource> element."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add permissions on the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body as the grantee doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404009",
    "condition": "Project ID mismatch",
    "details": "A project ID specified in the URI does not match the project ID specified in the request body. (You do not have to specify a project ID in the request body.)"
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the request body doesn't correspond to a defined capability. This can apply to either an invalid capability name or to a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addViewPermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the view."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or an invalid capability value (other than Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addWorkbookPermissions:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a workbook resource. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the request body doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addWorkbookToSchedule:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad Request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized Access",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Update Forbidden",
    "details": "A non-administrator user called this method, but the caller doesn't have sufficient permissions."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is unknown."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Resource not found",
    "details": "The workbook ID in the request body is unknown."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "500",
    "code": "500000",
    "condition": "Internal Server Error",
    "details": "The schedule ID in the URI is unknown."
  }
],
queryDataSourcePermissions:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryProjectPermissions:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDefaultPermissions:[
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying data source permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for data sources."
  },
  {
    "status": "403",
    "code": "403036",
    "condition": "Querying workbook permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for workbooks."
  },
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying flow permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for flows."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDefaultPermissionsForDatasources:[
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying data source permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for data sources."
  },
  {
    "status": "403",
    "code": "403036",
    "condition": "Querying workbook permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for workbooks."
  },
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying flow permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for flows."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDefaultPermissionsForWorkbooks:[
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying data source permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for data sources."
  },
  {
    "status": "403",
    "code": "403036",
    "condition": "Querying workbook permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for workbooks."
  },
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying flow permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for flows."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryDefaultPermissionsForFlows:[
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying data source permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for data sources."
  },
  {
    "status": "403",
    "code": "403036",
    "condition": "Querying workbook permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for workbooks."
  },
  {
    "status": "403",
    "code": "403035",
    "condition": "Querying flow permissions forbidden",
    "details": "The caller doesn't have permissions to query the project's default permissions for flows."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryViewPermissions:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the view."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryWorkbookPermissions:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
deleteDataSourcePermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDataSourcePermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDataSorucePermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a data source. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to set permissions on the data source."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteProjectPermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a project. For a list of valid capabilities, see the capability-name attribute earlier."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove default permissions for the project."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Delete forbidden",
    "details": "A non-administrative user tried to update the project, but does not have permissions to the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteProjectPermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a project. For a list of valid capabilities, see the capability-name attribute earlier."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove default permissions for the project."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Delete forbidden",
    "details": "A non-administrative user tried to update the project, but does not have permissions to the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteProjectPermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a project. For a list of valid capabilities, see the capability-name attribute earlier."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove default permissions for the project."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Delete forbidden",
    "details": "A non-administrative user tried to update the project, but does not have permissions to the project."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultPermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultWorkbookPermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultWorkbookPermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultDatasourcePermissionsForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultFlowPermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDefaultFlowPermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project."
  },
  {
    "status": "403",
    "code": "403095",
    "condition": "Delete permissions for flows forbidden",
    "details": "A non-administrator user called this method but doesn't have permissions to remove permissions for the project where the flow is located."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "A user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI isn't assigned to the specified user or group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny for any mode value."
  },
  {
    "status": "404",
    "code": "404027",
    "condition": "Flow not found",
    "details": "The flow ID in the URI doesn't correspond to an existing flow."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteViewPermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions on the view."
  },
  {
    "status": "403",
    "code": "403039",
    "condition": "Project permissions locked",
    "details": "The parent project that contains the specified view has its permissions locked."
  },
  {
    "status": "403",
    "code": "403096",
    "condition": "Parent workbook tabs enabled",
    "details": "The specified view currently has permissions inherited from its parent workbook. View permission can be deleted if the parent workbook has its tabs disabled."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn’t correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or an invalid capability value (other than Allow or Deny)."
  },
  {
    "status": "404",
    "code": "404014",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteViewPermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions on the view."
  },
  {
    "status": "403",
    "code": "403039",
    "condition": "Project permissions locked",
    "details": "The parent project that contains the specified view has its permissions locked."
  },
  {
    "status": "403",
    "code": "403096",
    "condition": "Parent workbook tabs enabled",
    "details": "The specified view currently has permissions inherited from its parent workbook. View permission can be deleted if the parent workbook has its tabs disabled."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn’t correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or an invalid capability value (other than Allow or Deny)."
  },
  {
    "status": "404",
    "code": "404014",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteViewPermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a view."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions on the view."
  },
  {
    "status": "403",
    "code": "403039",
    "condition": "Project permissions locked",
    "details": "The parent project that contains the specified view has its permissions locked."
  },
  {
    "status": "403",
    "code": "403096",
    "condition": "Parent workbook tabs enabled",
    "details": "The specified view currently has permissions inherited from its parent workbook. View permission can be deleted if the parent workbook has its tabs disabled."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn’t correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "A group ID in the request body doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The specified capability doesn't correspond to a defined capability. This can apply to either an invalid capability name or an invalid capability value (other than Allow or Deny)."
  },
  {
    "status": "404",
    "code": "404014",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteWorkbookPermission:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a workbook resource. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, Share_view, ViewComments, ViewUnderlyingData, WebAuthoring, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions from the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny at the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteWorkbookPermissionForGroup:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a workbook resource. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, Share_view, ViewComments, ViewUnderlyingData, WebAuthoring, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions from the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny at the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteWorkbookPermissionForUser:[
  {
    "status": "400",
    "code": "400009",
    "condition": "Invalid capability",
    "details": "The capability in the URI is invalid for a workbook resource. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read, Share_view, ViewComments, ViewUnderlyingData, WebAuthoring, and Write."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Permissions setting forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to delete permissions from the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404012",
    "condition": "Group not found",
    "details": "The group ID in the URI doesn't correspond to an existing group."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not found",
    "details": "The capability in the URI doesn't correspond to a defined capability. This can apply to either an invalid capability name or a capability other than Allow or Deny at the end of the URI."
  },
  {
    "status": "404",
    "code": "404013",
    "condition": "Capability not assigned",
    "details": "The capability in the URI is not assigned to the specified user or group with the specified mode (Allow or Deny)."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
addDataSourceToSchedule:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad Request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "Unauthorized Access",
    "details": "The authentication token provided in the request header was invalid or has expired."
  },
  {
    "status": "403",
    "code": "403032",
    "condition": "Update Forbidden",
    "details": "A non-administrator user called this method, but the caller doesn't have sufficient permissions."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI is unknown."
  },
  {
    "status": "404",
    "code": "404004",
    "condition": "Resource not found",
    "details": "The data source ID in the request body is unknown."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "500",
    "code": "500000",
    "condition": "Internal Server Error",
    "details": "The schedule ID in the URI is unknown."
  }
],
cancelJob:[
  {
    "status": "403",
    "code": "403032",
    "condition": "Update forbidden",
    "details": "A non-administrator user tried to cancel a job."
  },
  {
    "status": "403",
    "code": "403091",
    "condition": "Can not cancel job, because it's already complete.",
    "details": "The job ID provided is for a job that has already succeeded or failed."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
queryJob:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404018",
    "condition": "Job not found",
    "details": "The job ID in the URI doesn't correspond to an existing job."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
queryJobs:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getExtractRefreshTask:[
  {
    "status": "404",
    "code": "404026",
    "condition": "Task not found",
    "details": "The task ID in the URI doesn't correspond to an existing task."
  },
  {
    "status": "405",
    "code": "40500",
    "condition": "Invalid requests method",
    "details": "Request type was not GET"
  }
],
createSchedule:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400064",
    "condition": "Error creating schedule",
    "details": "An unspecified error occurred while trying to create the schedule."
  },
  {
    "status": "400",
    "code": "409004",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete. For hourly, daily, or monthly schedules, this often means that the content of the <intervals> element does not match the expected format. The <detail> element of the error provides detail about the expected format."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409021",
    "condition": "Schedule name conflict",
    "details": "The schedule name in the request already belongs to an existing schedule."
  }
],
queryExtractRefreshTasks:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "400",
    "code": "400047",
    "condition": "Invalid schedule type",
    "details": "The schedule type does not represent an extract refresh task. (For example, it might be a subscription task.)"
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404",
    "condition": "Schedule not found",
    "details": "The schedule ID in the URI doesn't correspond to an existing schedule."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySchedules:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for data sources at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
runExtractRefreshTask:[
  {
    "status": "403",
    "code": "403047",
    "condition": "Extract refresh error",
    "details": "The task specified is not an extract refresh task."
  },
  {
    "status": "404",
    "code": "404026",
    "condition": "Task not found",
    "details": "The task ID in the URI doesn't correspond to an existing task."
  },
  {
    "status": "405",
    "code": "40500",
    "condition": "Invalid requests method",
    "details": "Request type was not POST"
  }
],
updateSchedule:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400008",
    "condition": "Invalid Parameter",
    "details": "One of the parameters in the request body is invalid."
  },
  {
    "status": "400",
    "code": "400071",
    "condition": "Error updating schedule",
    "details": "The schedule couldn't be updated for an unspecified reason."
  },
  {
    "status": "404",
    "code": "404023",
    "condition": "Schedule not found",
    "details": "The specified schedule doesn't correspond to an existing schedule."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409021",
    "condition": "Schedule name conflict",
    "details": "The schedule name in the request already belongs to an existing schedule."
  }
],
deleteSchedule:[
  {
    "status": "400",
    "code": "400059",
    "condition": "Error deleting the schedule.",
    "details": "An unspecified error occured during the deletion operation."
  },
  {
    "status": "404",
    "code": "404023",
    "condition": "Schedule not found",
    "details": "The specified schedule doesn't correspond to an existing schedule on the site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteDataAccelerationTask:[
  {
    "status": "403",
    "code": "409087",
    "condition": "Permission denied",
    "details": "The user isn't authorized to view data acceleration tasks."
  },
  {
    "status": "403",
    "code": "409087",
    "condition": "Permission denied",
    "details": "The user isn't authorized to access the workbook."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404026",
    "condition": "Task not found",
    "details": "The task id in the URI doesn't correspond to an existing task."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
getDataAccelerationTasks:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "40500",
    "condition": "Invalid requests method",
    "details": "Request type was not GET"
  }
],
createSubscription:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400067",
    "condition": "Invalid subscription subject",
    "details": "The subscription subject is null or empty."
  },
  {
    "status": "400",
    "code": "400068",
    "condition": "Invalid subscription target",
    "details": "The content type specified in the request body is not a workbook or view."
  },
  {
    "status": "400",
    "code": "400069",
    "condition": "Invalid subscription type",
    "details": "The subscription type is not Workbook or View."
  },
  {
    "status": "400",
    "code": "400069",
    "condition": "Invalid schedule type",
    "details": "The schedule type is not Subscription."
  },
  {
    "status": "403",
    "code": "403060",
    "condition": "No permissions to create subscription.",
    "details": "The user does not have permission to create a subscription for the specified content."
  },
  {
    "status": "403",
    "code": "403063",
    "condition": "No user permissions for content.",
    "details": "The user specified in the request body does not have Read (view) permissions for the specified content."
  },
  {
    "status": "403",
    "code": "403064",
    "condition": "No user email address.",
    "details": "The user does not have an email address."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user specified in the request body doesn't correspond to an existing user."
  },
  {
    "status": "400",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the request body doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the request body doesn't correspond to an existing view."
  },
  {
    "status": "404",
    "code": "404023",
    "condition": "Schedule not found",
    "details": "The schedule ID in the request body doesn't correspond to an existing schedule."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
querySubscription:[
  {
    "status": "403",
    "code": "403058",
    "condition": "Unauthorized",
    "details": "The user attempted to get information for a subscription that they don't have permission to access."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404025",
    "condition": "Subscription not found",
    "details": "The specified subscription doesn't correspond to an existing subscription."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
querySubscriptions:[
  {
    "status": "400",
    "code": "400006",
    "condition": "Invalid page number",
    "details": "The page number parameter is not an integer, is less than one, or is greater than the final page number for the sites at the requested page size."
  },
  {
    "status": "400",
    "code": "400007",
    "condition": "Invalid page size",
    "details": "The page size parameter is not an integer, or is less than one."
  },
  {
    "status": "403",
    "code": "403014",
    "condition": "Page size limit exceeded",
    "details": "The specified page size is larger than the maximum page size."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
updateSubscription:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400067",
    "condition": "Invalid subscription subject",
    "details": "The subscription subject is null or empty."
  },
  {
    "status": "400",
    "code": "400069",
    "condition": "Invalid subscription type",
    "details": "The subscription type is not Workbook or View."
  },
  {
    "status": "400",
    "code": "400069",
    "condition": "Invalid schedule type",
    "details": "The schedule type is not Subscription."
  },
  {
    "status": "400",
    "code": "400133",
    "condition": "Invalid data condition type",
    "details": "The data condition type is invalid for the subscription."
  },
  {
    "status": "403",
    "code": "403065",
    "condition": "No permissions to update subscription.",
    "details": "The user does not have permission to update the specified subscription."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404023",
    "condition": "Schedule not found",
    "details": "The schedule ID in the request body doesn't correspond to an existing schedule."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
deleteSubscription:[
  {
    "status": "400",
    "code": "400062",
    "condition": "Error deleting the subscription.",
    "details": "An unspecified error occured during the deletion operation."
  },
  {
    "status": "401",
    "code": "401002",
    "condition": "User not authenticated.",
    "details": "The user making the request has not been authenticated for this site."
  },
  {
    "status": "403",
    "code": "403059",
    "condition": "Delete forbidden.",
    "details": "A non-administrator user called this method but doesn't have permission to delete the subscription."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
addDataSourceToFavorites:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400005",
    "condition": "Invalid label",
    "details": "The favorite label is empty or consists of only white space characters."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Forbidden favorites access",
    "details": "A non-administrator user called this method but doesn't have permission to add a data source to the specified user's favorites. This will always be the case when the user ID in the URI represents a different user than a non-administrator user who is calling the method."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "Data source not found",
    "details": "The data source ID in the request body doesn't correspond to an existing data source."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409007",
    "condition": "Label conflict",
    "details": "There is already a favorite with the same label for a different data source in the specified user's favorites."
  }
],
addProjectToFavorites:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400005",
    "condition": "Invalid label",
    "details": "The favorite label is empty or consists of only white space characters."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Access to favorites denied",
    "details": "A non-administrator user called this method but doesn't have permission to add a project to the specified user's favorites. This will always be the case when the user ID in the URI represents a different user than a non-administrator user who is calling the method."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the request body doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
addViewToFavorites:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400005",
    "condition": "Invalid label",
    "details": "The favorite label is empty or consists of only white space characters."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Forbidden Favorites access",
    "details": "A non-administrator user called this method but doesn't have permission to add a view to the specified user's favorites. This will always be the case when the user ID in the URI represents a different user than a non-administrator user who is calling the method."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the request body doesn't correspond to an existing view."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409007",
    "condition": "Label conflict",
    "details": "There is already a favorite with the same label for a different view of the same workbook in the specified user's favorites."
  }
],
addWorkbookToFavorites:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400005",
    "condition": "Invalid label",
    "details": "The favorite label is empty or consists of only white space characters."
  },
  {
    "status": "403",
    "code": "403004",
    "condition": "Access to Favorites forbidden",
    "details": "A non-administrator user called this method but doesn't have permission to add a workbook to the specified user's favorites. This will always be the case when the user references in the URI identifies a user other than the user who is calling the method."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the request body doesn't correspond to an existing workbook."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  },
  {
    "status": "409",
    "code": "409007",
    "condition": "Label conflict",
    "details": "There is already a favorite with the same label for a different workbook in the specified user's favorites."
  }
],
deleteDataSourceFromFavorites:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Forbidden favorites access",
    "details": "A non-administrator user attempted to delete a data source from a different user's favorites."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user"
  },
  {
    "status": "404",
    "code": "404010",
    "condition": "Data source not a favorite",
    "details": "The data source ID in the URI exists but is not a favorite of the specified user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "Data source not found",
    "details": "The data source ID in the URI doesn't correspond to an existing data source"
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteProjectFromFavorites:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Forbidden favorites access",
    "details": "A non-administrator user attempted to delete a project from a different user's favorites."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404005",
    "condition": "Project not found",
    "details": "The project ID in the URI doesn't correspond to an existing project."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteViewFromFavorites:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Forbidden Favorites access",
    "details": "A non-administrator user attempted to delete a view from a different user's favorites."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID or URL namespace in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user"
  },
  {
    "status": "404",
    "code": "404010",
    "condition": "View not a favorite",
    "details": "The view ID in the URI exists but is not a favorite of the specified user."
  },
  {
    "status": "404",
    "code": "404011",
    "condition": "View not found",
    "details": "The view ID in the URI doesn't correspond to an existing view"
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
deleteWorkbookFromFavorites:[
  {
    "status": "403",
    "code": "403004",
    "condition": "Access to Favorites forbidden",
    "details": "A non-administrator user attempted to delete a workbook from a different user's favorites."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  },
  {
    "status": "404",
    "code": "404006",
    "condition": "Workbook not found",
    "details": "The workbook ID in the URI doesn't correspond to an existing workbook."
  },
  {
    "status": "404",
    "code": "404010",
    "condition": "Workbook not a favorite",
    "details": "The workbook ID in the URI exists but belongs to a different user."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
getFavoritesForUser:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404002",
    "condition": "User not found",
    "details": "The user ID in the URI doesn't correspond to an existing user."
  }
],
initiateFileUpload:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "403",
    "code": "403015",
    "condition": "Access to Favorites forbidden",
    "details": "A non-administrator user attempted to initiate a file upload, but the caller doesn't have publishing rights on the site."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
appendToFileUpload:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "400",
    "code": "400016",
    "condition": "File size too large",
    "details": "The attached file exceeds the configured maximum attachment size for a single append call. The maximum allowable size will be reported in the error response."
  },
  {
    "status": "400",
    "code": "400019",
    "condition": "Malformed request body",
    "details": "The XML content in the MIME multipart request is not empty."
  },
  {
    "status": "400",
    "code": "400020",
    "condition": "Missing file data",
    "details": "There is no attachment in the request with the file data to be appended to the upload."
  },
  {
    "status": "403",
    "code": "403007",
    "condition": "Not a publisher",
    "details": "A non-administrator user attempted to initiate a file upload, but the caller doesn't have publishing rights on the site."
  },
  {
    "status": "403",
    "code": "403016",
    "condition": "Upload failure",
    "details": "The file could not be uploaded for some other reason than those specified earlier."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404015",
    "condition": "File upload not found",
    "details": "The file upload ID in the URI doesn't correspond to an existing file upload."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not PUT."
  }
],
serverInfo:[
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
getCurrentServerSessionDetails:[
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not GET."
  }
],
createAnExtractForADataSource:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409070",
    "condition": "Invalid request method",
    "details": "The data source cannot be extracted because it is file based or in another unsupported form."
  }
],
deleteAnExtractFromADataSource:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409070",
    "condition": "Invalid request method",
    "details": "The data source cannot be extracted because it is file based or in another unsupported form."
  }
],
createExtractsForEmbeddedDataSourcesInAWorkbook:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409070",
    "condition": "Invalid request method",
    "details": "The data source cannot be extracted because it is file based or in another unsupported form."
  }
],
deleteExtractsForEmbeddedDataSourcesInAWorkbook:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  },
  {
    "status": "409",
    "code": "409070",
    "condition": "Invalid request method",
    "details": "The data source cannot be extracted because it is file based or in another unsupported form."
  }
],
deleteExtractRefreshTask:[
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The site ID in the URI doesn't correspond to an existing site."
  },
  {
    "status": "404",
    "code": "404026",
    "condition": "Task not found",
    "details": "The task id in the URI doesn't correspond to an existing extract refresh task."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not DELETE."
  }
],
encryptExtractsInASite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
decryptExtractsInASite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
],
reencryptExtractsInASite:[
  {
    "status": "400",
    "code": "400000",
    "condition": "Bad request",
    "details": "The content of the request body is missing or incomplete, or contains malformed XML."
  },
  {
    "status": "404",
    "code": "404000",
    "condition": "Site not found",
    "details": "The specified site doesn't correspond to an existing site."
  },
  {
    "status": "405",
    "code": "405000",
    "condition": "Invalid request method",
    "details": "Request type was not POST."
  }
]}
