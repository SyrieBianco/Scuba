## Users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
email            | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique
profile_photo_id | integer   | foreign key (references photos), indexed

## Photos

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
dive_id         | integer   | foreign key (references dive), indexed
imageTitle      | string    | not null
imageURL        | string    | not null, indexed, unique
notes           | string    | not null

## Dives
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
title           | string    | not null
routePath       | string    | not null
distance        | string    | not null
elevation       | string    | not null
notes           | string    | not null
initialTime     | string    | not null
endingTime      | string    | not null
initialAirLevel | integer   |
endingAirLevel  | integer   |
date            | string    | not null
duration        | string    | not null

## Routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
routePath   | string    | not null
distance    | string    | not null
elevation   | string    |
notes       | string    |
avgDuration | string    | notNull


bonus: ## comments, taggings, tags, followers, etc
