# 🆘 Support Tickets

## Data model

| Field | Type |
|-------|------|
| id | string |
| subject | string |
| customer | string |
| priority | string |
| status | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/support-tickets | public (supports `q`, `page`, `limit`) |
| GET | /api/support-tickets/:id | public |
| POST | /api/support-tickets | admin, agent |
| PUT | /api/support-tickets/:id | admin, agent |
| DELETE | /api/support-tickets/:id | admin |

## Screens

- Customer: `/support-tickets` and `/support-tickets/:id`
- Admin: `/admin/support-tickets` (table + form, card-table on mobile)
- Agent: `/agent/support-tickets` (shareable cards)
