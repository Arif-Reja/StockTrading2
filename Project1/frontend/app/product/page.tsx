
export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-10">Our Products</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Kite",
            desc: "Fast, sleek trading platform for stocks & derivatives."
          },
          {
            title: "Coin",
            desc: "Direct mutual funds with zero commission."
          },
          {
            title: "Console",
            desc: "Backoffice platform for reports and analytics."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
