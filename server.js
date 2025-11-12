const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files
app.use(express.static(__dirname, {
  maxAge: '1d',
  etag: true
}));

// Handle client-side routing - always return index.html for non-file requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Advanced Mode server running on port ${PORT}`);
  console.log(`✓ Access at: http://localhost:${PORT}`);
  console.log(`✓ Ready for Local 825 team members`);
});
