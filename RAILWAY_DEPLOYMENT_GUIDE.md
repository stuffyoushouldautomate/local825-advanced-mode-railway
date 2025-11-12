# Railway Deployment Guide - Advanced Mode for Local 825

## 🚀 Quick Deploy (5 Minutes)

Your Advanced Mode application is **ready for permanent deployment** to Railway. Follow these simple steps:

### Step 1: Access Railway

Go to: **https://railway.app**

### Step 2: Sign In

Click **"Login"** and sign in with your GitHub account (stuffyoushouldautomate)

### Step 3: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose repository: **`stuffyoushouldautomate/local825-advanced-mode-railway`**

### Step 4: Deploy

Railway will automatically:
- ✅ Detect the Node.js application
- ✅ Install dependencies
- ✅ Build using the Dockerfile
- ✅ Start the server
- ✅ Assign a permanent public URL

### Step 5: Get Your URL

After deployment (takes 2-3 minutes):
1. Go to your Railway project dashboard
2. Click on the service
3. Go to "Settings" → "Domains"
4. You'll see your permanent URL: `https://your-app.up.railway.app`

## 📦 What's Been Prepared

The repository is **100% ready** for Railway deployment with:

✅ **Dockerfile** - Containerized deployment configuration
✅ **railway.json** - Railway-specific settings
✅ **package.json** - Node.js dependencies and scripts
✅ **server.js** - Express server for static files
✅ **.dockerignore** - Optimized build process
✅ **All static files** - Complete production build

## 🔗 Repository Information

**GitHub Repository**: https://github.com/stuffyoushouldautomate/local825-advanced-mode-railway

**Branch**: main

**Status**: ✅ Ready for deployment

## 🎯 Railway Configuration Details

### Automatic Detection

Railway will automatically detect:
- **Language**: Node.js
- **Package Manager**: npm
- **Start Command**: `node server.js`
- **Port**: 3000 (configurable via PORT environment variable)

### Build Process

Railway will:
1. Clone the repository
2. Run `npm install` to install dependencies
3. Build the Docker container (if using Dockerfile)
4. Start the server with `node server.js`
5. Expose the service on a public URL

### Resource Allocation

Default Railway configuration:
- **Memory**: 512 MB (sufficient for this app)
- **CPU**: Shared (sufficient for this app)
- **Disk**: 1 GB (sufficient for this app)

## 🌐 Post-Deployment

### Your Permanent URL

After deployment, Railway provides:
- **Permanent URL**: `https://[your-app].up.railway.app`
- **SSL Certificate**: Automatic HTTPS
- **CDN**: Global content delivery
- **Auto-scaling**: Handles traffic spikes
- **Zero downtime**: Automatic health checks

### Accessing the Application

Once deployed, users can access:
- **Homepage**: `https://[your-app].up.railway.app/`
- **Advanced Mode**: `https://[your-app].up.railway.app/advanced-mode`
- **Authentication**: Requires Supabase setup (see below)

## 🔐 Environment Variables (Optional)

To enable full functionality with Supabase:

1. In Railway dashboard, go to your service
2. Click **"Variables"** tab
3. Add these variables:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Click **"Redeploy"** to apply changes

## 💰 Cost Information

### Railway Pricing

**Free Tier**:
- $5 of usage credits per month
- Sufficient for development and testing
- No credit card required to start

**Usage Estimates for This App**:
- Typical monthly cost: $2-5
- Based on: Low traffic, minimal compute
- Free tier covers most use cases

**Pro Plan** (if needed):
- $20/month for higher usage
- Includes $20 of usage credits
- Additional usage billed separately

### Cost Optimization

This application is optimized for low cost:
- Static file serving (minimal CPU)
- No database hosting on Railway
- Efficient Express server
- Compressed assets

## 🎨 Custom Domain (Optional)

To use your own domain:

1. In Railway dashboard, go to **"Settings"** → **"Domains"**
2. Click **"Custom Domain"**
3. Enter your domain (e.g., `advanced-mode.local825.org`)
4. Update your DNS records:
   - Type: `CNAME`
   - Name: `advanced-mode` (or `@` for root)
   - Value: `[your-app].up.railway.app`
5. Wait for DNS propagation (5-30 minutes)

## 📊 Monitoring & Logs

Railway provides built-in monitoring:

### View Logs
1. Go to your service in Railway
2. Click **"Logs"** tab
3. See real-time application logs

### Metrics
1. Click **"Metrics"** tab
2. View:
   - CPU usage
   - Memory usage
   - Network traffic
   - Request counts

### Deployment History
1. Click **"Deployments"** tab
2. See all deployments
3. Rollback if needed

## 🔄 Updating the Deployment

To update your application:

### Option 1: Push to GitHub (Automatic)
```bash
# Make changes to your code
git add .
git commit -m "Update application"
git push origin main

# Railway automatically detects and redeploys
```

### Option 2: Manual Redeploy
1. Go to Railway dashboard
2. Click **"Redeploy"**
3. Confirm deployment

## 🛠️ Troubleshooting

### Deployment Fails

**Check Build Logs**:
1. Go to **"Deployments"** tab
2. Click on failed deployment
3. Review build logs for errors

**Common Issues**:
- Missing dependencies: Check `package.json`
- Port conflicts: Ensure `PORT` env variable is used
- Build errors: Review Dockerfile

### Application Not Loading

**Check Service Status**:
1. Go to service dashboard
2. Verify service is running (green status)
3. Check logs for errors

**Common Issues**:
- Server not starting: Check `server.js`
- Port not exposed: Verify Dockerfile `EXPOSE` directive
- Static files missing: Ensure all files are in repository

### Authentication Issues

**Supabase Not Connected**:
- Add environment variables (see above)
- Verify Supabase project is active
- Check Supabase credentials are correct

## 📚 Additional Resources

### Railway Documentation
- **Getting Started**: https://docs.railway.app/getting-started
- **Deployments**: https://docs.railway.app/deploy/deployments
- **Environment Variables**: https://docs.railway.app/develop/variables
- **Custom Domains**: https://docs.railway.app/deploy/exposing-your-app

### Railway Support
- **Discord**: https://discord.gg/railway
- **Help Center**: https://help.railway.app
- **Status Page**: https://status.railway.app

### Application Documentation
- **Quick Start Guide**: See `ADVANCED_MODE_QUICKSTART.md` in source repo
- **Setup Guide**: See `ADVANCED_MODE_SETUP.md` in source repo
- **Technical Docs**: See `ADVANCED_MODE_README.md` in source repo

## ✅ Deployment Checklist

Before deploying:
- [x] Repository created and pushed to GitHub
- [x] Dockerfile configured
- [x] railway.json configured
- [x] package.json with correct scripts
- [x] server.js tested locally
- [x] Static files included
- [x] Documentation provided

After deploying:
- [ ] Sign in to Railway
- [ ] Create new project from GitHub repo
- [ ] Wait for deployment to complete
- [ ] Get permanent URL
- [ ] Test application access
- [ ] Add environment variables (if needed)
- [ ] Configure custom domain (optional)
- [ ] Share URL with Local 825 team

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ Railway shows "Deployed" status (green)
- ✅ Public URL is accessible
- ✅ Application loads without errors
- ✅ Authentication page displays correctly
- ✅ All static assets load (images, CSS, JS)

## 📞 Need Help?

If you encounter any issues:

1. **Check Railway Logs**: Most issues show up in logs
2. **Review Documentation**: See links above
3. **Railway Discord**: Active community support
4. **GitHub Issues**: Report application-specific issues

---

## 🚀 Ready to Deploy!

Everything is prepared and ready. Just follow the 5-minute quick deploy steps above!

**Repository**: https://github.com/stuffyoushouldautomate/local825-advanced-mode-railway

**Next Step**: Go to https://railway.app and click "New Project"

---

**Prepared**: November 12, 2024
**Status**: ✅ Ready for Deployment
**Estimated Deploy Time**: 2-3 minutes
**Estimated Setup Time**: 5 minutes total
