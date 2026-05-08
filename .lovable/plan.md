## Update contact details with real links

Replace placeholder socials with the user's actual contact info across the portfolio.

### Files to update

**1. `src/components/portfolio/Contact.tsx`** — update the `socials` array:
- GitHub → `https://github.com/AkashUsumaki`
- LinkedIn → `https://www.linkedin.com/in/akashkasiit`
- Instagram → `https://instagram.com/_mr_._unique_01`
- Email → `mailto:akashan54321@gmail.com`
- WhatsApp → `https://wa.me/918610213770`
- Phone → `tel:+918610213770`
- Freelancer → `https://www.freelancer.in/u/akashkasi01`

**2. `src/components/portfolio/FloatingSocials.tsx`** — update the floating sidebar links to match (GitHub, LinkedIn, Instagram, WhatsApp).

**3. Verify** other components (`Hero.tsx`, `Footer.tsx`, `HireMe.tsx`) for any hardcoded placeholder emails/phones (e.g. `akash@example.com`, `+910000000000`) and replace with the real values.

### Outcome

Every contact button/link in the portfolio routes to your real Gmail, WhatsApp (+91 86102 13770), Instagram, LinkedIn, GitHub, and Freelancer profiles. Form submissions continue to land in your Gmail via EmailJS (already wired).