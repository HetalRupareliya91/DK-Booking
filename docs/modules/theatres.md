# 🏛️ Theatres

## Data model

| Field | Type |
|-------|------|
| id | string |
| name | string |
| city | string |
| address | string |
| screens | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/theatres | public (supports `q`, `page`, `limit`) |
| GET | /api/theatres/:id | public |
| POST | /api/theatres | admin, agent |
| PUT | /api/theatres/:id | admin, agent |
| DELETE | /api/theatres/:id | admin |

## Screens

- Customer: `/theatres` and `/theatres/:id`
- Admin: `/admin/theatres` (table + form, card-table on mobile)
- Agent: `/agent/theatres` (shareable cards)
