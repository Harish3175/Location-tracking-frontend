import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Project Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Location Tracker</h2>
            <p className="text-sm text-gray-400">
              A full-stack MERN application to track and manage real-time user locations securely using JWT authentication.
            </p>
            <h1>Email : admin@nokia.com</h1>
            <h1>Password : Head@123</h1>
          </div>

          {/* About Project (NEW SECTION) */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About Project</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>📍 Real-time location tracking</li>
              <li>🔐 Secure login with JWT authentication</li>
              <li>🛡️ Role-based access (Admin/User)</li>
              <li>🌐 Built using MERN Stack</li>
              <li>⚡ Responsive UI with Tailwind CSS</li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-sm text-gray-400">
              Email: harishofficial317@gmail.com
            </p>

            <div className="flex gap-4 mt-3">
              <a href="https://github.com/Harish3175" className="hover:text-blue-400">GitHub</a>
              <a href="https://www.linkedin.com/in/harish-s-64b986358/" className="hover:text-blue-400">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Harish | Built with MERN Stack
        </div>

      </div>
    </footer>
  );
};

export default Footer;