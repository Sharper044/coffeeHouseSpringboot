/*
**  This controller will house all of the api calls for deligations on answering questions.
**  The api calls for this controller are as follows:
**    getDelegationsByQuestionId(question_id) => Array<{ id, question_id, user_id }>
**      This will be called for each question in case the person involved is someone who can answer and a seperate style or filtering can be added for that on the front end.
**    postDelegation({question_id, user_id}) => confirmation that it was posted.
**      should also call postSubscription for that user and question.
**    deleteDelegation(id) => confirmation that it was deleted.
*/

package com.rest_api.coffee_house.controllers;