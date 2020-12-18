# tabbycat

Promise-based client for Tableau Server Rest API for the browser and node.js
using axios. Tableau are moving towards openAPI specs which will mean clients can be generated, but that's not the case for the main API. In an attempt to be as complete as possible this client is generated from Tableau's documentation and xsd files. 

## Version 0.1.0

> :warning: **Under Active Development** :warning:
>
> This API client is built using code generation and there are many routes that have not been tested yet.
> Until version 1.0.0 is reached breaking api changes may be released, see changelog for details
> 

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Browser Support](#browser-support)
* [Example](#example)
* [tabbycat API](#tabbycat-api-reference)
* [Filtering and Expression Building](#filtering-and-expression-building)
* [Handling Errors](#handling-errors)
* [Development](#development)
* [Typescript](#typescript)
* [Credits](#credits)
* [Licence](#licence)

## Features

* Javascript client library to cover the ever-expanding Tableau REST API
* Handles credential caching for you as well as current site
* Helpers to build complex field, filter and sort expressions for query methods
* JSDoc and Typescript definition files for intellisense in editors

## Installation

```
$ npm install tabbycat --save
```

## Example

Create a client and pass in a baseURL for your server. You can also hardcode your API version here which is sensible in case the library gets ahead of your deployed version.



```js
const tabbycat = require('tabbycat');
const client = new tabbycat.TableauRestAPIClient({ baseURL: "https://myserver.com" });
const credentials = { 
        credentials: { 
            name: "topcat", 
            password: "officerdibble",
            site: { contentUrl: "mysite"}
        }
    };

const doStuff = async () => {
    // call sign in
    await client.signIn(credentials);
    // client handles token in response
    const projects = await client.queryProjects();
    // to work with another site call switchSite
    await client.switchSite({ site: { contentUrl: "myothersite" }});
    // client handles new token and remembers which site you're on
    const workbooks = await client.queryWorkbooksForSite();
}

doStuff();

```

You can either use a Promise syntax utilisiing `.then()` or `.catch()` or you can use `await` syntax (inside an async function). Responses are returned as specific response objects that contain the data in a named key and where applicable pagination information. 


```js
// using promise syntax
client.queryWorkbooksForSite()
    .then(w => { console.log(w.workbooks); })
    .catch(e => { console.error(e); })
    ;

// using deconstruction and await syntax to access return values
// ** needs to be in an async function **
try {
    const { workbooks, pagination } = await client.queryWorkbooksForSite();
} catch(e) {
    // tableau error will be in e.response.data
    // other request information in e such as headers, original request
    console.error(e);
}
```

## tabbycat API reference

### Authentication Calls

```js
// Sign In
signIn(credentials)
// Sign Out
signOut()
// Switch Site
switchSite(site)
```

### Sites Calls

```js
// Create Site
createSite(site)
// Query Site
querySite(siteName, contentUrl, queryOptions)
// Query Site By ID
querySiteByID(queryOptions)
// Query Site By Name
querySiteByName(siteName, queryOptions)
// Query Site By Content Url
querySiteByContentUrl(contentUrl, queryOptions)
// Query Sites
querySites(queryOptions)
// Get Recently Viewed for Site
getRecentlyViewedForSite()
// Query Views for Site
queryViewsForSite(queryOptions)
// Update Site
updateSite(site)
// Delete Site
deleteSite(siteName, contentUrl)
// Delete Site By ID
deleteSiteByID()
// Delete Site By Name
deleteSiteByName(siteName)
// Delete Site By Content Url
deleteSiteByContentUrl(contentUrl)
```

### Workbooks and Views Calls

```js
// Get Recently Viewed for Site
getRecentlyViewedForSite()
// Query Views for Site
queryViewsForSite(queryOptions)
// Publish Workbook
publishWorkbook(workbook, file, queryOptions)
// Add Tags to View
addTagsToView(viewId, tags)
// Add Tags to Workbook
addTagsToWorkbook(workbookId, tags)
// Query Views for Workbook
queryViewsForWorkbook(workbookId, queryOptions)
// Query View Data
queryViewData(viewId, queryOptions)
// Query View Image
queryViewImage(viewId, queryOptions)
// Query View PDF
queryViewPDF(viewId, queryOptions)
// Query View Preview Image
queryViewPreviewImage(workbookId, viewId)
// Query Workbook
queryWorkbook(workbookId)
// Query Workbook Connections
queryWorkbookConnections(workbookId)
// Get View
getView(viewId)
// Get View by Path
getViewByPath(queryOptions)
// Get View Recommendations
getViewRecommendations()
// Get Workbook Revisions
getWorkbookRevisions(workbookId, queryOptions)
// Hide View Recommendations
hideViewRecommendations(recommendationDismissal)
// Unhide View Recommendations
unhideViewRecommendations(queryOptions)
// Query Workbook Preview Image
queryWorkbookPreviewImage(workbookId)
// Query Workbooks for Site
queryWorkbooksForSite(queryOptions)
// Query Workbooks for User
queryWorkbooksForUser(userId, queryOptions)
// Download View Crosstab Excel
downloadViewCrosstabExcel(viewId, queryOptions)
// Download Workbook
downloadWorkbook(workbookId, queryOptions)
// Download Workbook PDF
downloadWorkbookPDF(workbookId, queryOptions)
// Download Workbook Powerpoint
downloadWorkbookPowerpoint(workbookId, queryOptions)
// Download Workbook Revision
downloadWorkbookRevision(workbookId, revisionNumber, queryOptions)
// Update Workbook
updateWorkbook(workbookId, workbook)
// Update Workbook Connection
updateWorkbookConnection(workbookId, connectionId, connection)
// Update Workbook Now
updateWorkbookNow(workbookId)
// Delete Workbook
deleteWorkbook(workbookId)
// Delete Tag from View
deleteTagFromView(viewId, tagName)
// Delete Tag from Workbook
deleteTagFromWorkbook(workbookId, tagName)
// Get Data Acceleration Report for a Site
getDataAccelerationReportForASite()
```

### Publishing Calls

```js
// Update Site
updateSite(site)
// Publish Workbook
publishWorkbook(workbook, file, queryOptions)
// Publish Data Source
publishDataSource(datasource, file, queryOptions)
// Initiate File Upload
initiateFileUpload()
// Append to File Upload
appendToFileUpload(uploadSessionId, file)
```

### Data-Driven Alerts Calls

```js
// Delete Data-Driven Alert
deleteDataDrivenAlert(dataAlertId)
// Query Data-Driven Alert Details
queryDataDrivenAlertDetails(dataAlertId)
// Query Data-Driven Alerts
queryDataDrivenAlerts()
// Add User to Data-Driven Alert
addUserToDataDrivenAlert(dataAlertId, user)
// Delete User from Data-Driven Alert
deleteUserFromDataDrivenAlert(dataAlertId, userId)
// Update Data-Driven Alert
updateDataDrivenAlert(dataAlertId, dataAlert)
```

### Flows Calls

```js
// Add Flow Permissions
addFlowPermissions(flowId, permissions)
// Add Flow Task to Schedule
addFlowTaskToSchedule(scheduleId, task)
// Delete Flow
deleteFlow(flowId)
// Delete Flow Permission
deleteFlowPermission(flowId, groupId, userId, capabilityName, capabilityMode)
// Delete Flow Permissions For Group
deleteFlowPermissionsForGroup(flowId, groupId, capabilityName, capabilityMode)
// Delete Flow Permissions For User
deleteFlowPermissionsForUser(flowId, userId, capabilityName, capabilityMode)
// Download Flow
downloadFlow(flowId)
// Get Flow Run Task
getFlowRunTask(taskId)
// Get Flow Run Tasks
getFlowRunTasks()
// Publish Flow
publishFlow(flow, file)
// Query Flow
queryFlow(flowId)
// Query Flow Connections
queryFlowConnections(flowId)
// Query Flow Permissions
queryFlowPermissions(flowId)
// Query Flows for Site
queryFlowsForSite()
// Query Flows for User
queryFlowsForUser(userId, queryOptions)
// Run Flow Task
runFlowTask(taskId)
// Update Flow
updateFlow(flowId)
// Update Flow Connection
updateFlowConnection(flowId, connectionId)
```

### Projects Calls

```js
// Create Project
createProject(project, queryOptions)
// Query Projects
queryProjects(queryOptions)
// Update Project
updateProject(projectId, project, queryOptions)
// Delete Project
deleteProject(projectId)
```

### Revisions Calls

```js
// Get Workbook Revisions
getWorkbookRevisions(workbookId, queryOptions)
// Download Workbook Revision
downloadWorkbookRevision(workbookId, revisionNumber, queryOptions)
// Get Data Source Revisions
getDataSourceRevisions(datasourceId, queryOptions)
// Download Data Source Revision
downloadDataSourceRevision(datasourceId, revisionNumber, queryOptions)
// Remove Data Source Revision
removeDataSourceRevision(datasourceId, revisionNumber)
// Remove Workbook Revision
removeWorkbookRevision(workbookId, revisionNumber)
```

### Data sources Calls

```js
// Publish Data Source
publishDataSource(datasource, file, queryOptions)
// Add Tags to Data Source
addTagsToDataSource(datasourceId, tags)
// Delete Tag from Data Source
deleteTagFromDataSource(datasourceId, tagName)
// Query Data Source
queryDataSource(datasourceId)
// Query Data Sources
queryDataSources(queryOptions)
// Query Data Source Connections
queryDataSourceConnections(datasourceId)
// Get Data Source Revisions
getDataSourceRevisions(datasourceId, queryOptions)
// Download Data Source
downloadDataSource(datasourceId, queryOptions)
// Download Data Source Revision
downloadDataSourceRevision(datasourceId, revisionNumber, queryOptions)
// Update Data Source
updateDataSource(datasourceId, datasource)
// Update Data Source Connection
updateDataSourceConnection(datasourceId, connectionId, connection)
// Update Data Source Now
updateDataSourceNow(datasourceId)
// Delete Data Source
deleteDataSource(datasourceId)
// Remove Data Source Revision
removeDataSourceRevision(datasourceId, revisionNumber)
```

### Users and Groups Calls

```js
// Create Group
createGroup(group, queryOptions)
// Add User to Group
addUserToGroup(groupId, user)
// Add User to Site
addUserToSite(user)
// Get Groups for a User
getGroupsForAUser(userId, queryOptions)
// Get Users in Group
getUsersInGroup(groupId, queryOptions)
// Get Users on Site
getUsersOnSite(queryOptions)
// Query Groups
queryGroups(queryOptions)
// Query User On Site
queryUserOnSite(userId)
// Update Group
updateGroup(groupId, group)
// Update User
updateUser(userId, user)
// Remove User from Group
removeUserFromGroup(groupId, userId)
// Remove User from Site
removeUserFromSite(userId)
// Delete Group
deleteGroup(groupId)
```

### Metadata Calls

```js
// Query Database
queryDatabase(databaseId)
// Query Databases
queryDatabases()
// Update Database
updateDatabase(databaseId)
// Remove Database
removeDatabase(databaseId)
// Add Database Permissions
addDatabasePermissions(databaseId, permissions)
// Query Database Permissions
queryDatabasePermissions(databaseId)
// Add Default Database Permissions
addDefaultDatabasePermissions(databaseId, permissions)
// Query Default Database Permissions
queryDefaultDatabasePermissions(databaseId)
// Delete Database Permissions
deleteDatabasePermissions(databaseId, userId, groupId, capabilityName, capabilityMode)
// Delete Database Permissions For Group
deleteDatabasePermissionsForGroup(databaseId, userId, capabilityName, capabilityMode)
// Delete Database Permissions For User
deleteDatabasePermissionsForUser(databaseId, groupId, capabilityName, capabilityMode)
// Delete Default Database Permissions
deleteDefaultDatabasePermissions(databaseId, userId, capabilityMode, groupId)
// Delete Default Database Permissions For User
deleteDefaultDatabasePermissionsForUser(databaseId, userId, capabilityMode)
// Delete Default Database Permissions For Group
deleteDefaultDatabasePermissionsForGroup(databaseId, capabilityMode, groupId)
// Query Table
queryTable(tableId)
// Query Tables
queryTables()
// Update Table
updateTable(tableId, table)
// Remove Table
removeTable(tableId)
// Add Table Permissions
addTablePermissions(tableId, permissions)
// Query Table Permissions
queryTablePermissions(tableId)
// Delete Table Permissions
deleteTablePermissions(tableId)
// Query Column in a Table
queryColumnInATable(tableId, columnId)
// Query Columns in a Table
queryColumnsInATable(tableId)
// Update Column
updateColumn(tableId, columnId, column)
// Remove Column
removeColumn(tableId, columnId)
// Add Data Quality Warning
addDataQualityWarning(contentType, contentLuid, dataQualityWarning)
// Query Data Quality Warning by ID
queryDataQualityWarningByID(dataqualitywarningId)
// Query Data Quality Warning by Content
queryDataQualityWarningByContent(contentType, contentLuid)
// Update Data Quality Warning
updateDataQualityWarning(dataqualitywarningId, dataQualityWarning)
// Delete Data Quality Warning by ID
deleteDataQualityWarningByID(dataqualitywarningId)
// Delete Data Quality Warning by Content
deleteDataQualityWarningByContent(contentType, contentLuid)
// Add Tags to Database
addTagsToDatabase(databaseId, tags)
// Add Tags to Table
addTagsToTable(tableId, tags)
// Add Tags to Column
addTagsToColumn(columnId, tags)
// Batch Add Tags
batchAddTags(tagBatch)
// Delete Tag from Database
deleteTagFromDatabase(databaseId, tagName)
// Delete Tag from Table
deleteTagFromTable(tableId, tagName)
// Delete Tag from Column
deleteTagFromColumn(columnId, tagName)
// Batch Delete Tags
batchDeleteTags(tagBatch)
```

### Permissions Calls

```js
// Add Data Source Permissions
addDataSourcePermissions(datasourceId, permissions)
// Add Project Permissions
addProjectPermissions(projectId, permissions)
// Add Default Permissions
addDefaultPermissions(projectId, permissions)
// Add Default Permissions For Workbooks
addDefaultPermissionsForWorkbooks(projectId, permissions)
// Add Default Permissions For Datasources
addDefaultPermissionsForDatasources(projectId, permissions)
// Add Default Permissions For Flows
addDefaultPermissionsForFlows(projectId, permissions)
// Add View Permissions
addViewPermissions(viewId, permissions)
// Add Workbook Permissions
addWorkbookPermissions(workbookId, permissions)
// Add Workbook to Schedule
addWorkbookToSchedule(scheduleId, task)
// Query Data Source Permissions
queryDataSourcePermissions(datasourceId)
// Query Project Permissions
queryProjectPermissions(projectId)
// Query Default Permissions
queryDefaultPermissions(projectId)
// Query Default Permissions For Datasources
queryDefaultPermissionsForDatasources(projectId)
// Query Default Permissions For Workbooks
queryDefaultPermissionsForWorkbooks(projectId)
// Query Default Permissions For Flows
queryDefaultPermissionsForFlows(projectId)
// Query View Permissions
queryViewPermissions(viewId)
// Query Workbook Permissions
queryWorkbookPermissions(workbookId)
// Delete Data Source Permission
deleteDataSourcePermission(datasourceId, groupId, userId, capabilityName, capabilityMode)
// Delete Data Source Permission For Group
deleteDataSourcePermissionForGroup(datasourceId, groupId, capabilityName, capabilityMode)
// Delete Data Soruce Permission For User
deleteDataSorucePermissionForUser(datasourceId, userId, capabilityName, capabilityMode)
// Delete Project Permission
deleteProjectPermission(projectId, groupId, userId, capabilityName, capabilityMode)
// Delete Project Permission For Group
deleteProjectPermissionForGroup(projectId, groupId, capabilityName, capabilityMode)
// Delete Project Permission For User
deleteProjectPermissionForUser(projectId, userId, capabilityName, capabilityMode)
// Delete Default Permission
deleteDefaultPermission(projectId, groupId, userId, capabilityName, capabilityMode)
// Delete Default Workbook Permission For Group
deleteDefaultWorkbookPermissionForGroup(projectId, groupId, capabilityName, capabilityMode)
// Delete Default Workbook Permission For User
deleteDefaultWorkbookPermissionForUser(projectId, userId, capabilityName, capabilityMode)
// Delete Default Datasource Permissions For Group
deleteDefaultDatasourcePermissionsForGroup(projectId, groupId, capabilityName, capabilityMode)
// Delete Default Flow Permission For Group
deleteDefaultFlowPermissionForGroup(projectId, groupId, capabilityName, capabilityMode)
// Delete Default Flow Permission For User
deleteDefaultFlowPermissionForUser(projectId, userId, capabilityName, capabilityMode)
// Delete View Permission
deleteViewPermission(viewId, groupId, userId, capabilityName, capabilityMode)
// Delete View Permission For Group
deleteViewPermissionForGroup(viewId, groupId, capabilityName, capabilityMode)
// Delete View Permission For User
deleteViewPermissionForUser(viewId, userId, capabilityName, capabilityMode)
// Delete Workbook Permission
deleteWorkbookPermission(workbookId, groupId, userId, capabilityName, capabilityMode)
// Delete Workbook Permission For Group
deleteWorkbookPermissionForGroup(workbookId, groupId, capabilityName, capabilityMode)
// Delete Workbook Permission For User
deleteWorkbookPermissionForUser(workbookId, userId, capabilityName, capabilityMode)
```

### Jobs, Tasks, and Schedules Calls

```js
// Add Workbook to Schedule
addWorkbookToSchedule(scheduleId, task)
// Add Data Source to Schedule
addDataSourceToSchedule(scheduleId, task)
// Cancel Job
cancelJob(jobId)
// Query Job
queryJob(jobId)
// Query Jobs
queryJobs()
// Get Extract Refresh Task
getExtractRefreshTask(taskId)
// Get Extract Refresh Tasks
getExtractRefreshTasks()
// Create Schedule
createSchedule(schedule)
// Query Extract Refresh Tasks
queryExtractRefreshTasks(scheduleId, queryOptions)
// Query Schedules
querySchedules(queryOptions)
// Run Extract Refresh Task
runExtractRefreshTask(taskId)
// Update Schedule
updateSchedule(scheduleId, schedule)
// Delete Schedule
deleteSchedule(scheduleId)
// Delete Data Acceleration Task
deleteDataAccelerationTask(dataAccelerationId)
// Get Data Acceleration Tasks
getDataAccelerationTasks()
```

### Subscriptions Calls

```js
// Create Subscription
createSubscription(subscription)
// Query Subscription
querySubscription(subscriptionId)
// Query Subscriptions
querySubscriptions(queryOptions)
// Update Subscription
updateSubscription(subscriptionId, subscription)
// Delete Subscription
deleteSubscription(subscriptionId)
```

### Favorites Calls

```js
// Add Data Source to Favorites
addDataSourceToFavorites(userId, favorite)
// Add Project to Favorites
addProjectToFavorites(userId, favorite)
// Add View to Favorites
addViewToFavorites(userId, favorite)
// Add Workbook to Favorites
addWorkbookToFavorites(userId, favorite)
// Delete Data Source from Favorites
deleteDataSourceFromFavorites(userId, datasourceId)
// Delete Project from Favorites
deleteProjectFromFavorites(userId, projectId)
// Delete View from Favorites
deleteViewFromFavorites(userId, viewId)
// Delete Workbook from Favorites
deleteWorkbookFromFavorites(userId, workbookId)
// Get Favorites for User
getFavoritesForUser(userId)
```

### Server Calls

```js
// Server Info
serverInfo()
// Get current server session details
getCurrentServerSessionDetails()
```

### Extracts Calls

```js
// Create an Extract for a Data Source
createAnExtractForADataSource(datasourceId, queryOptions)
// Delete an Extract from a Data Source
deleteAnExtractFromADataSource(datasourceId)
// Create Extracts for Embedded Data Sources in a Workbook
createExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources, queryOptions)
// Delete Extracts for Embedded Data Sources in a Workbook
deleteExtractsForEmbeddedDataSourcesInAWorkbook(workbookId, datasources)
// Delete Extract Refresh Task
deleteExtractRefreshTask(taskId)
// Encrypt Extracts in a Site
encryptExtractsInASite()
// Decrypt Extracts in a Site
decryptExtractsInASite()
// Reencrypt Extracts in a Site
reencryptExtractsInASite()
```

## Filtering and Expression Building

Some methods in the Tableau API allow you to define the inputs and outputs of the query calls using a special syntax for filtering, sorting and choosing which fields return from a query. For these methods special builders have been provided to help you construct these strings. There are three expression helpers to use `FieldExpression`, `FilterExpression` and `SortExpression`. Typescript declaration files will provide intellisense to help you create the right expressions.

In each case, you start by selecting which object you are querying and then add terms to your expression accorgingly. When the expression is complete you call `build()` to create your expression, which you can then use in your `queryOptions` object.

* The FieldExpression has methods .addXXXX() to add relevant fields and where appropriate, has methods `.withXXXXXResource()` to allow you to specify the fields that occur in child resources.
* The FilterExpression helpers have properties for each field which then reveal operator methods for your criteria
* The SortExpression helpers have `.byXXXXX()` methods that you can follow with `.ascending()` or `.descending()` to specifiy direction. Ascending is default

For more information view Tableau's API documentation

```js
import { 
    TableauRestApiClient, 
    FilterExpression, 
    FieldExpression, 
    SortExpression 
} from 'tabbycat';

// which fields do you want to return?
const select = FieldExpression.forWorkbooks()
                .addId()
                .addName()
                .build();
// do you want to apply a filter
const where = FilterExpression.forWorkbooks()
                .name.in(["my workbook","my other workbook"])
                .build();
// what order would you like 
const order = SortExpression.forWorkbooks()
                .byFavoritesTotal().descending()
                .byName()
                .build();

// make the call
const client = new TableauRestApiClient({ baseURL: "http://localhost", version: "3.8" });
client.signIn(credentials).then(c => {
    client.queryWorkbooksForSite({
        fields: select,
        filter: where,
        sort: order
    });
});
```

## Handling Errors

Error responses have been left as full Axios errors and contain information about the headers, request, response and the tableau error (in error.response.data);

You can use `.catch` in a Promise syntax or `try{ ... } catch(e) { ... }` with the `await` keyword in an async function.

If calls are not being authenticated or returning Ids have not been supplied check that you have waited successfully for the return value to come back.

## Development

See something you think can be improved? Open an issue or clone the project and send a pull request with your changes.

### Typescript

the library is in javacript with JSDoc comments but type definition files exist for the public api files. if you are developing you can generate type files for source using `npm run build:types` which will go to a separate folder based on tsconfig.json. The Type files cover the public API only and in some cases (e.g. expression generation) have not been generated so don't simply trust the output of `build:types`, rather use it for reference.

### Documentation and Code Generation



### Tests

You can run unit tests `npm test`

## Credits

## Licence


