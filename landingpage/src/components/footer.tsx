import styles from '../app/main.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Main Footer Section */}
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.section}>
          <h4 className={styles.title}>⚡ EV Charger Solutions</h4>
          <p>Your reliable partner in sustainable EV charging infrastructure.</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} EV Charger Co. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/about" className={styles.link}>About Us</a></li>
            <li><a href="/stations" className={styles.link}>Charging Stations</a></li>
            <li><a href="/support" className={styles.link}>Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h4 className={styles.title}>Contact Us</h4>
          <p>Email: <a href="mailto:support@evcharger.com" className={styles.link}>support@evcharger.com</a></p>
          <p>Phone: <a href="tel:+123456789" className={styles.link}>+1 (234) 567-89</a></p>
          <p>Address: 123 Green Energy Road, Tech City</p>
        </div>

        {/* Social Media Links */}
        <div className={styles.section}>
          <h4 className={styles.title}>Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className={styles.link}>Facebook</a>
            <a href="#" className={styles.link}>Twitter</a>
            <a href="#" className={styles.link}>LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className={styles.bottomNote}>
        <p>Powered by EV Charger Technologies | Designed for a Greener Future 🌍</p>
      </div>
    </footer>
  );
};

export default Footer;
