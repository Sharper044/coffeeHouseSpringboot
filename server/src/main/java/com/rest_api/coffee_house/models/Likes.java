/*
**  This is the model / database interaction file for the likes.
**  Here is how I envision the table being laid out:
**    id          - autoincrementing id number
**    comment_id  - the id of the comment that has been liked.
**    user_id     - the id of the user who liked it. This is in place to make sure a user cannot like something more than once. 
*/

package com.rest_api.coffee_house.models;