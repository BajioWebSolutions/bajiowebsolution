
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

// Initialize Resend with API key
const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);
// You could set this in Supabase Edge Function secrets
const notificationEmail = Deno.env.get("NOTIFICATION_EMAIL") || "contact@bajioweb.com";

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
    const { fullName, email, phone, company, projectType, message } = await req.json();

    if (!email || !fullName || !message) {
      throw new Error("Name, email and message are required");
    }

    // Check if we have the API key
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured properly");
    }

    // Send notification to the business owner
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <no-reply@updates.bajioweb.com>',
      to: notificationEmail,
      subject: `New Contact Form Submission: ${projectType || 'Project Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    // Also send a confirmation to the user
    const { error: confirmError } = await resend.emails.send({
      from: 'Bajio Web Solutions <no-reply@updates.bajioweb.com>',
      to: email,
      subject: 'We received your message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Thanks for reaching out!</h1>
          <p>Hi ${fullName},</p>
          <p>We've received your message about ${projectType || 'your project'}. Our team will review your inquiry and get back to you shortly.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="border-left: 4px solid #7c3aed; padding-left: 15px; margin-left: 0; color: #555;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>Best regards,</p>
          <p>The Bajio Web Solutions Team</p>
        </div>
      `,
    });

    if (confirmError) {
      console.warn("Failed to send confirmation email:", confirmError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Contact form submitted successfully`,
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
    console.error("Error in send-contact-message function:", error);
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
