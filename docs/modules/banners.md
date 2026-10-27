# 🖼️ Banners

## Data model

| Field | Type |
|-------|------|
| id | string |
| title | string |
| placement | string |
| active | boolean |
| createdAt | ISO date |

## REST API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /api/banners | public (supports `q`, `page`, `limit`) |
| GET | /api/banners/:id | public |
| POST | /api/banners | admin, agent |
| PUT | /api/banners/:id | admin, agent |
| DELETE | /api/banners/:id | admin |

## Screens

- Customer: `/banners` and `/banners/:id`
- Admin: `/admin/banners` (table + form, card-table on mobile)
- Agent: `/agent/banners` (shareable cards)
