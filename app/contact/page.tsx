import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Contact — Mathlon" };

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <Image className="page-illo" src="/images/illustrations/03-coffee.svg" alt="" width={110} height={110} aria-hidden />
        <h1 className="page-title">Say hello</h1>
        <p className="page-lead">Question, idea, bug, or just want to tell us how a session went? We read everything. Drop us a line below.</p>
      </section>

      <div className="max-w-[560px] mx-auto px-10 pb-24 max-sm:px-6">
        <form className="flex flex-col gap-5" action="mailto:hello@mathlon.com" method="post" encType="text/plain">
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-[13px] font-medium tracking-[0.2px] text-[#2d2d2d]">{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required
                className="font-[family-name:var(--font-inter)] text-[15px] text-[#2d2d2d] bg-white border border-[rgba(45,45,45,0.18)] rounded-none px-[14px] py-[13px] outline-none transition-colors focus:border-[#1e6bb8]"
              />
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[13px] font-medium tracking-[0.2px] text-[#2d2d2d]">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              required
              className="font-[family-name:var(--font-inter)] text-[15px] text-[#2d2d2d] bg-white border border-[rgba(45,45,45,0.18)] rounded-none px-[14px] py-[13px] outline-none transition-colors focus:border-[#1e6bb8] resize-y min-h-[130px]"
            />
          </div>
          <button type="submit" className="btn-accent btn-full">Send message <span className="arrow-icon"></span></button>
        </form>

        <div className="mt-10 pt-7 border-t border-[rgba(45,45,45,0.12)] text-[15px] leading-6 text-[rgba(45,45,45,0.6)]">
          Prefer email? Reach us directly at <a href="mailto:hello@mathlon.com" className="text-[#1e6bb8]">hello@mathlon.com</a>. We usually reply within a day or two.
        </div>
      </div>

      <Footer />
    </>
  );
}
