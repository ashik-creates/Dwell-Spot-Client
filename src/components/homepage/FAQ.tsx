import { Accordion } from "@heroui/react";

const faqs = [
  {
    id: "1",
    title: "How do I rent an apartment?",
    content:
      "Browse available apartments, open the details page, and contact the property owner using the provided information.",
  },
  {
    id: "2",
    title: "Are all apartment listings verified?",
    content:
      "Yes. Every listing is reviewed before it is published to ensure accurate information and trustworthy property owners.",
  },
  {
    id: "3",
    title: "Do I need to pay any booking fees?",
    content:
      "No. DwellSpot does not charge any hidden booking fees. Any payment terms are determined by the property owner.",
  },
  {
    id: "4",
    title: "Can I search apartments by location?",
    content:
      "Yes. Use the search and filtering options on the Apartments page to quickly find apartments in your preferred location.",
  },
  {
    id: "5",
    title: "Can I contact the apartment owner directly?",
    content:
      "Yes. Each apartment listing contains the owner's information so you can discuss availability and rental details directly.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <span className="rounded-full bg-[#FFF3F0] px-5 py-2 text-sm font-semibold text-[#FF5A3C]">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#2C2C2C] lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Find answers to the most common questions about renting apartments
            through DwellSpot.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          <Accordion>
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-[#FF5A3C]"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-[#2C2C2C]">
                    <span>{faq.title}</span>
                    <Accordion.Indicator />
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body className="px-6 pb-6 text-gray-500 leading-7">
                    {faq.content}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;