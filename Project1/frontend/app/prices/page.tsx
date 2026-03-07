

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-6">Pricing</h1>

      <p className="text-gray-600 mb-12 max-w-3xl">
        We pioneered discount broking in India. No hidden charges.
        Simple, transparent pricing.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Equity Delivery", price: "₹0" },
          { title: "Intraday & F&O", price: "₹20" },
          { title: "Mutual Funds", price: "₹0" }
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-8 text-center"
          >
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-3xl font-semibold text-[#387ED1]">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
