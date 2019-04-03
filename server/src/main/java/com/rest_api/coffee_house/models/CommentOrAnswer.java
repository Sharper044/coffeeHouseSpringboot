/*
**  This file stores the model or database structure for the Comments and Answers table.
**  Here is how I envisioned the table looking:
**    id          - autoincrementing id number
**    question_id - the id of the question that the comment belongs to.
**    user_id     - the id of the user or null. This way if the comment user Id matches the id 
                    of one of the deligated answerers and it is marked as an answer it will show
                    their picture.
      timestamp   - timestamp of when it was posted to the database.
      is_answer   - boolean. Used to mark if this comment is an answer.
      text        - string. used to hold the comment.
*/

package com.rest_api.coffee_house.models;