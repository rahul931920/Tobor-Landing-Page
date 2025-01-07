import Nav from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Nav />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Section 1 */}
        <div className="bg-gray-100 p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Welcome to EV Charger Solutions</h2>
          <p>
            Discover innovative and sustainable EV charging solutions for homes, businesses,
            and public spaces. We are committed to making EV charging easier and more accessible.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to promote green energy solutions and help build a future with
            sustainable mobility. Learn more about how we are powering the EV revolution.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-gray-100 p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reliable and high-performance EV chargers</li>
            <li>Comprehensive support and maintenance</li>
            <li>Commitment to sustainability</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p>
            Ready to join the EV revolution? Explore our range of EV chargers or contact us
            for customized charging solutions.
          </p>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
