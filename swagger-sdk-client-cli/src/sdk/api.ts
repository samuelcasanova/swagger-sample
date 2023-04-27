/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Simple Task Manager
 * Task Manager
 *
 * OpenAPI spec version: 1.0.0
 * Contact: scrtestingpurposes@gmail.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:8080".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description: string;
    /**
     * 
     * @type {Date}
     * @memberof Task
     */
    createdDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof Task
     */
    dueDate: Date;
}
/**
 * AdminsApi - fetch parameter creator
 * @export
 */
export const AdminsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes an existing task
         * @summary deletes an existing task
         * @param {string} taskId Task id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTask(taskId: string, options: any = {}): FetchArgs {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTask.');
            }
            const localVarPath = `/tasks/{taskId}`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Adds a new task
         * @summary adds a new task
         * @param {Task} [body] Task to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTask(body?: Task, options: any = {}): FetchArgs {
            const localVarPath = `/tasks`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Task" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminsApi - functional programming interface
 * @export
 */
export const AdminsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes an existing task
         * @summary deletes an existing task
         * @param {string} taskId Task id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTask(taskId: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AdminsApiFetchParamCreator(configuration).deleteTask(taskId, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Adds a new task
         * @summary adds a new task
         * @param {Task} [body] Task to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTask(body?: Task, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AdminsApiFetchParamCreator(configuration).postTask(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AdminsApi - factory interface
 * @export
 */
export const AdminsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Deletes an existing task
         * @summary deletes an existing task
         * @param {string} taskId Task id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTask(taskId: string, options?: any) {
            return AdminsApiFp(configuration).deleteTask(taskId, options)(fetch, basePath);
        },
        /**
         * Adds a new task
         * @summary adds a new task
         * @param {Task} [body] Task to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTask(body?: Task, options?: any) {
            return AdminsApiFp(configuration).postTask(body, options)(fetch, basePath);
        },
    };
};

/**
 * AdminsApi - object-oriented interface
 * @export
 * @class AdminsApi
 * @extends {BaseAPI}
 */
export class AdminsApi extends BaseAPI {
    /**
     * Deletes an existing task
     * @summary deletes an existing task
     * @param {string} taskId Task id to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminsApi
     */
    public deleteTask(taskId: string, options?: any) {
        return AdminsApiFp(this.configuration).deleteTask(taskId, options)(this.fetch, this.basePath);
    }

    /**
     * Adds a new task
     * @summary adds a new task
     * @param {Task} [body] Task to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminsApi
     */
    public postTask(body?: Task, options?: any) {
        return AdminsApiFp(this.configuration).postTask(body, options)(this.fetch, this.basePath);
    }

}
/**
 * UsersApi - fetch parameter creator
 * @export
 */
export const UsersApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets all tasks 
         * @summary get tasks
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks(skip?: number, limit?: number, options: any = {}): FetchArgs {
            const localVarPath = `/tasks`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets all tasks 
         * @summary get tasks
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks(skip?: number, limit?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Task>> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).getTasks(skip, limit, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Gets all tasks 
         * @summary get tasks
         * @param {number} [skip] number of records to skip for pagination
         * @param {number} [limit] maximum number of records to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTasks(skip?: number, limit?: number, options?: any) {
            return UsersApiFp(configuration).getTasks(skip, limit, options)(fetch, basePath);
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Gets all tasks 
     * @summary get tasks
     * @param {number} [skip] number of records to skip for pagination
     * @param {number} [limit] maximum number of records to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getTasks(skip?: number, limit?: number, options?: any) {
        return UsersApiFp(this.configuration).getTasks(skip, limit, options)(this.fetch, this.basePath);
    }

}