# 🎞️ Genres

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| description | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/genres | public (supports `q`, `page`, `limit`) |
| GET | /api/genres/:id | public |
| POST | /api/genres | admin, agent |
| PUT | /api/genres/:id | admin, agent |
| DELETE | /api/genres/:id | admin |

## Screens

- Customer: `/genres` and `/genres/:id`
- Admin: `/admin/genres` (table + form, card-table on mobile)
- Agent: `/agent/genres` (shareable cards)
