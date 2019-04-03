/*
**  This is the model / database interaction file for the users.
**  Here is how I envision the table being laid out:
**    id            - autoincrementing id number
**    name          - string.
**    email         - string. for use in subscriptions and reminders.
**    photo         - unsure how this is to be stored.
**  The biggest issue is how to provision this list and keep it up to date. I belive it could be connected to sp or azure AD but I am unsure how.
*/

package com.rest_api.coffee_house.models;