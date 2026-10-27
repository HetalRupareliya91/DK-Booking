// Prints a summary of the JSON collections shipped in backend/data.
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', '..', 'data');
if (!fs.existsSync(dir)) {
  console.log('No data folder yet.');
  process.exit(0);
}
fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(f => {
  const rows = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  console.log(f.padEnd(28) + rows.length + ' records');
});
