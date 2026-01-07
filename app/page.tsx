export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Practical Financial Guidance for Real Life & Business
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Paid financial education, advisory-style resources, and learning tools
          for small business owners, Gen X professionals, and newcomers to Canada
          who want clarity — not complexity.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-full text-lg hover:opacity-90">
          Explore Paid Resources
        </button>
      </section>

      {/* Who We Serve */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Who This Is For
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Small Business Owners
            </h3>
            <p className="text-gray-600">
              Learn how to manage cash flow, plan expenses, understand taxes,
              and make informed financial decisions for your business.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Gen X Professionals
            </h3>
            <p className="text-gray-600">
              Designed for adults balancing income, family, property, and long-term
              financial stability — without hype or jargon.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Newcomers to Canada
            </h3>
            <p className="text-gray-600">
              Clear guidance on Canadian personal and small business finance,
              built with accessibility and multilingual expansion in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Paid Products */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Paid Learning & Advisory Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Financial Reference Bookmarks
            </h3>
            <p className="text-gray-600 mb-4">
              Premium bookmarks with key financial terms, formulas, and decision
              reminders — ideal for ongoing study and quick reference.
            </p>
            <button className="underline font-medium">
              View Product
            </button>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Business & Personal Study Sheets
            </h3>
            <p className="text-gray-600 mb-4">
              Structured worksheets covering budgeting, pricing, credit,
              cash flow, and planning — created for serious learners.
            </p>
            <button className="underline font-medium">
              Purchase Sheets
            </button>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              Guided Courses & Advisory Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Step-by-step paid programs designed to help you make confident
              financial decisions for life and business.
            </p>
            <button className="underline font-medium">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Value */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Built for People Willing to Invest in Clarity
        </h2>
        <p className="text-gray-600 text-lg">
          This platform is not about quick tips or free content overload.
          Our resources are designed for individuals and business owners who
          understand that informed financial decisions are worth paying for.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto text-sm text-gray-500 border-t pt-8">
        <p>
          Disclaimer: All content and products are provided for educational
          purposes only and do not constitute personalized financial,
          investment, tax, or legal advice.
        </p>
      </section>
    </main>
  );
}