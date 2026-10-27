# 🎉 Events

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| category | string |
| city | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/events | public (supports `q`, `page`, `limit`) |
| GET | /api/events/:id | public |
| POST | /api/events | admin, agent |
| PUT | /api/events/:id | admin, agent |
| DELETE | /api/events/:id | admin |

## Screens

- Customer: `/events` and `/events/:id`
- Admin: `/admin/events` (table + form, card-table on mobile)
- Agent: `/agent/events` (shareable cards)
