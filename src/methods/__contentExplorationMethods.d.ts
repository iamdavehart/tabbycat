/** 
 * This file was automatically generated from the Tableau REST API Reference.
 * DO NOT MODIFY THIS FILE BY HAND. instead edit the metadata and/or code generator
 * and regenerate any files
 */

import { ClientLite } from "tabbycat/client";
import { PageOfContentResponse } from "tabbycat/types";

/**
 * Searches across all supported content types for objects relevant to the search expression
 * specified in the querystring of the request URI.
 * @param {Object} queryOptions an object containing the query options for this request
 * @param {string} queryOptions.terms *(Optional)* A term the search uses as the basis
 * 		for which items are relevant to return. The items may be of any supported content type.
 * 		The relevance may be assessed based on any element of a given item. If no term is
 * 		supplied, then results will be based filtering and page size limits.
 * @param {number} queryOptions.page *(Optional)* The number of the page in the list
 * 		response pages to return. Maximum number of items returned is 10,000
 * @param {number} queryOptions.limit *(Optional)* The number of items to return on each
 * 		response page. The default is 10.
 * @param {string} queryOptions.order_by <br />*(Optional)* The sorting method for items
 * 		returned, based on the popularity of the item. You can sort based on:
 * 		 - `hitsTotal` - The
 * 		number of times a content item has been viewed since it was created.
 * 		 -
 * 		`hitsSmallSpanTotal` The number of times viewed in the last month.
 * 		 -
 * 		`hitsMediumSpanTotal` The number of times viewed in the last three months.
 * 		 -
 * 		`hitsLargeSpanTotal` The number of times viewed in the last twelve months.
 * 		 -
 * 		`downstreamWorkbookCount` The number workbooks in a given project. This value is only
 * 		returned when the request `filter` expression is `=type:eq:table` or
 * 		`=type:eq:database`.
 * 		
 * 		 Append  `:asc` or `:desc` to determine sort direction. The default
 * 		is  `asc`.
 * 		
 * 		 Your search expression can have more than one comma seperated `order_by`
 * 		element. If there is a tie between two items for the first `order_by` expression, then
 * 		sort order between the two items will be determined by the second `order_by` expression.
 * 		The following expression sorts items from the fewest views since creation and, in case of
 * 		a tie, by the one that has the most recent views.
 * 		
 * 		
 * 		`?order_by=hitsTotal:asc,hitsSmallSpanTotal:desc`
 * @param {string} queryOptions.filter *(Optional)* An expression to filter the response
 * 		using one ofthe following parameters.
 * 		
 * 		- `type`
 * 		
 * 		    The content type, using the `eq`
 * 		operator in an expression like:
 * 		
 * 		    `?filter=type:eq:workbook`
 * 		or:
 * 		- `ownerId`
 * 		
 * 		 
 * 		Resource owner ID or last modified time, using `eq`, `lte`, `gte`, `gt`, or `in` operator
 * 		in an expression like:
 * 		
 * 		  `filter=modifiedTime:gte:2022-01-11T08:00:00.000Z`
 * 		
 * 		or:
 * 		-
 * 		`modifiedTime`
 * 		
 * 		    Resource owner ID or last modified time, using `eq`, `lte`, `gte`,
 * 		`gt`, or `in` operator in an expression like:
 * 		
 * 		   
 * 		`filter=ownerId:in:[akhil,fred,alice]`
 * 		
 * 		For more information about filter expressions, see
 * 		[Filtering and Sorting in the Tableau REST
 * 		API](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_filtering_and_sorting.htm).
 * 		
 * 		
 * 		
 * 		
 * 		</li></ul>
 * 		
 * @returns {Promise<PageOfContentResponse>} Promise | undefined
 */
export function getSearch(queryOptions?: { terms: string, page: number, limit: number, order_by: string, filter: string }, client?: ClientLite) : Promise<PageOfContentResponse>;
