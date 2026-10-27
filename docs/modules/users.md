# 👤 Users

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| email | string |
| phone | string |
| city | string |
| role | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/users | public (supports `q`, `page`, `limit`) |
| GET | /api/users/:id | public |
| POST | /api/users | admin, agent |
| PUT | /api/users/:id | admin, agent |
| DELETE | /api/users/:id | admin |

## Screens

- Customer: `/users` and `/users/:id`
- Admin: `/admin/users` (table + form, card-table on mobile)
- Agent: `/agent/users` (shareable cards)
