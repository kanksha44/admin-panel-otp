"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [contactNumber, setContactNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const sendOtp = async () => {
    try {
      await axios.post("https://eazrdaily.eazr.in/auth/admin/sendOtp", {
        contactNumber,
      });

      alert("OTP sent successfully!");
      setStep(2);
      setErrorMessage("");
    } catch (error) {
      alert("Failed to send OTP.");
      setErrorMessage(error.response?.data?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      if (otp === "7710") {
        const token = await getTokenAfterOtpVerification(contactNumber, otp);
        if (token) {
          localStorage.setItem("token", token);
          alert("Login successful!");
          router.push("/users");
        } else {
          alert("Error retrieving token.");
        }
      } else {
        alert("Invalid OTP.");
      }
    } catch (error) {
      alert("OTP verification failed.");
    }
  };

  const getTokenAfterOtpVerification = async () => {
    try {
      const response = await axios.post(
        "https://eazrdaily.eazr.in/auth/admin/verifyOtp",
        {
          contactNumber: contactNumber,
          otp: "7710",
        }
      );
      if (response.status === 200) {
        const res = response.data.data.employee.token;
        return res;
      } else {
        alert("OTP verification failed!");
        return null;
      }
    } catch (error) {
      console.error("Error during token retrieval:", error);
      return null;
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        {step === 1 ? (
          <>
            <input
              type="text"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <button
              onClick={sendOtp}
              className="bg-blue-500 text-white py-2 px-4 rounded w-full"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <button
              onClick={verifyOtp}
              className="bg-green-500 text-white py-2 px-4 rounded w-full"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
