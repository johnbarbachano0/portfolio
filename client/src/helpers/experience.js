import asi from "../assets/asi.png";
import acs from "../assets/acs.png";

export const experienceData = [
  {
    id: 1,
    company: "Alliance Software Inc. (ASI)",
    website: "https://www.alliance.com.ph/",
    logo: asi,
    imgWidth: "24px",
    industry: "IT",
    companyDesc:
      "Application development outsourcing, high level BPO work, Quality Assurance and Testing Services, UX design, System and Application Documentation and Vulnerability Assessment services.",
    location: "San Juan, Manila",
    projects: [
      {
        name: "Unilab Laboratories Inc. (UL) Managed Services",
        industry: "Pharmaceuticals",
        location: "Mandaluyong",
      },
    ],
    jobDesc: {
      jobTitle: "Systems Analyst (SA)",
      summary:
        "Works with all stakeholders for the successful completion of the project from initiation until closure. Main responsibilities are UI/UX design, UAT, Deployment and Go-Live.",
      stakeholders: [
        {
          role: "UL Technical PM",
          task: [
            "Responsible for all technical aspects of the apps",
            "Provides technical insights  during consultation or as needed",
            "All ASI Team members report to this PM esp. for technical aspects",
            "Approver of all changes, deployment and documents",
            "From UL IT Department",
          ],
        },
        {
          role: "UL PM",
          task: [
            "Handles billing related activities",
            "Approver of all changes, deployment and documents",
            "All ASI Team members report to this PM",
            "From UL IT Department",
          ],
        },
        {
          role: "ASI PM",
          task: [
            "Team Lead",
            "All SAs report to this PM",
            "Conducts Daily Project Status Meeting",
            "Involved in all projects/RFCs/meeting as needed",
          ],
        },
        {
          role: "ASI Techinical PM",
          task: ["All Devs report to this PM"],
        },
        {
          role: "ASI Developer",
          task: ["Codes the Projects/RFCs"],
        },
        {
          role: "QA Tester",
          task: [
            "Perform integration testing",
            "Optional add-on paid resource",
          ],
        },
        {
          role: "Project Sponsor",
          task: [
            "Handles all billing related activities",
            "Approver of all documents",
            "From UL IT Department",
          ],
        },
        {
          role: "Application Owner",
          task: [
            "Client PMs from diffent departments in UL",
            "Pays for the Projects/RFCs/Bug fixes",
            "Owns the application, usually the App Admin",
            "Project/RFC Initiator",
          ],
        },
        {
          role: "Business User",
          task: ["Users of the application"],
        },
      ],
      responsibilities: [
        {
          state: "Initiation",
          value: [
            "Perform feasibility studies as needed.",
            "Project assessment with ASI Dev.",
            "Meeting with other application admin/s for new or existing projects (if any integration is needed).",
            "Project Kickoff Meeting with all ASI and UL stakeholders.",
          ],
        },
        {
          state: "Design",
          value: [
            "Requirements gathering with Unilab Stakeholders(App Owner, Business Users, other App Owners/s as needed). Output Functional Specs Lists (FL) document.",
            "Design as per requirements. Output Functional Specs Document (FSD).",
            "Document approvals/sign off with ASI and UL stakeholders.",
            "Developement Kickoff with ASI Dev/s. Walkthrough on the design with ASI Dev/s.",
          ],
        },
        {
          state: "Development",
          value: [
            "During development phase, if project has no paid QA testers, SA will create the Test Scripts in prepration for Integration Testing.",
            "If there are any gaps on the design, SA will perform requirements gathering, design, FSD update and email sign off for the new design.",
            "SA will conduct weekly Project Status with Unilab Stakeholders moving forward.",
          ],
        },
        {
          state: "Release",
          value: [
            "Perform Integration Test (if no QA testers). Output Integration Test Results (ITR).",
            "Set up Test and Production Servers with Unilab Infra Team.",
            "Configuration of all needed softwares such as SSIS, Database, IIS, Firewall in test servers.",
            "User Acceptance Test (UAT) walkthrough. Output UAT Results (UATR).",
            "User Acceptance Test with Application Owner and Business Users. Output UAT Results (UATR).",
            "UATR Sign Off with all Stakeholders including Unilab PM.",
          ],
        },
        {
          state: "Deployment",
          value: [
            "Deployment Sign off with Unilab Deployment Team.",
            "Trainings to Business Users.",
            "Project Live.",
            "One month Hypercare for bug fixes and deployment.",
          ],
        },
        {
          state: "Closure",
          value: [
            "Final document updates and sign off.",
            "Project handover (tasks and documents) to maintenance team.",
            "Meeting for project findings and lessons learned.",
            "Project closure.",
          ],
        },
      ],
    },
    startDate: "2017-02-01T00:00:00.000Z",
    endDate: "2021-03-01T00:00:00.000Z",
    duration: 4,
  },
  {
    id: 2,
    company: "ACS Technologies Ltd.",
    website: "https://www.acs.com.hk/",
    logo: acs,
    imgWidth: "35px",
    industry: "IT",
    companyDesc:
      "Provides IT services and payment solutions using in-house Smart Card Readers. Asia Pacific's top supplier and one of the world's top 3 suppliers of PC-linked smart card readers.",
    location: "Mandaluyong",
    projects: [
      {
        name: "RHT Bus Services Ltd. - Payment Solutions",
        industry: "Bus Company",
        location: "Mauritius",
      },
      {
        name: "e-Purse Systems",
        industry: "E-Purse Payment Company",
        location: "Nigeria",
      },
      {
        name: "SRT Bus Line - Payment Solutions",
        industry: "Bus Company",
        location: "Myanmar",
      },
      {
        name: "City Public Link - Payment Solutions",
        industry: "Bus Company",
        location: "Malaysia",
      },
      {
        name: "Kigali Bus Services - Payment Solutions",
        industry: "Bus Company",
        location: "Kenya",
      },
      {
        name: "SM's ePlus - Smart Card Payment Solutions",
        industry: "Retail",
        location: "Philippines",
      },
      {
        name: "Ayala's Beep Card - Payment Solutions on Buses",
        industry: "Retail",
        location: "Philippines",
      },
    ],
    jobDesc: {
      jobTitle: "System Deployment Engineer (SDE)",
      summary:
        "Deployed onsite for successful implementation of payment solutions to bus and retail companies. Main resposibilites are onsite visit and assessment, requirements gathering, installation of hardwares (smart card readers) and softwares, onsite deployment to project countries, Go-Live.",
      stakeholders: [
        {
          role: "Project Manager (PM)",
          task: [
            "Team Lead",
            "All SDEs report to this PM",
            "Weekly Project Status Meeting",
            "Involved in all projects/RFCs/meeting as needed",
          ],
        },
        {
          role: "Sales Engineer",
          task: ["Client Acquisition", "Project Assessments"],
        },
        {
          role: "Developer",
          task: ["Codes the Projects/RFCs"],
        },
        {
          role: "QA Tester",
          task: ["Perform testing on releases"],
        },
        {
          role: "Application Owner",
          task: [
            "Client PMs from diffent projects being handled",
            "Project/RFC Initiator",
          ],
        },
        {
          role: "Business Users",
          task: ["Users of the application"],
        },
      ],
      responsibilities: [
        {
          state: "Initiation",
          value: [
            "Project assessment with Sales Engineer.",
            "Product Demonstrations of existing payment solutions.",
            "Project Kickoff with all stakeholders.",
          ],
        },
        {
          state: "Design",
          value: [
            "Requirements gathering. Output Tech Specs (TS) document.",
            "Design as per Tech Specs. Output Tech Design Document.",
            "Document approvals/sign off with stakeholders.",
          ],
        },
        {
          state: "Development",
          value: [
            "No involvement during development except design clarifications from devs.",
          ],
        },
        {
          state: "Release",
          value: [
            "User Acceptance Test (UAT) walkthrough.",
            "User Acceptance Test with Application Owner. Output UAT Results (UATR).",
            "UATR Sign Off with Application Owner.",
          ],
        },
        {
          state: "Deployment",
          value: [
            "Deployment of hardwares and softwares.",
            "Trainings to Business Users.",
            "Project Live.",
          ],
        },
        {
          state: "Closure",
          value: [
            "Project handover (tasks and documents) to Application Owner.",
            "Meeting for project findings and lessons learned.",
            "Project closure.",
          ],
        },
      ],
    },
    startDate: "2012-02-01T00:00:00.000Z",
    endDate: "2017-02-01T00:00:00.000Z",
    duration: 5,
  },
];
