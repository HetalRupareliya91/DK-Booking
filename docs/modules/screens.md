# 🖥️ Screens

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| theatre | string |
| format | string |
| capacity | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/screens | public (supports `q`, `page`, `limit`) |
| GET | /api/screens/:id | public |
| POST | /api/screens | admin, agent |
| PUT | /api/screens/:id | admin, agent |
| DELETE | /api/screens/:id | admin |

## Screens

- Customer: `/screens` and `/screens/:id`
- Admin: `/admin/screens` (table + form, card-table on mobile)
- Agent: `/agent/screens` (shareable cards)
