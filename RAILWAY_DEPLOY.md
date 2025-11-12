# Deploy to Railway - Instructions

This repository is ready for one-click deployment to Railway.

## Quick Deploy to Railway

### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Go to Railway**: Visit [railway.app](https://railway.app)
2. **Sign in**: Use your GitHub account
3. **New Project**: Click "New Project"
4. **Deploy from GitHub**: Select "Deploy from GitHub repo"
5. **Select Repository**: Choose `stuffyoushouldautomate/local825-advanced-mode-railway`
6. **Deploy**: Railway will automatically detect the configuration and deploy

### Option 2: One-Click Deploy Button

Click this button to deploy instantly:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/stuffyoushouldautomate/local825-advanced-mode-railway)

## What Happens During Deployment

Railway will:
1. Detect the Node.js application
2. Install dependencies from `package.json`
3. Build using the Dockerfile (if needed)
4. Start the server with `node server.js`
5. Assign a permanent public URL (e.g., `your-app.up.railway.app`)

## Configuration

The application is pre-configured with:
- **Dockerfile**: For containerized deployment
- **railway.json**: Railway-specific settings
- **package.json**: Node.js dependencies and start script
- **server.js**: Express server for static file serving

## Environment Variables (Optional)

If you need to add Supabase credentials:

1. Go to your Railway project dashboard
2. Click on "Variables"
3. Add these variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Post-Deployment

After deployment:
1. Railway will provide a public URL (e.g., `https://your-app.up.railway.app`)
2. The URL is permanent and will remain active
3. Access your Advanced Mode application at that URL
4. Share the URL with Local 825 team members

## Custom Domain (Optional)

To use a custom domain:
1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Monitoring

Railway provides:
- Real-time logs
- Deployment history
- Metrics and analytics
- Automatic SSL certificates
- Auto-scaling capabilities

## Cost

Railway offers:
- **Free Tier**: $5 of usage per month (sufficient for most use cases)
- **Pro Plan**: $20/month for higher usage
- This application typically uses minimal resources

## Support

For Railway-specific issues:
- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway Support: support@railway.app

For application issues:
- Check the GitHub repository
- Review the documentation files
- Contact the development team

---

**Ready to Deploy**: This repository is fully configured and ready for Railway deployment!
