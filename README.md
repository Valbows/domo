# AI Agent Demo Project

This project demonstrates the integration of Tavus AI with a modern web application.

## Project Structure

```
/
├── .github/                  # GitHub Actions/workflows
├── src/
│   ├── backend/             # Server-side API endpoints
│   ├── frontend/            # UI components and client-side logic
│   └── tavus/              # Tavus Agent configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   TAVUS_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Owners

- **Mohan**: Video API endpoint (`/api/video`)
- **Kelvin**: Answer API endpoint (`/api/answer`)
- **Raj**: Frontend components and UI
- **Val**: Tavus Agent configuration

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains all necessary configuration.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT 