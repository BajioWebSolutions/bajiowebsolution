
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
    const { email, fullName } = await req.json();

    if (!email) {
      throw new Error("Email is required");
    }

    // Check if we have the API key
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured properly");
    }

    // Send the welcome email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Bajio Web Solutions <no-reply@updates.bajioweb.com>',
      to: email,
      subject: `Welcome to Bajio Web Solutions, ${fullName || 'there'}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Welcome to Bajio Web Solutions!</h1>
          <p>Hi ${fullName || 'there'},</p>
          <p>We're thrilled to have you join our community. With your new account, you can:</p>
          <ul>
            <li>Create and manage your web project requests</li>
            <li>Track progress on your current projects</li>
            <li>Access exclusive resources and tutorials</li>
          </ul>
          <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
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
        message: `Welcome email sent to ${email}`,
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
    console.error("Error in send-welcome-email function:", error);
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
