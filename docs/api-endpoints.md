# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Dives
all require logged in user
- `GET /api/dives` - index of current user's dives
- `POST /api/dives` - create dive
- `GET /api/dives/:id`- specific dive show page
- `DELETE /api/dives/:id` - delete dive

### Routes
all require logged in user

- `GET /api/routes` - index of current user's routes
- `POST /api/routes` - create route
- `GET /api/routes/:id`- specific route show page
- `DELETE /api/routes/:id` - delete route
- `PATCH /api/routes/:id` - update existing route
