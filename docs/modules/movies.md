# 🎬 Movies

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| language | string |
| genre | string |
| durationMins | number |
| certificate | string |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/movies | public (supports `q`, `page`, `limit`) |
| GET | /api/movies/:id | public |
| POST | /api/movies | admin, agent |
| PUT | /api/movies/:id | admin, agent |
| DELETE | /api/movies/:id | admin |

## Screens

- Customer: `/movies` and `/movies/:id`
- Admin: `/admin/movies` (table + form, card-table on mobile)
- Agent: `/agent/movies` (shareable cards)
