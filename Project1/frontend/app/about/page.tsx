export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-6">About Zerodha</h1>

      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        Zerodha is India’s largest stockbroker, helping over 1 crore clients
        invest and trade in stocks, derivatives, mutual funds, ETFs, bonds,
        and more.
      </p>

      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-medium mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To make investing simple, transparent, and affordable for everyone.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-3">What sets us apart</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>₹0 brokerage on equity delivery</li>
            <li>No gimmicks or hidden charges</li>
            <li>Best-in-class trading platforms</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
