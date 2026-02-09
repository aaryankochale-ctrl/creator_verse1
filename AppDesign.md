
# AI Creator Hub - App Architecture & Design

## 1. App Architecture Diagram
The system follows a modern SPA architecture leveraging high-performance AI integration:
- **Frontend**: React (Client-side rendering) + Tailwind CSS (Responsive/Mobile-first).
- **State Management**: React Hooks (useState/useEffect) for MVP; scalable to Redux Toolkit.
- **AI Layer**: Direct integration with Gemini API (Gemini 3 Flash for speed/cost balance).
- **Storage/Backend**: 
    - Real-world: Node.js/PostgreSQL + Firebase Auth.
    - Prototype: In-memory mock data with service abstraction.

## 2. Database Schema
- **Users**: `id, email, password_hash, role (Creator|Freelancer|Brand), name, avatar, bio, metadata (JSONB)`
- **Profiles**: `user_id, niche, platform_links (JSONB), skills (string[]), stats (followers, engagement), hourly_rate`
- **Gigs**: `id, brand_id, title, description, budget, category, status (Open|Active|Closed), created_at`
- **Applications**: `id, gig_id, applicant_id, cover_letter, status`
- **AI_Insights**: `id, user_id, type, payload (JSONB), generated_at`

## 3. Key User Flows
- **Creator**: Auth -> Select Role -> Input Niche/Socials -> Dashboard (AI Insights) -> Marketplace (Find Editor) -> Project Collaboration.
- **Freelancer**: Auth -> Select Role -> Build Portfolio -> Browse Marketplace -> AI-Recommended Matching -> Submit Proposal.
- **Brand**: Auth -> Post Campaign -> AI Matches Influencers -> Filter by Stats -> Send Offer -> Track Progress.

## 4. AI Logic & Prompts
- **Matchmaking**: 
    - *Prompt*: "Given a Creator profile {C} and Freelancer profile {F}, calculate a compatibility score 1-100 and justify it."
- **Trend Detection**: 
    - *Prompt*: "Analyze current top 10 trends in {niche} on {platform}. Generate actionable video ideas with predicted virality."

## 5. Monetization Flow
- **Subscriptions**: $19/mo for 'Pro Creator' (Unlock advanced AI analytics & Featured Gigs).
- **Commission**: 10% platform fee on successful gig payments via escrow.
- **Featured**: $5 to bump a gig or profile to the top of the search for 24h.

## 6. MVP Roadmap
- **Phase 1**: Core AI tools (Insights, Captions), Matchmaking Browse, Basic Profiles.
- **Phase 2**: Real-time Chat, Payment Escrow integration, Advanced Stats (API syncing).
- **Phase 3**: Brand Campaign Manager, Enterprise Analytics, Affiliate Network.
