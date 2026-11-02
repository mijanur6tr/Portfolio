'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const PhilosophyFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is your core stack and expertise?',
      answer:
        'My primary expertise centers on the modern JavaScript/TypeScript ecosystem: Next.js (App Router), React 19, Node.js, Express, PostgreSQL with Prisma ORM, MongoDB, and Tailwind CSS. I also specialize in AI systems including LangChain, vector databases (AstraDB), and embedding pipelines.',
    },
    {
      question: 'How do you handle production security and authentication?',
      answer:
        'During my internship at Yolast and across multiple full-stack projects, I designed end-to-end authentication systems featuring Google OAuth, custom credentials with bcrypt password hashing, cryptographically signed JWTs in HttpOnly cookies, multi-role authorization (RBAC), and OTP-based reset flows.',
    },
    {
      question: 'Can you integrate payment processing systems?',
      answer:
        'Yes. I have implemented Razorpay payment gateways with end-to-end transaction validation, recurring subscription billing, and cryptographically verified webhook handlers utilizing idempotency keys to eliminate duplicate charging.',
    },
    {
      question: 'Are you open to freelance, contract, or full-time opportunities?',
      answer:
        'Yes, I am actively available for full-stack software engineering roles, contract projects, and high-impact freelance development. Feel free to contact me via the contact page or directly at mijanrhdev@gmail.com.',
    },
    {
      question: 'How does your engineering background at KUET shape your work?',
      answer:
        'Studying Industrial Engineering and Management at KUET reinforces a rigorous systems-thinking mindset: optimizing workflows, reducing computational bottlenecks, designing maintainable software architectures, and prioritizing user-centric efficiency.',
    },
  ];

  return (
    <section className="bg-[#fbfbfd] py-10 sm:py-16 md:py-20 lg:py-24 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
            // 06. ARCHITECTURAL PHILOSOPHY & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Frequently Answered Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-mono mt-2">
            Clear insights into engineering standards, availability, and delivery practices.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-neutral-900 hover:text-emerald-700 transition-colors cursor-pointer group"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="p-1 rounded-full bg-neutral-100 group-hover:bg-neutral-200 text-neutral-600 transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-8 animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyFaqSection;

