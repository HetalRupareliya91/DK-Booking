# 🎤 Concerts

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| artist | string |
| city | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/concerts | public (supports `q`, `page`, `limit`) |
| GET | /api/concerts/:id | public |
| POST | /api/concerts | admin, agent |
| PUT | /api/concerts/:id | admin, agent |
| DELETE | /api/concerts/:id | admin |

## Screens

- Customer: `/concerts` and `/concerts/:id`
- Admin: `/admin/concerts` (table + form, card-table on mobile)
- Agent: `/agent/concerts` (shareable cards)
