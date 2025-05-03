export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="flex items-center justify-center h-screen bg-black text-white text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">RB Automotive</h1>
          <p className="text-lg md:text-xl">Performance | Precision | Passion</p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">ECU Tuning</h3>
              <p>Custom ECU remapping for better performance and efficiency.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Dyno Testing</h3>
              <p>State-of-the-art dyno diagnostics to unlock full power potential.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Performance Parts</h3>
              <p>High-quality parts tailored to your vehicle&apos;s upgrade goals.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 bg-black text-white">
        <p>&copy; {new Date().getFullYear()} RB Automotive. All rights reserved.</p>
      </footer>
    </main>
  );
}
