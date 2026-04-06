# Professional Portfolio Website - Detailed Prompt & Specifications

## Project Overview

This is a professional CV and portfolio website for **Mohamed Toukrichte**, a Senior Java Software Engineer with 8+ years of enterprise software development experience. The website serves as a comprehensive showcase of professional expertise, experience, technical skills, and GitHub projects to maximize hiring opportunities.

## Target Audience & Goals

**Primary Audience:** Technical hiring managers, CTOs, and senior engineering leaders at enterprise companies

**Key Objectives:**
1. Establish credibility as a senior-level engineer with proven enterprise experience
2. Showcase technical depth across multiple domains (backend, DevOps, cloud, architecture)
3. Demonstrate leadership capabilities and team management experience
4. Drive conversions through clear CTAs and easy contact methods including whatsapp CTA (+212698921518)
5. Provide quick access to GitHub portfolio for code quality assessment

**Success Metrics:**
- High engagement on experience timeline and project sections
- Click-through to GitHub repositories
- Contact form submissions or email inquiries
- Mobile responsiveness and fast load times

## Design Philosophy: Modern Minimalist with Technical Precision

### Color Palette

| Element | Color | Hex | Purpose |
|---------|-------|-----|---------|
| Background | Deep Charcoal | #0F172A | Primary background - conveys technical sophistication |
| Foreground Text | Off-white | #F8FAFC | Primary text - maximum contrast and readability |
| Primary Accent | Electric Blue | #3B82F6 | CTAs, highlights, interactive elements - draws attention |
| Secondary Background | Slate | #1A1F35 | Card backgrounds, depth layers |
| Muted Text | Light Slate | #94A3B8 | Secondary text, descriptions |
| Border Color | Dark Slate | #1E293B | Subtle dividers and borders |

### Typography System

| Element | Font | Weight | Size | Purpose |
|---------|------|--------|------|---------|
| Headings (H1-H6) | IBM Plex Mono | 700 | 2.5rem - 1.25rem | Technical, distinctive, professional |
| Body Text | Inter | 400 | 1rem | Clean, readable, modern |
| Code/Tech Terms | IBM Plex Mono | 400-600 | 0.875rem | Emphasizes technical content |
| Navigation | Inter | 500 | 0.875rem | Clear hierarchy |

### Design Principles

1. **Negative Space:** Generous spacing between sections creates breathing room and emphasizes content hierarchy
2. **Geometric Precision:** Clean lines, minimal shapes, and strict alignment reflect software engineering principles
3. **Asymmetric Layout:** Left-aligned content blocks with varied widths prevent monotony while maintaining professionalism
4. **Subtle Depth:** Minimal shadows and layered backgrounds create dimension without visual clutter
5. **Purposeful Animation:** Smooth transitions and scroll-triggered reveals enhance UX without distraction
6. **Monochromatic Foundation:** Dark background with single accent color maintains focus and technical aesthetic

## Website Structure & Content

### 1. Navigation Bar (Fixed)
- **Logo:** "MT" initials in electric blue
- **Links:** About, Experience, Skills, Projects, Contact
- **Behavior:** Sticky header with backdrop blur for depth
- **Mobile:** Hamburger menu (optional enhancement)

### 2. Hero Section
- **Background:** Custom generated technical abstract imagery with circuit board patterns
- **Headline:** "Mohamed Toukrichte" with "Toukrichte" highlighted in electric blue
- **Image Profile:** "A portfolio image that should live in /src/images/profile.png or profile.jpg
- **Subheading:** Professional summary emphasizing enterprise architecture, microservices, and technical leadership
- **CTAs:** "Get in Touch" (primary blue button) and "View Projects" (outline button)
- **Social Links:** GitHub, LinkedIn, Email icons with hover effects
- **Scroll Indicator:** Animated chevron directing to next section

### 3. About Section
- **Content:** Personal narrative highlighting analytical mindset, communication skills, and technical depth
- **Stats Cards:** 
  - 8+ Years of Professional Experience
  - 50+ Enterprise Projects Delivered
  - 15+ Technologies Mastered
- **Layout:** Two-column grid on desktop, stacked on mobile
- **Visual:** Subtle background texture, hover effects on stat cards

### 4. Experience Timeline Section
- **Layout:** Vertical timeline with connecting lines and dot indicators
- **Interaction:** Expandable cards showing full details on click
- **Content per Experience:**
  - Position title and company name
  - Employment period
  - Key responsibilities (bullet points)
  - Technology stack (tagged badges)
- **Visual Hierarchy:** Timeline dot in electric blue, gradient connecting lines
- **Animation:** Fade-in on scroll, smooth expand/collapse transitions

**Experience Entries (7 total):**
1. Akkodis - Client AoDocs (June 2025 - Today)
2. Intelcia IT Solutions - Client SFR (May 2023 - June 2025)
3. Ticketmaster - TMTOOLS (Feb 2022 - May 2023)
4. Percall Group (Oct 2020 - Feb 2022)
5. SQLI Maroc - Client NESTLE (Oct 2018 - Aug 2020)
6. Mobiblanc - Client 2M (Aug 2018 - Oct 2018)
7. Norsys Afrique (Feb 2018 - June 2018)

### 5. Education Section
- **Layout:** Three-column grid showcasing degrees
- **Content:** Degree, field, institution, period
- **Visual:** Card design with hover effects
- **Entries:**
  - State Engineer's Degree (Software Engineering)
  - Preparatory Classes (TSI)
  - Baccalaureate (Mechanical Sciences)

### 6. Skills Section
- **Layout:** 3-column grid on desktop, responsive on mobile
- **Organization:** Skills grouped by category
- **Visual:** Category title in electric blue, skill badges with hover effects
- **Categories (9 total):**
  1. Languages (Java, Kotlin, JavaScript, TypeScript, SQL, HTML, CSS)
  2. Databases (MySQL, PostgreSQL, Oracle, MongoDB)
  3. Backend Frameworks (Spring Core, Spring MVC, Spring Batch, Spring Boot, Hibernate)
  4. Frontend Frameworks (Angular 5-19)
  5. Servers (Tomcat, Nginx, Traefik)
  6. Testing (JUnit, Mockito, BDD/Cucumber, Gherkin, Postman)
  7. DevOps & CI/CD (Docker, Docker Compose, Jenkins, Sonar, GitLab CI, Github (CI/CD/Workflow), Git/Git workflow, Maven, Gradle)
  8. Architecture & Design (MVC, SOA, Design Patterns, SOLID, UML, TDD, Event Driven Developement, AI oriented programming)
  9. Tools & Platforms (Jira, Confluence, AWS S3, GCP, Kubernetes, Apache Airflow)

### 7. Projects Section
- **Layout:** 2-column grid showcasing GitHub repositories
- **Content per Project:**
  - Project name (linked to GitHub)
  - Description
  - Primary language/technology
  - Last updated date
  - External link icon
- **Interaction:** Hover effects with subtle shadow and border color change
- **Featured Projects:** Top 6 repositories displayed, with link to full GitHub profile
- **Projects Included:**
  1. toukrichtemed24 (Portfolio website)
  2. google-places-scrapper (Java)
  3. email-notification-microservice (Java)
  4. engins-front (SCSS)
  5. engins-manager (Shell)
  6. engins-backend (Java)
  7. portfolio (TypeScript)
  8. startwars (TypeScript)
  9. start-wars-backend (Java)
  10. star-wars-front (TypeScript)

### 8. Contact Section
- **Headline:** "Let's Work Together"
- **Description:** Invitation to collaborate or discuss opportunities
- **CTAs:** Email, GitHub Profile, LinkedIn, whatsapp (four buttons)
- **Layout:** Centered, max-width container for focus
- **Visual:** Subtle background, prominent buttons

### 9. Footer
- **Content:** Copyright notice
- **Styling:** Minimal, respects overall design aesthetic

## Technical Implementation

### Frontend Stack
- **Framework:** HTML, CSS and JS
- **Styling:** Tailwind CSS 4 with custom design tokens
- **UI Components:** shadcn/ui for consistent, accessible components
- **Routing:** Wouter for client-side navigation
- **Icons:** Lucide React for consistent iconography
- **Animations:** CSS transitions and Framer Motion for smooth interactions

### Key Features

1. **Responsive Design:** Mobile-first approach, optimized for all screen sizes
2. **Performance:** Optimized images, lazy loading, minimal JavaScript
3. **Accessibility:** WCAG 2.1 AA compliance, semantic HTML, keyboard navigation
4. **SEO:** Meta tags, structured data, descriptive alt text
5. **Smooth Scrolling:** Anchor links with smooth scroll behavior
6. **Dark Theme:** Default dark theme with high contrast for readability

### Data Structure

Create a js file data.js, copy the content from `client/src/lib/data.ts`, update data.js also with info mentionned in PORTFOLIO_PROMPT.md not showing in data.ts file and then remove data.ts

All portfolio data is centralized in `client/src/lib/data.ts`:
- `experiences[]` - Professional experience entries
- `projects[]` - GitHub projects with metadata
- `skills[]` - Categorized technical skills
- `education[]` - Educational background

This allows easy updates without touching component code.

## Visual Assets

### Background Images (Custom Generated)
1. **Hero Background:** Abstract technical patterns with circuit board lines and data visualization
2. **Experience Section:** Subtle vertical lines and geometric shapes
3. **Skills Section:** Interconnected nodes representing skill relationships
4. **Projects Section:** Gradient background with geometric accents

All images are optimized for web (compressed WebP format) and hosted on CDN for fast loading.

## Interaction Design

### Hover Effects
- **Buttons:** Smooth color transition, slight scale change
- **Cards:** Border color change to electric blue, subtle shadow increase
- **Links:** Color change to electric blue with underline
- **Project Cards:** Lift effect with shadow enhancement

### Animations
- **Page Load:** Fade-in for hero content
- **Scroll Reveals:** Staggered fade-in for timeline items and project cards
- **Expand/Collapse:** Smooth height transition for experience details
- **Hover States:** 0.3s ease-in-out transitions for all interactive elements

### Scroll Behavior
- **Smooth Scrolling:** Anchor links scroll smoothly to sections
- **Scroll Spy:** Navigation highlights current section (optional enhancement)
- **Parallax:** Subtle parallax effect on hero background (optional enhancement)

## Conversion Optimization

### Call-to-Action Strategy
1. **Hero Section:** Prominent "Get in Touch" button above the fold
2. **Experience Section:** Demonstrates expertise and leadership
3. **Projects Section:** Easy access to GitHub for code review
4. **Contact Section:** Multiple contact methods (email, LinkedIn, GitHub, Whatsapp)

### Trust Signals
- Detailed experience with specific companies and clients
- Quantified achievements (8+ years, 50+ projects)
- Comprehensive technical skills showcase
- GitHub portfolio with active projects
- Professional social media links

### Mobile Optimization
- Touch-friendly button sizes (48px minimum)
- Readable font sizes on small screens
- Optimized spacing and padding
- Simplified navigation on mobile

## Deployment & Domain Configuration

### Hosting
- **Platform:** Manus (built-in hosting with CDN)
- **Build:** Vite static build optimized for production
- **Performance:** Global CDN distribution for fast loading

### Domain Setup
- **Primary Domain:** cv.toukrichtemed.com
- **Configuration:** Custom domain binding in Manus dashboard
- **SSL:** Automatic HTTPS with Let's Encrypt
- **DNS:** Point domain to Manus nameservers

### SEO Configuration
- **Meta Tags:** Title, description, keywords, OG tags
- **Sitemap:** Auto-generated by Manus
- **Robots.txt:** Configured for search engine indexing
- **Analytics:** Umami analytics for traffic tracking

## Browser Support

- **Chrome/Edge:** Latest 2 versions
- **Firefox:** Latest 2 versions
- **Safari:** Latest 2 versions
- **Mobile:** iOS Safari 12+, Chrome Android latest

## Performance Targets

- **Lighthouse Score:** 90+ across all metrics
- **Page Load Time:** < 2 seconds (3G connection)
- **First Contentful Paint:** < 1 second
- **Largest Contentful Paint:** < 2.5 seconds
- **Cumulative Layout Shift:** < 0.1

## Future Enhancement Opportunities

1. **Blog Section:** Technical articles and case studies
2. **Dark/Light Theme Toggle:** User preference option
3. **Testimonials:** Client and colleague recommendations
4. **Case Studies:** Detailed project breakdowns with results
5. **Newsletter Signup:** Email capture for opportunities
6. **Analytics Dashboard:** View portfolio traffic and engagement
7. **Download CV:** PDF download option
8. **Certifications Section:** Professional certifications and badges
9. **Speaking Engagements:** Conferences and talks
10. **Open Source Contributions:** Highlight major OSS projects

## Maintenance & Updates

### Regular Updates
- Update experience section with new roles and achievements
- Add new projects to showcase section
- Update skills as new technologies are learned
- Refresh project descriptions and links

### Performance Monitoring
- Monitor Lighthouse scores monthly
- Track analytics for engagement patterns
- Test on various devices and browsers
- Optimize images and assets as needed

### Content Updates
- Review and update experience descriptions quarterly
- Add new projects as they're completed
- Update technology stack as it evolves
- Refresh testimonials and case studies

## Conclusion

This portfolio website is designed to be a powerful tool for career advancement, showcasing Mohamed's expertise, experience, and technical capabilities to potential employers and collaborators. The modern minimalist design reflects the precision and professionalism expected in senior engineering roles, while the comprehensive content demonstrates both technical depth and leadership experience.

The website is optimized for conversion, with clear CTAs, easy navigation, and multiple contact methods. The integration with GitHub repositories provides immediate access to code samples for technical evaluation.
