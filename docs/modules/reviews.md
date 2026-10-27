# ⭐ Reviews

## Data model

| Field | Type |
|-------|------|
| id | string |
| author | string |
| target | string |
| stars | number |
| comment | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/reviews | public (supports `q`, `page`, `limit`) |
| GET | /api/reviews/:id | public |
| POST | /api/reviews | admin, agent |
| PUT | /api/reviews/:id | admin, agent |
| DELETE | /api/reviews/:id | admin |

## Screens

- Customer: `/reviews` and `/reviews/:id`
- Admin: `/admin/reviews` (table + form, card-table on mobile)
- Agent: `/agent/reviews` (shareable cards)
