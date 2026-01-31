#!/bin/bash

echo "🎮 Starting MBTI Pokemon Quiz deployment..."
echo ""

# Check if gh is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ GitHub CLI not authenticated"
    echo ""
    echo "Please run: gh auth login"
    echo ""
    echo "Or create repo manually at: https://github.com/new"
    exit 1
fi

# Get GitHub username
USERNAME=$(gh api user -q .login)
REPO_NAME="mbti-pokemon-quiz"

echo "📦 Creating repository: $USERNAME/$REPO_NAME"

# Create repository and push
gh repo create $REPO_NAME \
  --public \
  --description "당신의 MBTI에 맞는 포켓몬을 찾아보세요! 🎮" \
  --source=. \
  --remote=origin \
  --push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Repository created and code pushed!"
    echo ""
    
    # Enable GitHub Pages
    echo "🌐 Enabling GitHub Pages..."
    gh api repos/$USERNAME/$REPO_NAME/pages \
      --method POST \
      -f source[branch]=main \
      -f source[path]=/
    
    echo ""
    echo "🎉 Deployment complete!"
    echo ""
    echo "📍 Repository: https://github.com/$USERNAME/$REPO_NAME"
    echo "🌐 Live site (in 2-3 minutes): https://$USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "💡 Next steps:"
    echo "   1. Wait 2-3 minutes for GitHub Pages to build"
    echo "   2. Test your site"
    echo "   3. Share on Twitter/Instagram!"
    echo "   4. Post in communities (디시인사이드, 에펨코리아)"
    echo ""
else
    echo ""
    echo "❌ Failed to create repository"
    echo ""
    echo "Please try manually:"
    echo "   1. Go to https://github.com/new"
    echo "   2. Create repo: $REPO_NAME"
    echo "   3. Run: git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
    echo "   4. Run: git push -u origin main"
    exit 1
fi
