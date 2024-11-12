"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import userimg from "../../user.png";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Users() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setError("No token found. Please login again.");
      setLoading(false);
    }
    if (token) {
      fetchAllUsers(token);
    }
  }, [token]);

  const fetchAllUsers = async (token) => {
    try {
      const response = await axios.get("https://eazrdaily.eazr.in/users", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching allusers details:", error);
      setLoading(false);
    }
  };

  const userPage = (id) => {
    console.log("id", id);
    router.push(`/users/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 employee-container">
        {users.map((employee) => (
          <div
            key={employee.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onClick={() => userPage(employee.id)}
          >
            <div className="p-4 flex  justify-center items-center gap-4 !h-[300px]">
              <Image
                src={employee.profile || userimg}
                alt="Employee picture"
                width={300}
                height={100}
                className="rounded-lg object-cover border border-gray-200 !h-[280px]"
              />
            </div>
            <div className="p-4 border-t border-gray-200 text-center">
              <h2 className="text-lg font-bold">{employee.name || "N/A"}</h2>
              <p className="text-sm text-gray-500">
                {employee.gender || "N/A"} | {employee.dob || "N/A"}
              </p>
            </div>
            <div className="px-4 pb-4 text-center">
              <p className="text-sm">
                <strong>Email:</strong> {employee.email || "N/A"}
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> {employee.phoneNumber || "N/A"}
              </p>
              <p
                className={`text-sm font-bold ${
                  employee.isActive ? "text-green-600" : "text-red-600"
                }`}
              >
                {employee.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
