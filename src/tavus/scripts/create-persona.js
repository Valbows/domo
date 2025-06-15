const fs = require('fs');
const path = require('path');

/**
 * Creates or updates a Tavus persona configuration
 * @param {Object} personaConfig - The persona configuration object
 * @param {string} outputPath - The path where the persona file should be saved
 */
async function createPersona(personaConfig, outputPath) {
  try {
    // Ensure the directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the persona configuration to file
    fs.writeFileSync(
      outputPath,
      JSON.stringify(personaConfig, null, 2),
      'utf8'
    );

    console.log(`Persona configuration saved to: ${outputPath}`);
    return true;
  } catch (error) {
    console.error('Error creating persona:', error);
    throw error;
  }
}

/**
 * Example usage:
 * 
 * const personaConfig = {
 *   name: "Sales Engineer",
 *   version: "1.0.0",
 *   // ... other configuration
 * };
 * 
 * createPersona(
 *   personaConfig,
 *   path.join(__dirname, '../personas/sales-engineer-persona.json')
 * );
 */

module.exports = createPersona; 