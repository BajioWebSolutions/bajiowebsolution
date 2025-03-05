
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

// Initialize Resend with API key
const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    // Check if we have the API key
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured properly");
    }

    // Send the checklist email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Bajio Web Solutions <no-reply@updates.bajioweb.com>',
      to: email,
      subject: 'Your Free 10-Point SEO Checklist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Your Free SEO Checklist</h1>
          <p>Thank you for subscribing to our newsletter!</p>
          <p>Here's your 10-point SEO checklist to help improve your website's visibility:</p>
          
          <ol style="line-height: 1.6">
            <li><strong>Keyword Research:</strong> Identify relevant keywords for your industry and audience.</li>
            <li><strong>On-Page SEO:</strong> Optimize title tags, meta descriptions, and header tags.</li>
            <li><strong>Quality Content:</strong> Create valuable, original content that addresses user needs.</li>
            <li><strong>Mobile Optimization:</strong> Ensure your site works perfectly on all devices.</li>
            <li><strong>Page Speed:</strong> Improve loading times for better user experience and rankings.</li>
            <li><strong>URL Structure:</strong> Use clean, descriptive URLs for all pages.</li>
            <li><strong>Internal Linking:</strong> Connect relevant pages within your site.</li>
            <li><strong>Backlink Building:</strong> Develop a strategy to earn quality links from reputable sites.</li>
            <li><strong>Local SEO:</strong> Optimize for local searches if you have a physical location.</li>
            <li><strong>Analytics:</strong> Set up tracking to monitor performance and make data-driven decisions.</li>
          </ol>
          
          <p>Would you like more detailed guidance on implementing these steps? Our team is here to help!</p>
          <p>Best regards,</p>
          <p>The Bajio Web Solutions Team</p>
        </div>
      `,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `SEO checklist sent to ${email}`,
        emailId: data?.id
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    );

  } catch (error) {
    console.error("Error in subscribe-newsletter function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
});
