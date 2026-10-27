# 💳 Payments

## Data model

| Field | Type |
|-------|------|
| id | string |
| reference | string |
| booking | string |
| method | string |
| amount | number |
| status | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/payments | public (supports `q`, `page`, `limit`) |
| GET | /api/payments/:id | public |
| POST | /api/payments | admin, agent |
| PUT | /api/payments/:id | admin, agent |
| DELETE | /api/payments/:id | admin |

## Screens

- Customer: `/payments` and `/payments/:id`
- Admin: `/admin/payments` (table + form, card-table on mobile)
- Agent: `/agent/payments` (shareable cards)
