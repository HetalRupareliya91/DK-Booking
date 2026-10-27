# ↩️ Refunds

## Data model

| Field | Type |
|-------|------|
| id | string |
| reference | string |
| booking | string |
| amount | number |
| reason | string |
| status | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/refunds | public (supports `q`, `page`, `limit`) |
| GET | /api/refunds/:id | public |
| POST | /api/refunds | admin, agent |
| PUT | /api/refunds/:id | admin, agent |
| DELETE | /api/refunds/:id | admin |

## Screens

- Customer: `/refunds` and `/refunds/:id`
- Admin: `/admin/refunds` (table + form, card-table on mobile)
- Agent: `/agent/refunds` (shareable cards)
