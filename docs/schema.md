## Users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
email            | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique

## Dives
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
route_id        | integer   | not null, foreign key (references routes), indexed
elevation_id    | integer   | not null, foreign key (references routes), indexed
title           | string    | not null
notes           | string    | not null
start_time      | date      | not null
end_time        | date      | not null
start_air_level | integer   |
end_air_level   | integer   |
date            | string    | not null

## Routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
routePath   | string    | not null
distance    | string    | not null
notes       | string    |


avgDuration | string    | notNull // method on model not on database


## Elevation
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dive_id     | integer   | not null, foreign key (references dives), indexed
time_id     | integer   | not null //



bonus: ## comments, taggings, tags, followers, etc
