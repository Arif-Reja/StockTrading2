"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function SignupPage() {

  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const sendOtp = async () => {
    try {

      if (mobile.length !== 10) {
        alert("Enter valid mobile number");
        return;
      }

      const res = await axios.post("http://localhost:3002/send-otp", {
        mobile: mobile,
      });

      setShowOtp(true);
     alert("Your OTP is: " + res.data.otp);

    } catch (error) {
      console.error(error);
      alert("Failed to send OTP");
    }
  };
 const verifyOtp = async () => {
  try {
    const res = await axios.post("http://localhost:3002/verify-otp", {
      mobile: mobile,
      otp: otp,
    });

    if (res.data.success) {
      alert("Login successful");
      window.location.href = "http://localhost:3001";
    } else {
      alert("Invalid OTP");
    }

  } catch (error) {
    console.error(error);
    alert("Invalid OTP");
  }
};

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-center">

      <h1 className="text-4xl font-semibold mb-4">
        Open a Zerodha account
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
        and F&O trades.
      </p>

      <div className="max-w-md mx-auto bg-white border rounded-lg p-8 shadow-sm">
        <input
          type="text"
          placeholder="Mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full border px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showOtp && (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border px-4 py-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        )}

        {!showOtp ? (
          <button
            onClick={sendOtp}
            className="w-full bg-[#387ED1] text-white py-3 rounded hover:bg-blue-600 transition"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={verifyOtp}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Verify OTP
          </button>
        )}

        <p className="text-sm text-gray-500 mt-4">
          By proceeding, you agree to Zerodha’s terms & privacy policy.
        </p>

      </div>

    </main>
  );
}