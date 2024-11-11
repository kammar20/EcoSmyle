import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqData } from '../constant/data';
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(id) {
    setOpenIndex(openIndex === id ? null : id);
    console.log(id);
  }

  return (
    <section className="max-w-[1350px] m-auto py-24 px-3">
      <h1 className="text-4xl text-center mb-20">Frequently Asked Questions</h1>
      <div className="container w-full flex  flex-col lg:items-center">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`Accordion w-[100%] lg:w-[60%] border-b-2`}
          >
            {/* Accordion Header */}
            <div
              onClick={() => handleClick(faq.id)}
              className={`Accordion-Header ${
                openIndex == faq.id ? 'mb-2' : 'mb-0'
              } flex justify-between lg:items-center py-4`}
            >
              <button className="text-lg text-start">{faq.ques}</button>
              {openIndex === faq.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {/* Accordion Body */}
            {openIndex === faq.id && <p className="py-3">{faq.ans}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
