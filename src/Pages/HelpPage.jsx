import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'; 

const HelpPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { faqs } = useLoaderData(); 
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index); 
    };
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Help Center</h1>
  
        {/* FAQ Section */}
        {faqs.length > 0 ? (
          <section className="faq-section mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="faq-list space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-lg font-semibold"
                  >
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <div className="faq-answer p-4 mt-2 bg-gray-50 border border-t-0 border-gray-300 rounded-md">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center text-lg font-semibold text-gray-500">
            No FAQs available at the moment.
          </div>
        )}

      {/* Contact Form Section */}
      <section className="contact-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div className="form-field">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-field">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Return & Exchange Policy Section */}
      <section className="policy-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Return & Exchange Policy</h2>
        <p className="text-gray-700">
          We offer a 15-day return policy for most items. Please ensure the item is unused and in its original packaging. For more details, visit our Return & Exchange Policy page.
        </p>
      </section>
    </div>
  );
};

export default HelpPage;
