"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

export default function UserDetails({ params }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, "query");

  console.log("params.id", params.id);

  const employees = {
    statusCode: 200,
    message: "Success",
    data: [
      {
        id: 7,
        name: "Suraj gupta",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1730967280486-e--b-b---cc-----e--a.jpg",
        gender: "Male",
        dob: "31/08/1997",
        email: "suraj@gmail.com",
        phoneNumber: "7710957578",
        isActive: true,
        createdAt: "2024-11-07T07:39:42.476Z",
        updatedAt: "2024-11-07T08:14:40.698Z",
        kycDetails: [
          {
            id: 4,
            panNumber: "BWBPG5451K",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-07T07:51:23.070Z",
            updatedAt: "2024-11-07T07:51:23.070Z",
          },
        ],
        employeeDetails: [
          {
            id: 6,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "123467",
            department: "Software Development",
            designation: "Backend developer",
            annualSalary: "2540783188.00",
            monthlyInHandSalary: "12501565.00",
            joiningDate: "2023-11-08",
            totalWorkingExperience: "3.0",
            jobLocation: "mumbai",
            workType: "On-Site",
            createdAt: "2024-11-07T08:19:07.252Z",
          },
        ],
      },
      {
        id: 10,
        name: "Sarabjeet Singh",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1730969571130-e-fdd--e--caa------b.jpg",
        gender: "Male",
        dob: "05/10/1989",
        email: "sarabjitsm@gmail.com",
        phoneNumber: "7039500666",
        isActive: true,
        createdAt: "2024-11-07T08:51:24.882Z",
        updatedAt: "2024-11-07T08:52:51.399Z",
        kycDetails: [
          {
            id: 7,
            panNumber: "BWBPG5451J",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-07T08:52:40.285Z",
            updatedAt: "2024-11-07T08:52:40.285Z",
          },
        ],
        employeeDetails: [
          {
            id: 9,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "5053",
            department: "Software Development",
            designation: "Software Developer",
            annualSalary: "69000000.00",
            monthlyInHandSalary: "69000.00",
            joiningDate: "2024-01-11",
            totalWorkingExperience: "2.0",
            jobLocation: "Mumbai",
            workType: "On-Site",
            createdAt: "2024-11-07T08:54:59.740Z",
          },
        ],
      },
      {
        id: 12,
        name: "SHIVAM",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1730981147444-----dd-c----e-------.jpg",
        gender: "Male",
        dob: "24/12/2001",
        email: "Shivam.g@geteazr.com",
        phoneNumber: "8451895512",
        isActive: true,
        createdAt: "2024-11-07T12:03:47.042Z",
        updatedAt: "2024-11-07T12:05:47.626Z",
        kycDetails: [
          {
            id: 8,
            panNumber: "BYIPG6135R",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-07T12:05:36.949Z",
            updatedAt: "2024-11-07T12:05:36.949Z",
          },
        ],
        employeeDetails: [
          {
            id: 11,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "5044",
            department: "Software Development",
            designation: "software Developers",
            annualSalary: "60000.00",
            monthlyInHandSalary: "58000.00",
            joiningDate: "2023-10-11",
            totalWorkingExperience: "2.0",
            jobLocation: "Mumbai",
            workType: "On-Site",
            createdAt: "2024-11-07T12:08:38.592Z",
          },
        ],
      },
      {
        id: 16,
        name: "Shraddha Kedare",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731043451867-----e--f---c----d--a.jpg",
        gender: "Female",
        dob: "12/11/1999",
        email: "shraddha.k@geteazr.com",
        phoneNumber: "8010132681",
        isActive: true,
        createdAt: "2024-11-08T05:17:13.161Z",
        updatedAt: "2024-11-08T05:24:12.032Z",
        kycDetails: [
          {
            id: 10,
            panNumber: "JZJPK1950C",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-08T05:23:42.000Z",
            updatedAt: "2024-11-08T05:23:42.000Z",
          },
        ],
        employeeDetails: [],
      },
      {
        id: 14,
        name: "Abhinav Rawat",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731044601377---e----c--b-f------a.jpg",
        gender: "Male",
        dob: "20/03/2001",
        email: "abhi012@gmail.com",
        phoneNumber: "9307836462",
        isActive: true,
        createdAt: "2024-11-08T04:23:56.516Z",
        updatedAt: "2024-11-08T05:43:21.555Z",
        kycDetails: [
          {
            id: 11,
            panNumber: "EIMPR0903P",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-08T05:43:00.525Z",
            updatedAt: "2024-11-08T05:43:00.525Z",
          },
        ],
        employeeDetails: [
          {
            id: 14,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "9899",
            department: "Product Development",
            designation: "IT",
            annualSalary: "360000.00",
            monthlyInHandSalary: "30000.00",
            joiningDate: "2023-07-01",
            totalWorkingExperience: "1.0",
            jobLocation: "Mumbai",
            workType: "On-Site",
            createdAt: "2024-11-08T05:45:01.286Z",
          },
        ],
      },
      {
        id: 17,
        name: "Hrushikesh Tembe",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731046410083--d-d--c----------f-a.jpg",
        gender: "Male",
        dob: "30/07/1998",
        email: "hrushikesh@gmail.com",
        phoneNumber: "7021948806",
        isActive: true,
        createdAt: "2024-11-08T06:11:36.569Z",
        updatedAt: "2024-11-08T06:13:30.230Z",
        kycDetails: [
          {
            id: 12,
            panNumber: "BPLPT6705C",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-08T06:13:09.176Z",
            updatedAt: "2024-11-08T06:13:09.176Z",
          },
        ],
        employeeDetails: [
          {
            id: 15,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "125sgsh",
            department: "Information Technology",
            designation: "AI Ml dev",
            annualSalary: "480000.00",
            monthlyInHandSalary: "40000.00",
            joiningDate: "2024-10-14",
            totalWorkingExperience: "3.0",
            jobLocation: "mumbai",
            workType: "On-Site",
            createdAt: "2024-11-08T08:14:25.888Z",
          },
        ],
      },
      {
        id: 19,
        name: "Prathamesh Mali",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731050456451--b-d--b----d----df-a.jpg",
        gender: "Male",
        dob: "04/08/2001",
        email: "prathamesh@gmail.com",
        phoneNumber: "9029313664",
        isActive: true,
        createdAt: "2024-11-08T07:19:46.436Z",
        updatedAt: "2024-11-08T07:20:56.550Z",
        kycDetails: [
          {
            id: 14,
            panNumber: "GUWPM2908B",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-08T07:20:34.929Z",
            updatedAt: "2024-11-08T07:20:34.929Z",
          },
        ],
        employeeDetails: [
          {
            id: 17,
            cin: null,
            companyName: "Wipro",
            employeeId: "4657",
            department: "Information Technology",
            designation: "software developer",
            annualSalary: "500000.00",
            monthlyInHandSalary: "40000.00",
            joiningDate: "2023-11-08",
            totalWorkingExperience: "3.0",
            jobLocation: "mumbai",
            workType: "On-Site",
            createdAt: "2024-11-08T08:53:08.835Z",
          },
        ],
      },
      {
        id: 20,
        name: "Mayuresh",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731057388377-baa--bea--f----df---.jpg",
        gender: "Male",
        dob: "16/05/1997",
        email: "majejbwh@hehwh.com",
        phoneNumber: "9969163063",
        isActive: true,
        createdAt: "2024-11-08T09:15:21.659Z",
        updatedAt: "2024-11-08T09:16:28.565Z",
        kycDetails: [
          {
            id: 15,
            panNumber: "BSPPG9640E",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-08T09:16:04.465Z",
            updatedAt: "2024-11-08T09:16:04.465Z",
          },
        ],
        employeeDetails: [
          {
            id: 18,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "12367",
            department: "Product Development",
            designation: "Event coordinator",
            annualSalary: "578464856.00",
            monthlyInHandSalary: "42488.00",
            joiningDate: "2023-11-08",
            totalWorkingExperience: "2.0",
            jobLocation: "Mumbai",
            workType: "Hybrid",
            createdAt: "2024-11-08T09:17:40.974Z",
          },
        ],
      },
      {
        id: 23,
        name: "Mayur Chaudhari",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731395284949------bb----bb----c-a.jpg",
        gender: "Male",
        dob: "23/07/2001",
        email: "hello@gmail.com",
        phoneNumber: "8087205660",
        isActive: true,
        createdAt: "2024-11-12T07:07:06.417Z",
        updatedAt: "2024-11-12T07:08:05.226Z",
        kycDetails: [
          {
            id: 18,
            panNumber: "CEGPC1652C",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-12T07:07:53.567Z",
            updatedAt: "2024-11-12T07:07:53.567Z",
          },
        ],
        employeeDetails: [
          {
            id: 21,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "111",
            department: "Information Technology",
            designation: "SD",
            annualSalary: "360000.00",
            monthlyInHandSalary: "30000.00",
            joiningDate: "2024-11-12",
            totalWorkingExperience: "10.0",
            jobLocation: "Mumbai",
            workType: "Remote",
            createdAt: "2024-11-12T07:08:50.343Z",
          },
        ],
      },
      {
        id: 24,
        name: "Sarabjit Singh",
        profile:
          "https://eazr.s3.ap-south-1.amazonaws.com/1731403454180------e---a-f--------.jpg",
        gender: "Male",
        dob: "05/10/1989",
        email: "sarabjitsm@gmail.com",
        phoneNumber: "9769309961",
        isActive: true,
        createdAt: "2024-11-12T09:23:06.254Z",
        updatedAt: "2024-11-12T09:24:14.455Z",
        kycDetails: [
          {
            id: 19,
            panNumber: "ASIPM1339D",
            aadhaarNumber: null,
            details: null,
            aadhaarVerificationId: null,
            createdAt: "2024-11-12T09:23:47.010Z",
            updatedAt: "2024-11-12T09:23:47.010Z",
          },
        ],
        employeeDetails: [
          {
            id: 22,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "001",
            department: "Human Resource",
            designation: "head",
            annualSalary: "100000.00",
            monthlyInHandSalary: "10000.00",
            joiningDate: "2022-11-02",
            totalWorkingExperience: "12.0",
            jobLocation: "mumbai",
            workType: "Hybrid",
            createdAt: "2024-11-12T09:25:01.825Z",
          },
        ],
      },
      {
        id: 13,
        name: "Mohit Chheda",
        profile: null,
        gender: "Male",
        dob: "04/11/1988",
        email: "Mohit.chheda@gmail.com",
        phoneNumber: "9769305305",
        isActive: false,
        createdAt: "2024-11-07T15:58:58.156Z",
        updatedAt: "2024-11-07T15:59:41.168Z",
        kycDetails: [],
        employeeDetails: [
          {
            id: 12,
            cin: "U72900MH2020PTC343134",
            companyName: "Eazr Digipayments Private Limited",
            employeeId: "5001",
            department: "Product Management",
            designation: "5488",
            annualSalary: "100000.00",
            monthlyInHandSalary: "1000.00",
            joiningDate: "2024-11-07",
            totalWorkingExperience: "2.0",
            jobLocation: "nbv",
            workType: "Hybrid",
            createdAt: "2024-11-07T16:02:47.827Z",
          },
        ],
      },
      {
        id: 3,
        name: null,
        profile: null,
        gender: null,
        dob: null,
        email: null,
        phoneNumber: "9284564749",
        isActive: false,
        createdAt: "2024-11-06T17:18:53.123Z",
        updatedAt: "2024-11-06T17:18:53.123Z",
        kycDetails: [],
        employeeDetails: [],
      },
    ],
  };

  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  // const fetchUserDetails = async (token) => {
  //   try {
  //     const response = await axios.get(
  //       `https://eazrdaily.eazr.in/users/${params.id}`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user details:", error);
  //   }
  // };

  return (
    <div className="p-8">
      {employee ? (
        <>
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">
              {employee.name}'s Details
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{employee.name}</h2>
              <p>
                <b>Gender:</b> {employee.gender}
              </p>
              <p>
                <b>Date of Birth:</b> {employee.dob}
              </p>
              <p>
                <b>Email:</b> {employee.email}
              </p>
              <p>
                <b>Phone:</b> {employee.phoneNumber}
              </p>
              <p>
                <b>Status:</b> {employee.isActive ? "Active" : "Inactive"}
              </p>

              <h3 className="mt-4 font-bold">KYC Details:</h3>
              <ul>
                {employee.kycDetails.map((kyc, index) => (
                  <li key={index}>PAN: {kyc.panNumber}</li>
                ))}
              </ul>

              <h3 className="mt-4 font-bold">Employee Details:</h3>
              <ul>
                {employee.employeeDetails.map((emp, index) => (
                  <li key={index}>
                    {emp.companyName} - {emp.designation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
