import React from 'react';

export const FAQ = () => {
  return (
    <section className="faq-section bg-background py-16 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-center text-3xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>
      <div className="faq-container">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">What services does Bajio Web Solutions offer?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">We offer comprehensive web design, development, and digital marketing services, creating custom solutions tailored to meet our clients' specific needs.</td>
            </tr>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">Where is Bajio Web Solutions located?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">We are based in Lebanon, Connecticut, serving clients locally and remotely.</td>
            </tr>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">How experienced is your team?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">Our expert team brings years of experience in web development and design, with a proven track record of successful projects.</td>
            </tr>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">What makes Bajio Web Solutions different?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">We focus on creating lasting partnerships with our clients, providing modern and scalable technologies, and offering dedicated support and maintenance.</td>
            </tr>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">Do you provide ongoing support?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to perform optimally.</td>
            </tr>
            <tr className="border-b border-neutral/20">
              <td className="py-6 px-4 font-bold text-foreground w-[40%] md:table-cell block">How can I start a project with Bajio Web Solutions?</td>
              <td className="py-6 px-4 text-neutral md:table-cell block">You can schedule a consultation through our website or contact us directly to discuss your project requirements and goals.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};