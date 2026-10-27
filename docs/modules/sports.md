# 🏏 Sports

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| sport | string |
| venue | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/sports | public (supports `q`, `page`, `limit`) |
| GET | /api/sports/:id | public |
| POST | /api/sports | admin, agent |
| PUT | /api/sports/:id | admin, agent |
| DELETE | /api/sports/:id | admin |

## Screens

- Customer: `/sports` and `/sports/:id`
- Admin: `/admin/sports` (table + form, card-table on mobile)
- Agent: `/agent/sports` (shareable cards)
