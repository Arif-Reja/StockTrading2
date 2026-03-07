
export default function SupportPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-6">Support</h1>

      <p className="text-gray-600 mb-10 max-w-3xl">
        Find answers to your questions or get in touch with our support team.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-medium mb-3">Help Center</h2>
          <p className="text-gray-600">
            Browse FAQs and detailed guides on investing and trading.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-3">Contact Us</h2>
          <p className="text-gray-600">
            Reach us via ticket, email, or phone during market hours.
          </p>
        </div>
      </div>
    </main>
  );
}
