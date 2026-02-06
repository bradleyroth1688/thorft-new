import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/data/schemas";

export const metadata: Metadata = {
  title: "Contact THOR Financial Technologies — Schedule a Consultation",
  description: "Schedule a consultation with THOR Financial Technologies to discuss model portfolios, ETFs, and advisor partnerships. Email: welcome@thoranalytics.com. Office: 327 W Pittsburgh St, Greensburg, PA 15601.",
  alternates: { canonical: "https://thorft.com/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact/" }])} />
      <JsonLd data={webPageSchema({ name: "Contact THOR Financial Technologies", description: "Schedule a consultation or get in touch with THOR Financial Technologies.", url: "/contact/" })} />
      {/* Hero */}
      <section className="gradient-navy text-white py-20 md:py-28">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule a <span className="text-gold-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;d love to discuss how THOR&apos;s systematic approach can enhance your advisory practice. Let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re interested in our model portfolios, ETFs, or simply want to learn more about systematic investing, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
                    <a href="mailto:welcome@thoranalytics.com" className="text-gold-600 hover:text-gold-500 transition-colors">
                      welcome@thoranalytics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Office</h3>
                    <p className="text-gray-600">
                      327 W Pittsburgh St<br />
                      Greensburg, PA 15601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Availability</h3>
                    <p className="text-gray-600">
                      Monday – Friday, 9am – 5pm ET
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-navy-800 mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://x.com/Bradr_thor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center hover:bg-gold-400/10 transition-colors">
                    <svg className="w-5 h-5 text-navy-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/brad-roth-8a4a8619a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center hover:bg-gold-400/10 transition-colors">
                    <svg className="w-5 h-5 text-navy-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@BRoth_THOR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center hover:bg-gold-400/10 transition-colors">
                    <svg className="w-5 h-5 text-navy-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-navy-800 mb-2">First Name *</label>
                      <input
                        type="text"
                        id="first-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-navy-800 mb-2">Last Name *</label>
                      <input
                        type="text"
                        id="last-name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        placeholder="you@firm.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="firm" className="block text-sm font-medium text-navy-800 mb-2">Firm Name</label>
                    <input
                      type="text"
                      id="firm"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      placeholder="Your advisory firm"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-navy-800 mb-2">I&apos;m Interested In</label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="models">Model Portfolios</option>
                      <option value="etfs">THOR ETFs</option>
                      <option value="consultation">General Consultation</option>
                      <option value="partnership">Advisor Partnership</option>
                      <option value="media">Media / Speaking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      placeholder="Tell us about your practice and what you're looking for..."
                    />
                  </div>
                  <button type="submit" className="btn-primary text-lg px-8 py-4 w-full md:w-auto">
                    Send Message
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy. We will not share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
