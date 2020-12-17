# tabbycat

Promised base client for Tableau Server Rest API for the browser and node.js
using axios

## Version 0.1.0

> :warning: **Under Active Development** :warning:
>
> This API client is built using code generation and there are many routes that have not been tested yet.
> Until version 1.0.0 is reached breaking api changes may be released, see changelog for details
> 

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Browser Support](#browser-support)
* [Example](#example)
* [tabbycat API](#tabbycat-api)
* [Filtering and Expression Building](#filtering-and-expression-building)
* [Handling Errors](#handling-errors)
* [Development](#development)
* [Typescript](#typescript)
* [Credits](#credits)
* [Licence](#licence)


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

## tabbycat API reference

## Filtering and Expression Building

## Handling Errors

## Development

See something you think can be improved? Open an issue or clone the project and send a pull request with your changes.

### Typescript

the library is in javacript with JSDoc comments but type definition files exist for all files. you can generate type files for source using `npm run build:types`  

### Documentation and Code Generation

### Tests

You can run unit tests `npm test`

## Credits

## Licence


