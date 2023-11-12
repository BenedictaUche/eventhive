import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-red-800 bg-opacity-75 flex justify-between h-[4em] items-center px-6 text-white text-xl font-medium">
        <h2>© 2023 BloodSaver. All rights reserved.</h2>
        <div className="inline-flex gap-4">
          <Link>Terms of service</Link>
          <Link>Privacy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
