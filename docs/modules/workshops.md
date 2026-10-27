# 🛠️ Workshops

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| host | string |
| mode | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/workshops | public (supports `q`, `page`, `limit`) |
| GET | /api/workshops/:id | public |
| POST | /api/workshops | admin, agent |
| PUT | /api/workshops/:id | admin, agent |
| DELETE | /api/workshops/:id | admin |

## Screens

- Customer: `/workshops` and `/workshops/:id`
- Admin: `/admin/workshops` (table + form, card-table on mobile)
- Agent: `/agent/workshops` (shareable cards)
