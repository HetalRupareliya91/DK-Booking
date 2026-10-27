# 🗣️ Languages

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| code | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/languages | public (supports `q`, `page`, `limit`) |
| GET | /api/languages/:id | public |
| POST | /api/languages | admin, agent |
| PUT | /api/languages/:id | admin, agent |
| DELETE | /api/languages/:id | admin |

## Screens

- Customer: `/languages` and `/languages/:id`
- Admin: `/admin/languages` (table + form, card-table on mobile)
- Agent: `/agent/languages` (shareable cards)
