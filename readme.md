# tabbycat

Promised base client for Tableau Server Rest API for the browser and node.js
using axios

## Version 0.1.0

> :warning:
> This API client is built using code generation and there are many routes that have not been tested yet.


## Installation

```
$ npm install tabbycat --save
```

## Example

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

```
