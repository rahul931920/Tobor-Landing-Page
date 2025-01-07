const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        {/* Main Footer Section */}
        <div className="container mx-auto mt-40rem flex flex-row flex-wrap justify-between items-start gap-8 px-4">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-2">⚡ EV Charger Solutions</h4>
            <p>Your reliable partner in sustainable EV charging infrastructure.</p>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} EV Charger Co. All rights reserved.</p>
          </div>
  
          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/stations" className="hover:text-green-400">Charging Stations</a></li>
              <li><a href="/support" className="hover:text-green-400">Support</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: <a href="mailto:support@evcharger.com" className="hover:text-green-400">support@evcharger.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:text-green-400">+1 (234) 567-89</a></p>
            <p>Address: 123 Green Energy Road, Tech City</p>
          </div>
  
          {/* Social Media Links */}
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">Facebook</a>
              <a href="#" className="hover:text-green-400">Twitter</a>
              <a href="#" className="hover:text-green-400">LinkedIn</a>
            </div>
          </div>
        </div>
  
        {/* Bottom Note */}
        <div className="text-center text-sm mt-8">
          <p>Powered by EV Charger Technologies | Designed for a Greener Future 🌍</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;