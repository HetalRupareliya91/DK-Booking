# 🎫 Coupons

## Data model

| Field | Type |
|-------|------|
| id | string |
| code | string |
| discountPct | number |
| maxDiscount | number |
| active | boolean |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/coupons | public (supports `q`, `page`, `limit`) |
| GET | /api/coupons/:id | public |
| POST | /api/coupons | admin, agent |
| PUT | /api/coupons/:id | admin, agent |
| DELETE | /api/coupons/:id | admin |

## Screens

- Customer: `/coupons` and `/coupons/:id`
- Admin: `/admin/coupons` (table + form, card-table on mobile)
- Agent: `/agent/coupons` (shareable cards)
