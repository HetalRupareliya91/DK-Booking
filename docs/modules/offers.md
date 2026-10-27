# 🏷️ Offers

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| bank | string |
| discountPct | number |
| validTill | date |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/offers | public (supports `q`, `page`, `limit`) |
| GET | /api/offers/:id | public |
| POST | /api/offers | admin, agent |
| PUT | /api/offers/:id | admin, agent |
| DELETE | /api/offers/:id | admin |

## Screens

- Customer: `/offers` and `/offers/:id`
- Admin: `/admin/offers` (table + form, card-table on mobile)
- Agent: `/agent/offers` (shareable cards)
