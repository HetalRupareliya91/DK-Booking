# 📍 Venues

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| city | string |
| type | string |
| capacity | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/venues | public (supports `q`, `page`, `limit`) |
| GET | /api/venues/:id | public |
| POST | /api/venues | admin, agent |
| PUT | /api/venues/:id | admin, agent |
| DELETE | /api/venues/:id | admin |

## Screens

- Customer: `/venues` and `/venues/:id`
- Admin: `/admin/venues` (table + form, card-table on mobile)
- Agent: `/agent/venues` (shareable cards)
