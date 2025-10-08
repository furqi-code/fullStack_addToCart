export function HomePage() {
  return (
    <>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Platform
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Experience seamless shopping with our modern interface
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Sports Equipment
              </h3>
              <p class="text-gray-600">
                Professional-grade sports gear and equipment for all your
                athletic needs
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Mobile, Computers
              </h3>
              <p class="text-gray-600">
                Latest technology and electronic devices from trusted brands
              </p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                General Products
              </h3>
              <p class="text-gray-600">
                Everything you need for home, office, and daily life essentials
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
