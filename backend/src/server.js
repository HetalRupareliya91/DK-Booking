const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true, service: 'dk-booking-api' }));

// Every file in src/routes exports { path, router } and is mounted automatically.
const routesDir = path.join(__dirname, 'routes');
if (fs.existsSync(routesDir)) {
  fs.readdirSync(routesDir).filter(f => f.endsWith('.js')).forEach(file => {
    const mod = require(path.join(routesDir, file));
    if (mod && mod.path && mod.router) app.use(mod.path, mod.router);
  });
}

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log('DK Booking API running on port ' + port));
}
