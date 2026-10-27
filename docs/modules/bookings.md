# 🎟️ Bookings

## Data model

| Field | Type |
|-------|------|
| id | string |
| reference | string |
| customer | string |
| show | string |
| tickets | number |
| amount | number |
| status | string |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/bookings | public (supports `q`, `page`, `limit`) |
| GET | /api/bookings/:id | public |
| POST | /api/bookings | admin, agent |
| PUT | /api/bookings/:id | admin, agent |
| DELETE | /api/bookings/:id | admin |

## Screens

- Customer: `/bookings` and `/bookings/:id`
- Admin: `/admin/bookings` (table + form, card-table on mobile)
- Agent: `/agent/bookings` (shareable cards)
