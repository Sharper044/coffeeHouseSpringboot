/*
**  This is the model / database interaction file for the subscriptions.
**  Here is how I envision the table being laid out:
**    id            - autoincrementing id number
**    title         - string. title of the question.
**    isAnswered    - boolean. wether or not the question has been answered.
**    body          - string. the main question text.
**    timestamp     - timestamp of when the question was asked.
**    rating        - decimal. the overall rating for the question on the star rater
**    num_of_votes  - int. the number of people who have given this question a rating
*/

package com.rest_api.coffee_house.models;