# ⏰ Showtimes

## Data model

| Field | Type |
|-------|------|
| id | string |
| movie | string |
| theatre | string |
| screen | string |
| date | date |
| price | number |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/showtimes | public (supports `q`, `page`, `limit`) |
| GET | /api/showtimes/:id | public |
| POST | /api/showtimes | admin, agent |
| PUT | /api/showtimes/:id | admin, agent |
| DELETE | /api/showtimes/:id | admin |

## Screens

- Customer: `/showtimes` and `/showtimes/:id`
- Admin: `/admin/showtimes` (table + form, card-table on mobile)
- Agent: `/agent/showtimes` (shareable cards)
