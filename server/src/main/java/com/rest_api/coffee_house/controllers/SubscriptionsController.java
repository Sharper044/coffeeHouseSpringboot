/*
**  This controller will house all of the api calls for subscriptions.
**  The api calls for this controller are as follows:
**    getSubscriptionByQuestionIdAndUserId({question_id, user_id}) => boolean
**      Will be called any time the question card is opened by getCommentsByQuestionId
**    getSubscriptionsByUserId(user_id) => Array<question_ids>
**      used by the email controller to send out all subscribed emails.
**    postSubscribe({question_id, user_id}) => confirmation that it was posted.
**    deleteSubscription(id) => confirmation that it was deleted.
**      cannot/should not be called for someone who is delegated this question.
*/

package com.rest_api.coffee_house.controllers;