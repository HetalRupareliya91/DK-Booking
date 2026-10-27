# 👛 Wallets

## Data model

| Field | Type |
|-------|------|
| id | string |
| owner | string |
| balance | number |
| currency | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/wallets | public (supports `q`, `page`, `limit`) |
| GET | /api/wallets/:id | public |
| POST | /api/wallets | admin, agent |
| PUT | /api/wallets/:id | admin, agent |
| DELETE | /api/wallets/:id | admin |

## Screens

- Customer: `/wallets` and `/wallets/:id`
- Admin: `/admin/wallets` (table + form, card-table on mobile)
- Agent: `/agent/wallets` (shareable cards)
