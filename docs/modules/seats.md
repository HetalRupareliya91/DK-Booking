# 💺 Seats

## Data model

| Field | Type |
|-------|------|
| id | string |
| row | string |
| number | number |
| category | string |
| price | number |
| status | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/seats | public (supports `q`, `page`, `limit`) |
| GET | /api/seats/:id | public |
| POST | /api/seats | admin, agent |
| PUT | /api/seats/:id | admin, agent |
| DELETE | /api/seats/:id | admin |

## Screens

- Customer: `/seats` (seat map) and `/seats/:id`
- Admin: `/admin/seats` (table + form, card-table on mobile)
- Agent: `/agent/seats` (shareable cards)
