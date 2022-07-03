/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { Paginated } from "tabbycat/types";
import { SubscriptionType } from "tabbycat/types";
import { SubscriptionListType } from "tabbycat/types";

/**
 * Creates a new, unsuspended subscription to a view or workbook for a specific user. When a
 * user is subscribed to the content, Tableau Server sends the content to the user in email
 * on the schedule that's defined in Tableau Server and specified in this call.
 * @param {SubscriptionType} subscription subscription
 * @returns {Promise<SubscriptionType>} Promise | undefined
 */
export function createSubscription(subscription: SubscriptionType, client?: ClientLite) : Promise<SubscriptionType>;

/**
 * Deletes the specified subscription.
 * @param {string} subscriptionId The ID of the subscription to delete. To determine what
 * 		subscriptions are available, call Query Subscriptions.
 * @returns {Promise<any>} Promise | undefined
 */
export function deleteSubscription(subscriptionId: string, client?: ClientLite) : Promise<any>;

/**
 * Returns information about the specified subscription.
 * @param {string} subscriptionId The ID of the subscription to get information for.
 * @returns {Promise<SubscriptionType>} Promise | undefined
 */
export function querySubscription(subscriptionId: string, client?: ClientLite) : Promise<SubscriptionType>;

/**
 * Returns a list of all the subscriptions on the specified site.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {number} queryOptions.pageSize (Optional) The number of items to return in one
 * 		response. The minimum is 1. The maximum is 1000. The default is 100. For more information,
 * 		see Paginating Results.
 * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default
 * 		is 1. For more information, see Paginating Results.
 * @returns {Promise<Paginated<SubscriptionListType>>} Promise | undefined
 */
export function querySubscriptions(queryOptions?: { pageSize: number, pageNumber: number }, client?: ClientLite) : Promise<Paginated<SubscriptionListType>>;

/**
 * Modifies an existing subscription, allowing you to change the subject, schedule, and
 * suspension state for the subscription.
 * @param {string} subscriptionId The ID of the subscription to update.
 * @param {SubscriptionType} subscription subscription
 * @returns {Promise<SubscriptionType>} Promise | undefined
 */
export function updateSubscription(subscriptionId: string, subscription: SubscriptionType, client?: ClientLite) : Promise<SubscriptionType>;
