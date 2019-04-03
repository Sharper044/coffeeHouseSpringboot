/*
**  This controller will house all of the api calls for comments and answers.
**  The api calls for this controller are as follows:
**    getCommentsByQuestionIdAndUserId({question_id, user_id}) => Array<{ id, question_id, user_id, timestamp, is_answer, text, likes: Array<{likes}>}> 
**      This call needs to call getLikesByCommentId for each comment.
**      This will be called only when someone clicks into a question card.
**    postComment({question_id, user_id, timestamp, is_answer, text}) => confirmation that it posted.
*/

package com.rest_api.coffee_house.controllers;