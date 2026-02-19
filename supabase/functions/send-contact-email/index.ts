import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};



serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, honeypot } = await req.json();

    // Honeypot check
    if (honeypot) {
      // Silently reject spam
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (name.length > 100 || email.length > 255 || message.length > 5000 || (subject && subject.length > 200)) {
      return new Response(JSON.stringify({ error: 'Input too long' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Local Heuristic Spam Check
    const SPAM_KEYWORDS = [
      "cryto", "crypto", "bitcoin", "investment", "forex", "pharmacy", "casino",
      "viagra", "cialis", "seo service", "marketing solution", "optimization",
      "partnership opportunity", "passive income", "100% free", "click here",
      "financial freedom", "urgent business", "beneficiary", "lottery",
      "google ranking", "page one", "website traffic", "domain authority"
    ];

    const content = (subject + " " + message).toLowerCase();

    // Check 1: Excessive Links (More than 3 http/https links)
    const linkCount = (content.match(/http[s]?:\/\//g) || []).length;
    if (linkCount > 3) {
      console.log('Spam detected: Excessive links');
      return new Response(JSON.stringify({ error: 'Message contains too many links.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check 2: Spam Keywords
    const foundKeywords = SPAM_KEYWORDS.filter(keyword => content.includes(keyword));
    if (foundKeywords.length >= 2) { // Allow 1 incidental match, block if 2 or more
      console.log(`Spam detected: Keywords found [${foundKeywords.join(', ')}]`);
      return new Response(JSON.stringify({ error: 'Message flagged as potential spam.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check 3: Russian/Cyrillic characters (common in spam if not your target audience)
    // Optional: Block if message contains significant Cyrillic characters
    if (/[а-яА-Я]/.test(message) && (message.match(/[а-яА-Я]/g) || []).length > 5) {
      console.log('Spam detected: Cyrillic characters');
      return new Response(JSON.stringify({ error: 'Message flagged as potential spam.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['mchalszczepan@gmail.com'],
        subject: subject ? `Contact Form: ${subject}` : `Contact Form Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Resend API error [${emailResponse.status}]: ${JSON.stringify(errorData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in send-contact-email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
