const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./src/addon"); // Ajuste o caminho para onde está o seu Builder

// O BeamUp injeta a porta automaticamente nesta variável
const port = process.env.PORT || 7000;

serveHTTP(addonInterface, { port });

console.log(`Addon ativo na porta ${port}`);
