const selfsigned = require('selfsigned');
const fs = require('fs');

// Generate SSL/TLS certificates
const attrs = [{ name: 'commonName', value: 'localhost' }];
const options = {
  keySize: 2048,         // Key size (in bits)
  days: 365,             // Certificate validity period (in days)
  algorithm: 'sha256',   // Hashing algorithm
};

const keys = selfsigned.generate(attrs, options);

// Write the SSL/TLS certificates to files
fs.writeFileSync('server-key.pem', keys.private);
fs.writeFileSync('server-cert.pem', keys.cert);

console.log('SSL/TLS certificates generated successfully.');
