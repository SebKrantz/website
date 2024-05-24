# Personal Website
This is my personal website. It is coded from scratch in plain HTML and CSS, using standard Arial and [Open Sans](https://fonts.google.com/specimen/Open+Sans) fonts. Feel free to reuse/adapt. To be clear: the core code is CC0 licensed, content relating to my person is private and not CC0. Thus, you can replace my copyright with yours ONLY after removing all of my content.

## Tips for Adaptation

- Use SVG social icons. I got mine from [here](https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/). Open them and paste them into index.html and contact.html, and ensure that thex have a tag `fill="currentColor"` so that their color can be targeted by CSS if desired (by default set to very dark grey and lighter grey on hover). 

- Use [realfavicongenerator.net](https://realfavicongenerator.net/) to generate your favicon (the mini-picture that appears in your browser tab). In *Favicon Generator Options* choose *I cannot or I do not want to place favicon files at the root of my web site. Instead I will place them here* and enter www/icons. Then, once you've downloaded your favicon package, extract to www/icons and adjust all favicon-related code in the `<head>` tag of each HTML page.  

## Custom Domain with Namecheap.com + Hosting with Github Pages

### Step 1: Enable GitHub Pages
   - Go to the repository's settings.
   - Scroll down to the "Pages" section.
   - Select the main branch (root folder) and click "Save".

### Step 2: Configure Your Namecheap DNS Settings
0. Sign up at namecheap.com and buy a domain, e.g. yourdomain.com.
1. **Log in to your Namecheap account** and go to the **Dashboard**.
2. **Select your domain** from the list.
3. Click on **Manage** next to the domain name you want to use.
4. Navigate to the **Advanced DNS** tab.

#### Add Custom Resource Records for Non-Apex Domain
1. **Add an `A` Record**:
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.108.153`
   - TTL: `Automatic`
   - Repeat this step for the following IP addresses:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

2. **Add a CNAME Record**:
   - Type: `CNAME Record`
   - Host: `@` (or `www` if you want apex domain) 
   - Value: `username.github.io.`
   - TTL: `Automatic`

3. (Optional) **Redirect Apex to non-apex domain** (e.g. www.sebastiankrantz.com -> sebastiankrantz.com):
   - Follow **Step 2** 1-3 but then navigate to the **Domain** tab.
   - Add a 'REDIRECT DOMAIN' from www.yourdomain.com to https://yourdomain.com/

### Step 3: Deployment with Custom Domain
**in GitHub Pages settings**, enter your domain (e.g, sebastiankrantz.com) in the **Custom domain** box. Wait for DNS check, then click **Enforce HTTPS**. That's it. 

*Note*: DNS changes can take some time to propagate. For more instructions see [here](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/).

