"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import userimg from "../../../user.png";

export default function UserDetails() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("hello use effect:");
    const storedtoken = localStorage.getItem("token");
    if (storedtoken) {
      setToken(storedtoken);
    } else {
      setError("No token found. Please login again.");
      setLoading(false);
    }
    if (token && userId) {
      fetchUserDetails(token);
    }
  }, [token, userId]);

  const fetchUserDetails = async (token) => {
    console.log("Fetching a user...");
    console.log("userId", userId);
    try {
      setLoading(true);
      const response = await axios.get(
        `https://eazrdaily.eazr.in/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      setUser(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching user details:", error);
      setLoading(false);
    }
  };

  const handleBackButtonClick = () => {
    router.push("/users");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <button
          onClick={handleBackButtonClick}
          className="text-blue-600 hover:text-blue-800 font-semibold mb-4 p-2"
        >
          &larr; Back to Users
        </button>
        <div className="flex items-center p-6">
          <Image
            src={user.profile || userimg}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            width={300}
            height={100}
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.gender}</p>
            <p className="text-sm text-gray-400">DOB: {user.dob}</p>
            <p className="text-sm text-gray-400">Email: {user.email}</p>
            <p className="text-sm text-gray-400">Phone: {user.phoneNumber}</p>
            <p
              className={`mt-2 text-sm font-semibold ${
                user.isActive ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {user.isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold">KYC Details</h3>
          {user.kycDetails.length > 0 ? (
            <ul className="space-y-2 mt-4">
              {user.kycDetails.map((kyc) => (
                <li key={kyc.id} className="text-sm text-gray-500">
                  <p>Pan Number: {kyc.panNumber}</p>
                  <p>Aadhaar Number: {kyc.aadhaarNumber || "N/A"}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No KYC details available.</p>
          )}
        </div>

        <div className="p-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold">Employee Details</h3>
          {user.employeeDetails.length > 0 ? (
            <ul className="space-y-2 mt-4">
              {user.employeeDetails.map((employee) => (
                <li key={employee.id} className="text-sm text-gray-500">
                  <p>Employee ID: {employee.employeeId}</p>
                  <p>Department: {employee.department}</p>
                  <p>Designation: {employee.designation}</p>
                  <p>Annual Salary: ₹{employee.annualSalary}</p>
                  <p>Joining Date: {employee.joiningDate}</p>
                  <p>Job Location: {employee.jobLocation}</p>
                  <p>Work Type: {employee.workType}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Employee details available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
