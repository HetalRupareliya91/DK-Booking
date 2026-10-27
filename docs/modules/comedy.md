# 😂 Comedy Shows

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| comedian | string |
| venue | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/comedy | public (supports `q`, `page`, `limit`) |
| GET | /api/comedy/:id | public |
| POST | /api/comedy | admin, agent |
| PUT | /api/comedy/:id | admin, agent |
| DELETE | /api/comedy/:id | admin |

## Screens

- Customer: `/comedy` and `/comedy/:id`
- Admin: `/admin/comedy` (table + form, card-table on mobile)
- Agent: `/agent/comedy` (shareable cards)
