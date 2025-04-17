import Brand from "./brand";

export default function RoadluxFooter() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold mb-4">
              <h1>Let's drive with Roadlux today!</h1>
            </span>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Get the app to explore this world of your own story and start on
              this fantastic world today. And they have adventures.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                Downloads here
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                GET ON
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                App Store
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                Google Play
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6">RENT</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-gray-600 transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600 transition">
                      About In
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-gray-600 transition">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-600 transition">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <span className="text-sm text-gray-500">
            <Brand />
          </span>
        </div>
      </div>
    </footer>
  );
}
