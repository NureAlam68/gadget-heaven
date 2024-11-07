const Footer = () => {
    return (
        <footer className="bg-white text-center py-[100px] px-40 mt-[100px]">
      <div className="mb-[30px]">
        <h2 className="text-[32px] font-bold">Gadget Heaven</h2>
        <p className="text-base font-medium text-[#09080F99] mt-3">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-center gap-[166px] mt-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="text-[#09080F99] text-base font-normal">
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Product Support</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Order Tracking</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-[#9538E2]">Returns</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="text-[#09080F99] text-base font-normal">
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Careers</a></li>
            <li><a href="#" className="hover:text-[#9538E2]">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="text-[#09080F99] text-base font-normal">
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:text-[#9538E2]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#9538E2]">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;