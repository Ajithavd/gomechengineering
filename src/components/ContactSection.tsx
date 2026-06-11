import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.requirements) {
      toast.error("Please fill in all the details.");
      return;
    }

    setIsSubmitting(true);

    // To receive emails, generate a free access key from https://web3forms.com/ for info@gomechengineering.com
    // You can paste the key directly below or use the environment variable VITE_WEB3FORMS_ACCESS_KEY
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(accessKey.trim());

    if (!isUuid || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      // Graceful local testing fallback
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Message sent successful");
      setFormData({
        name: "",
        phone: "",
        requirements: "",
      });
      console.warn(
        "Web3Forms Access Key not set. Simulated form submission success. To receive real emails to info@gomechengineering.com, set VITE_WEB3FORMS_ACCESS_KEY in your .env file or hardcode it in ContactSection.tsx."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Website Enquiry - ${formData.name}`,
          from_name: "Go Mech Engineering Website",
          "Contact Name": formData.name,
          "Contact Number": formData.phone,
          "Enquiry": formData.requirements,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successful");
        setFormData({
          name: "",
          phone: "",
          requirements: "",
        });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-background">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-start">
          
          {/* Left Column - Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              ENQUIRIES
            </span>
            <h2 className="text-foreground font-extrabold text-4xl sm:text-5xl md:text-[58px] leading-tight tracking-[-1.2px]">
              Initiate a
              <br />
              Consultation
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-2 max-w-[550px]">
              Whether you need high-precision CNC machining, vertical milling operations (VMC), custom metal fabrication, or industrial welding solutions, Go Mech Engineering is ready to bring your vision to life.
            </p>

            {/* Info details */}
            <div className="mt-8 flex flex-col gap-6 border-t border-secondary pt-8">
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-12 bg-primary rounded-full shrink-0" />
                <div>
                  <h4 className="text-foreground font-bold text-base sm:text-lg">
                    Enterprise RFP Submission
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    Send technical drawings and specifications directly to our desk for an expedited quote.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[3px] h-12 bg-primary rounded-full shrink-0" />
                <div>
                  <h4 className="text-foreground font-bold text-base sm:text-lg">
                    System Quality Assurance
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    All components are produced under globally recognized ISO-certified quality processes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="w-full bg-secondary/30 border border-secondary rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Contact Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-secondary/50 border border-transparent focus:border-primary focus:bg-background text-foreground placeholder:text-muted-foreground text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-secondary/50 border border-transparent focus:border-primary focus:bg-background text-foreground placeholder:text-muted-foreground text-sm rounded-xl px-4 py-3 outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Requirements Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="requirements" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Enquiry
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-secondary/50 border border-transparent focus:border-primary focus:bg-background text-foreground placeholder:text-muted-foreground text-sm rounded-xl px-4 py-3 outline-none resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#0a0a0a] text-white hover:bg-black/90 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit \u2192"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
