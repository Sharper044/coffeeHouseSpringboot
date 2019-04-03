/*
**  This controller will house all of the api calls for questions.
**  The api calls for this controller are as follows:
**    getAllOpenQuestions(userId) => Array<{ id, title, is_answered, body, timestamp, rating, number_of_votes, canAnswer: boolean, answerers: Array<delegations, including pictures from users table> }>
**      These should be sorted based on some kind of method that combines score, number of comments, and number of likes.
**      It would also be convinent if it could let the frontend know if the user can answer the question.
**    getAllAnsweredQuestions() => Array<{ id, title, is_answered, body, timestamp, rating, number_of_votes, answerers: Array<delegations, including pictures from users table> }>
**      These should be sorted based with most recently answered first.
**    getQuestionsByTitle(titleStr) => Array<{id, title, is_answered, body, timestamp, rating, number_of_votes, answerers: Array<delegations, including pictures from users table>}>
**      This should be able to take a title and filter all the questions and return only those questions whose title contains the title string.
**    answerQuestion(id) => confermation it was answered. 
**      Should also post the answer to the database using postComment. 
**      Should change the is_answered atribute to true.
**    rateQuestion({id, score}) => confirmation that it was rated. 
**      Coresponding get questions request should fire on frontend after confirmation.
**      score should be set using the folowing formula: newScore = ((oldScore * oldNumOfVotes) + score) / (oldNumOfVotes + 1)
**      number of votes needs to be incremented also.
*/

package com.rest_api.coffee_house.controllers;