# 🏙️ Cities

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| state | string |
| active | boolean |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/cities | public (supports `q`, `page`, `limit`) |
| GET | /api/cities/:id | public |
| POST | /api/cities | admin, agent |
| PUT | /api/cities/:id | admin, agent |
| DELETE | /api/cities/:id | admin |

## Screens

- Customer: `/cities` and `/cities/:id`
- Admin: `/admin/cities` (table + form, card-table on mobile)
- Agent: `/agent/cities` (shareable cards)
