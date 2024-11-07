import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Seller = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target.form;
        if (form.checkValidity()) {
          setShowModal(true);
        } else {
            toast.error('Please provide email and password!');
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
        navigate("/")
    }

  return (
    <div>
        <Helmet>
            <title>Become A Seller | Gadget Heaven</title>
        </Helmet>
      <div className="hero h-[500px] pl-[150px] bg-[#9538E2]">
        <div className="hero-content grid grid-cols-2 gap-14">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">
              Become A Gadget Heaven Seller Today!
            </h1>
            <p className="py-6 text-white">
              Create a Gadget Heaven seller account now and reach millions of
              customers!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[18px]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[18px]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleLogin} className="btn text-[18px] text-white hover:text-black bg-[#9538E2]">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100">
          <div className="bg-white px-6 py-20 rounded-lg shadow-lg text-center h-[300px] w-[500px]">
            <h2 className="text-4xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-6">You have successfully logged in!</p>
            <button onClick={handleCloseModal} className="px-[26px] py-[11px] rounded-[16px] bg-[#9538E2] text-white">
              Close
            </button>
          </div>
        </div>
      )}
      <div className="px-[160px] mt-[100px] flex flex-col gap-4">
        <h1 className="text-[36px] font-bold text-center pb-10">
        Frequently Asked Questions
        </h1>
      <div className="collapse collapse-arrow bg-base-200 border">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">How Can I Sell On Gadget Heaven?</div>
  <div className="collapse-content">
    <p>To start selling on Gadget Heaven, visit the Gadget Heaven Seller Center and create a new account using your phone number. Complete the sign-up process by verifying your email, adding your pickup address, and uploading the required documents for verification. Once your store is approved, add your first product, and you are ready to sell! You can also customize your store by adding your logo, cover, and banners through the Store Builder tool.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 border">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How Much Commission Does Gadget Heaven Charge?</div>
  <div className="collapse-content">
    <p>Opening a shop on Gadget Heaven is free! However, a small commission is deducted from each order payment, with rates varying based on the product category. You can find out about commissions in different categories here.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 border">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the Payment Policy of Gadget Heaven?</div>
  <div className="collapse-content">
    <p>Seller payments are based on orders marked as Delivered to the customer in the Seller Center. Payments for delivered products are settled weekly. In case public holidays/weekends fall upon these dates, the payment date will be released on the first upcoming business day. You can explore Gadget Heaven detailed Payment Policy and find answers to frequently asked questions here.</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Seller;
