import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

/**
 * TypeScript interface for the contact form state.
 */
interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  // Initialize the contact form state using the typed interface.
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    message: "",
  });

  // Track the asynchronous submission loading state to prevent duplicate calls.
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /**
   * Typed input change handler for text inputs and textareas.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Typed validation function to verify contact form inputs before API submission.
   * - Name: must be at least 3 characters.
   * - Phone: must contain at least 10 digits (letters/special characters ignored).
   */
  const validateForm = (data: ContactFormData): boolean => {
    if (data.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return false;
    }

    // Strip out all non-digit characters to ensure 10 real digits are present
    const digitsOnly = data.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      toast.error("Contact number must contain at least 10 digits.");
      return false;
    }

    return true;
  };

  /**
   * Typed form submission handler.
   * Handles validation, reads secure environment variables, invokes EmailJS SDK,
   * resets form inputs, and dispatches toast notifications.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard against multiple concurrent form submissions
    if (isSubmitting) return;

    // Validate name and phone inputs
    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    // Retrieve credentials from environment variables only (security requirement).
    // Note: Vite requires environment variables to begin with the VITE_ prefix to prevent exposing private variables
    // from the host machine to the client-side JavaScript bundle. Only VITE_ prefixed variables are loaded.
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Log the environment variables in development mode only to assist with debugging configuration issues.
    // Note: If you edit your .env file, the dev server must be restarted. Vite loads the environment files once at startup;
    // any changes to env files require a restart to reload and inject the variables.
    if (import.meta.env.DEV) {
      console.log("Full Vite Environment Object (import.meta.env):", import.meta.env);
      console.log("EmailJS Development Environment Variables:", {
        VITE_EMAILJS_SERVICE_ID: SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
        VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
      });
    }

    // Verify all credentials are present. If missing, fail securely with a console error and user-friendly toast.
    // EmailJS reads configuration dynamically from these variables to authenticate and route API requests.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS configuration error: One or more environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing or not defined."
      );
      toast.error("Contact form is not configured yet. Please try again later.");
      setIsSubmitting(false); // Fallback handling: re-enable the submit button so user interface doesn't lock up
      return;
    }

    // Prepare parameters matching user's requested template structure
    const templateParams = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      website: "Go Mech Engineering",
    };

    try {
      // Send the email using the EmailJS browser SDK
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Thank you. Our team will contact you shortly.");
        // Clear all form fields upon successful delivery
        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(`EmailJS responded with status code: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS form submission failed:", error);
      toast.error("Something went wrong. Please try again.");
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
              Whether you need high-precision CNC machining, VMC machining and industrial welding solutions Go Mech Engineering is ready to bring your vision to life.
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

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Enquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
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
                {isSubmitting ? "Sending Enquiry..." : "Submit \u2192"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
