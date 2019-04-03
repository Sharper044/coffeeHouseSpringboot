/*
**  This controller will house all of the api calls for liked comments.
**  The api calls for this controller are as follows:
**    getLikesByCommentIdAndUserId({comment_id, user_id}) => {liked: boolean, numberOfLikes: int}
**      Will be called any time the question card is opened by getCommentsByQuestionId
**    postLike({comment_id, user_id}) => confirmation that it was posted.
**    deleteLike(id) => confirmation that it was deleted.
*/

package com.rest_api.coffee_house.controllers;