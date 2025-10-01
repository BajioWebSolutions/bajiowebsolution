import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import rigobertoHeadshot from "@/assets/rigoberto-lopez-headshot.png";
const OurStoryPage = () => {
  return <>
      <SEO title="Our Story - Bajio Web Solutions" description="Learn about the founder and mission behind Bajio Web Solutions, Connecticut's premier digital agency helping local businesses grow online." canonical="/our-story" />
      
      <main className="min-h-screen bg-background-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-background-dark via-neutral-dark/40 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.06)_0%,transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto text-center">
              {/* Photo */}
              <div className="mb-12">
                <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary/30 overflow-hidden">
                  <img 
                    src={rigobertoHeadshot} 
                    alt="Rigoberto Lopez, Founder of Bajio Web Solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-white font-medium">RIGOBERTO LOPEZ</p>
                  <p className="text-xs text-white/70">AGENCY'S FOUNDER</p>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                From the Heart of Mexico to the Heart of Connecticut
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 bg-background-dark">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto prose prose-lg prose-invert">
              <div className="space-y-8 text-white/90">
                <p className="text-lg sm:text-xl leading-relaxed">Hello, I'm Rigoberto Lopez, the founder of Bajio Web Solutions. I'm a digital marketing expert, a web designer, and a proud resident of Lebanon, Connecticut. But more than anything, I'm passionate about helping the local businesses that make our communities thrive.</p>

                <p className="text-lg sm:text-xl leading-relaxed">
                  I started this agency for the ambitious local business owners who pour their hearts into their work but are frustrated with being invisible online. I know you don't have time to become an SEO expert—you're busy running your business. That's where I come in.
                </p>

                {/* Sub-headline */}
                <div className="py-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                    The Story Behind Our Name
                  </h2>
                  
                  <p className="text-lg sm:text-xl leading-relaxed">
                    After living away from my hometown in Mexico for more than 20 years, I wanted to build a business that honored my roots and my family's legacy. I chose the name "Bajio" after the region I'm from—a place known for its rich history, pride, and hard-working people.
                  </p>

                  <p className="text-lg sm:text-xl leading-relaxed mt-6">
                    That name is a daily promise to myself and to my clients: to bring that same level of pride, dedication, and heartfelt commitment to every project. We don't just build websites; we build relationships.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                    Our Mission
                  </h2>
                  
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Our mission is simple: to provide powerful, effective digital marketing services that help local Connecticut businesses get the attention and the customers they deserve. Your success is our success. Let's build something great together.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-12">
                  <motion.a href="/contact#start-project" className="not-prose no-underline inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark" whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }}>
                    Ready to Work Together?
                    <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>;
};
export default OurStoryPage;