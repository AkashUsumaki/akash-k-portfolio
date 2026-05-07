## Goal
Wire up the Contact form so submissions land in your Gmail inbox via **EmailJS** (free tier: 200 emails/month, no backend needed).

## What you'll do once (outside Lovable)
1. Sign up at https://www.emailjs.com (free).
2. **Add Email Service** → connect your Gmail → copy the **Service ID**.
3. **Create Email Template** with variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`. Set "To Email" to your Gmail → copy the **Template ID**.
4. **Account → General** → copy the **Public Key**.

You'll paste those 3 values when I ask.

## What I'll build

### 1. Install SDK
- Add `@emailjs/browser` package.

### 2. Store the 3 IDs
EmailJS public key + service/template IDs are safe to expose (they're public by design and EmailJS enforces domain allowlists for abuse protection). I'll store them as `VITE_` env vars so they're available client-side:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 3. Update `src/components/portfolio/Contact.tsx`
- Convert form inputs to controlled state (`name`, `email`, `subject`, `message`).
- On submit: call `emailjs.send(serviceId, templateId, params, { publicKey })`.
- Add loading state (button shows spinner + "Sending…", disabled while in-flight).
- On success: toast "Message sent ✓", reset form.
- On error: toast "Failed to send. Please email me directly."
- Use existing `sonner` toaster (already mounted).

### 4. Lock down abuse (recommended)
In EmailJS dashboard → **Account → Security**: enable "Allow EmailJS API for non-browser applications" = OFF, and add your published Lovable domain to the allowed origins list. I'll remind you after setup.

## Technical notes
- Pure frontend integration — no edge function, no Supabase write. The form posts directly from the browser to EmailJS, which forwards to your Gmail.
- Free tier: 200 emails/month, 2 email services, 2 templates. Plenty for a portfolio.
- Validation already in place via `required` + `maxLength` attrs; I'll add a basic email regex check before sending.

## What I need from you
After signup, share:
1. Service ID (e.g. `service_abc123`)
2. Template ID (e.g. `template_xyz789`)
3. Public Key (e.g. `aBcDeF1234567`)

Once you paste them, I'll add them to `.env` and ship the code.