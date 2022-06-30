
export class VersionException extends Error {
    constructor(apiVersion, minimumVersion) {
        super(`the version '${apiVersion}' is lower than the required minimum version of '${minimumVersion}'`)
    }
}

export class MissingPathParameterException extends Error {
    constructor(pathParameter) {
        super(`the path parameter '${pathParameter}' is missing`)
    }
}

export class ExecutiveException extends Error {
    constructor() {
        super(`could not find an execute method`)
    }
}
