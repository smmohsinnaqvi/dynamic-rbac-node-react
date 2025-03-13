async function getHubStatistics(paybandHub) {
  if (
    !paybandHub ||
    (typeof paybandHub === "object" && Object.keys(paybandHub).length === 0)
  ) {
    return { body: { paybandStatistics: null } };
  }

  const paybandCount = paybandHub.payBands?.length || 0;

  const approvedPaybandCount =
    paybandHub.payBands?.filter((payband) => payband.status === "Approved")
      .length || 0;

  const initialTagStatCounts = {
    departmentCount: 0,
    locationCount: 0,
    jobLevelCount: 0,
  };

  const tagCount =
    paybandHub.tags?.reduce((acc, tag) => {
      if (tag.type === "department") acc.departmentCount++;
      else if (tag.type === "location") acc.locationCount++;
      else if (tag.type === "joblevel") acc.jobLevelCount++;
      return acc;
    }, initialTagStatCounts) || initialTagStatCounts;

  const paybandStatistics = { paybandCount, approvedPaybandCount, ...tagCount };

  return {
    body: { paybandStatistics },
  };
}
// const abc = await getHubStatistics({});
const abc = await getHubStatistics({
  editorName: "Devashree Hingne",
  sharedWith: null,
  status: "Published",
  industry: "624210^Community Food Services",
  contentTypeId: "7d00980e1fb34dd29520a496cdcfd514",
  name: "Pay Band Manager Record",
  gsiSortId: "2024-11-28T10:54:29.178Z",
  sharedHash: null,
  revenue: "500m-1b^$500M - $1B",
  payBands: [
    {
      jobTitle: "53442^Quality Engineer",
      range: {
        max: 90612,
        min: 40163,
      },
      customJobTitle: "Quality Engineer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^72cce5389a77491b97f746873b31ec9f",
      liqRange: {
        max: 123790,
        min: 85419,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Approved",
    },
    {
      jobTitle: "53621^Sales Analyst",
      range: {
        max: "90000",
        min: "40000",
      },
      customJobTitle: "Sales",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^b6949ec8fed14ea6b3e64886f1aa3b25",
      liqRange: {
        max: 134904,
        min: 69189,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "7^Post-Baccalaureate Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^f4fa04faa95944cd8979f7ba246528ac",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "34106^Acidity Tester",
      range: {
        max: 46841,
        min: 38446,
      },
      customJobTitle: "Acidity Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 1665,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "47900^Washington-Arlington-Alexandria, DC-VA-MD-WV",
      edu: {
        max: "2^High School Diploma",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^44b30825ef8c4ff69b2e7f3d465e0e75",
      liqRange: {
        max: 46841,
        min: 38446,
      },
      exp: {
        max: "6^1 - 2 years",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "53442^Quality Engineer",
      range: {
        max: 122787,
        min: 72788,
      },
      customJobTitle: "Quality Engineer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "33100^Miami-Fort Lauderdale-West Palm Beach, FL",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^5fdb4b124ec340608e76f5ec661ac195",
      liqRange: {
        max: 123417,
        min: 84742,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53685^e-Commerce Manager",
      range: {
        max: "90000",
        min: "40000",
      },
      customJobTitle: "Sales",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^996fbe6e1fce4fb2b6c6c82932bcd43b",
      liqRange: {
        max: 132992,
        min: 86085,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53616^Account Manager (Sales)",
      range: {
        max: 68210,
        min: 31644,
      },
      customJobTitle: "Account Manager (Sales)",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5007,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 1665,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "13820^Birmingham-Hoover, AL",
      edu: {
        max: "4^Some College Courses",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^f4f541a59255459486e13658a02bba70",
      liqRange: {
        max: 45515,
        min: 33127,
      },
      exp: {
        max: "6^1 - 2 years",
        min: "5^6 months - 1 year",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 62526,
        min: 55000,
      },
      customJobTitle: "Fitter190",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^4b7280100c824b78b434623cec96c777",
      liqRange: {
        max: 61438,
        min: 52054,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: 88775,
        min: 38775,
      },
      customJobTitle: "Marketing 12_3",
      assignedTo: null,
      tags: [
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
        {
          type: "department",
          id: 3462,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^920b34c16da84c65b2e20be4ca7bfa46",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "24530^Supply Chain Analyst",
      range: {
        max: 73310,
        min: 62569,
      },
      customJobTitle: "Supply Chain Analyst",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5007,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "33100^Miami-Fort Lauderdale-West Palm Beach, FL",
      edu: {
        max: "10^First Professional Degree",
        min: "9^Post-Master's Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^75a88807a5ce441fadfe1f18227e597a",
      liqRange: {
        max: 112300,
        min: 99169,
      },
      exp: {
        max: "7^2 - 4 years",
        min: "6^1 - 2 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "16171^Automatic Chief",
      range: {
        max: 67850,
        min: 17963,
      },
      customJobTitle: "Automatic Chief",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: "rdudhane+dev3_test1@thinkwhycom228.onmicrosoft.com",
      requestedAt: "2025-03-07T06:46:34.265Z",
      metro: "24580^Green Bay, WI",
      edu: {
        max: "11^Doctoral Degree",
        min: "10^First Professional Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^57ca42ba27e24d5fa77c5d71462df1c5",
      liqRange: {
        max: 77170,
        min: 66834,
      },
      exp: {
        max: "6^1 - 2 years",
        min: "5^6 months - 1 year",
      },
      roundTo: "500^$500",
      status: "Pending",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: 69462,
        min: 29463,
      },
      customJobTitle: "Release manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
      requestedAt: "2025-03-07T07:02:17.058Z",
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "4^Some College Courses",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^141257ba1a094d38ad921758b01521b0",
      liqRange: {
        max: 185854,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Pending",
    },
    {
      jobTitle: "24530^Supply Chain Analyst",
      range: {
        max: "20000",
        min: 3000,
      },
      customJobTitle: "Site manager",
      assignedTo: null,
      tags: [
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 1665,
        },
        {
          type: "department",
          id: 5033,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^31372b64861a45069e73e29993ef68ec",
      liqRange: {
        max: 136224,
        min: 91164,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "1000^$1000",
      status: "Not Submitted",
    },
    {
      jobTitle: "52483^Recruiting Manager",
      range: {
        max: "80000",
        min: "50000",
      },
      customJobTitle: "Angular developer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^d1b5bb83b56240ed8863315b10b06024",
      liqRange: {
        max: 127594,
        min: 90476,
      },
      exp: {
        max: "11^More than 10 years",
        min: "8^4 - 6 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: 114618,
        min: 74755,
      },
      customJobTitle: "Software tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 1665,
        },
      ],
      requestedBy: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
      requestedAt: "2025-03-11T05:00:56.892Z",
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "12^Post-Doctoral Training",
        min: "7^Post-Baccalaureate Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^c6aef1272cf64faa9c7adc7bf5195468",
      liqRange: {
        max: 114618,
        min: 90852,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Pending",
    },
    {
      jobTitle: "53442^Quality Engineer",
      range: {
        max: "140000",
        min: "90000",
      },
      customJobTitle: "Quality Engineer",
      assignedTo: null,
      tags: [
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
        {
          type: "department",
          id: 5033,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^4f0cba2e695241c6863564a4c463a0ea",
      liqRange: {
        max: 123790,
        min: 85419,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53621^Sales Analyst",
      range: {
        max: "90000",
        min: "40000",
      },
      customJobTitle: "Sales",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "24580^Green Bay, WI",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^7bb5220714d748f590f54e632e7a347c",
      liqRange: {
        max: 131546,
        min: 69236,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
      requestedAt: "2025-03-11T06:37:06.353Z",
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^6e30e794afed4ec791dd5eb7412d94c3",
      liqRange: {
        max: 100840,
        min: 71357,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "5000^$5000",
      status: "Pending",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5007,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "10^First Professional Degree",
        min: "7^Post-Baccalaureate Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^7ebde05d1b8f4edcb45042447728b21c",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "49780^Agile Tester",
      range: {
        max: 82868,
        min: 66634,
      },
      customJobTitle: "Agile Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "74650^Lewiston-Auburn, ME",
      edu: {
        max: "3^Post-Secondary Certificate",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^ba270301aa9945dea85f5eab8a732c08",
      liqRange: {
        max: 82868,
        min: 66634,
      },
      exp: {
        max: "6^1 - 2 years",
        min: "5^6 months - 1 year",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "24023^Test Baker",
      range: {
        max: 26053,
        min: 14480,
      },
      customJobTitle: "Test Baker",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "30460^Lexington-Fayette, KY",
      edu: {
        max: "2^High School Diploma",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^49af039c02c242aabccca2fa79274fdf",
      liqRange: {
        max: 39103,
        min: 33604,
      },
      exp: {
        max: "5^6 months - 1 year",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 79275,
        min: 44687,
      },
      customJobTitle: "Fitter 1_1",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
      requestedAt: "2025-03-11T06:37:52.028Z",
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^99b53d6a46ba4aa7881dba2760944687",
      liqRange: {
        max: 62526,
        min: 52974,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Pending",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_6",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^8ca91e26e3534e4baf2dd4cc8b18ccbf",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 68475,
        min: 33887,
      },
      customJobTitle: "Fitter 1_2",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^4f0e645b58914f07a7cdc43748f2a78b",
      liqRange: {
        max: 61438,
        min: 52054,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_4",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "10^First Professional Degree",
        min: "7^Post-Baccalaureate Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^3cd01a08ae5442a9aafbfaab738776ee",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "8^4 - 6 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_5",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^bec1b2bdbaa34774a8ee147e840ce001",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing_1",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^d1114fda6d114b58a2ffc0e4bc1ed1df",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager_5",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^adfd311c15484dca968990f7afab005f",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_6",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^86e70e14bf8a4792aed7dbdfdc3ccd8c",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_7",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^fbc52ac1c15e4b34bd56a89a559bc1d7",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "53685^e-Commerce Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_7",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^51f26e32d70147c597747cb698ca0795",
      liqRange: {
        max: 126267,
        min: 98330,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: 82625,
        min: 42625,
      },
      customJobTitle: "Release manager_6",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "4^Some College Courses",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^fc096baccb0d4cb9a1c31a8632cb93db",
      liqRange: {
        max: 185854,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: 119376,
        min: 69376,
      },
      customJobTitle: "Marketing 12_8",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "13820^Birmingham-Hoover, AL",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^c733e142024d43a1a6b3de5163b7fc75",
      liqRange: {
        max: 95418,
        min: 60681,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "24023^Test Baker",
      range: null,
      customJobTitle: "Test Baker_1",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "30460^Lexington-Fayette, KY",
      edu: {
        max: "2^High School Diploma",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^524a2d445946437a952744bf97d71a5b",
      liqRange: {
        max: 39103,
        min: 33604,
      },
      exp: {
        max: "5^6 months - 1 year",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: 28850,
        min: 10000,
      },
      customJobTitle: "Release manager_7",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^2983000235b04f5f9808e793388c7e79",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_7",
      assignedTo: null,
      tags: [
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
        {
          type: "department",
          id: 7498,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^57d7c411d42e402a8b2b7055dbbb7a91",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 68475,
        min: 33887,
      },
      customJobTitle: "Fitter 1_3",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^609b249155684ca192b9a20d6078a52f",
      liqRange: {
        max: 61438,
        min: 52054,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_8",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^1a2385d15a71447abd5741d6f1663109",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_9",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^4661ef0aefa44cd78c7759ddc3562c69",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_9",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^5cb0ee27b5194db1b16e98e54133a30a",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_10",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^c63e0325c0594c079750431ca016c082",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_8",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^63d665192e5644cda61e5bc18d814ac6",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_10",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^3182774445ad4b30910d7d062b65bfb0",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_11",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^1d21898356074c4ab1bcad6933e3c291",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_12",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^f812594f84214694ad88888e92e45ede",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_11",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^7591f8137f84459996cf3e4bd9c95e68",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager_8",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3202,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^e56612c281334e518ab88c0e835e27a8",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: 99313,
        min: 59312,
      },
      customJobTitle: "Delivery manager_12",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^1b87027e847e4e98bfe884ad1777859a",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 68475,
        min: 33887,
      },
      customJobTitle: "Fitter 1_4",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "37860^Pensacola-Ferry Pass-Brent, FL",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^e284e93d077d4c8da703e7136fc64852",
      liqRange: {
        max: 56235,
        min: 48219,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_9",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "10^First Professional Degree",
        min: "7^Post-Baccalaureate Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^5c8e7f82b7fa4820b939384c13513ad7",
      liqRange: {
        max: 113336,
        min: 97005,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "8^4 - 6 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_10",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^e3f0016c7b3a4fc499113fdf0a840cb4",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: 95300,
        min: 45300,
      },
      customJobTitle: "Marketing_2",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^b49531d290f04fb7a4b1cb1fb4773ba2",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager_9",
      assignedTo: null,
      tags: [
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
        {
          type: "department",
          id: 5033,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^7e61ca65662b451792632ca52555f61c",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: 115288,
        min: 75400,
      },
      customJobTitle: "Software tester_11",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^82d0111a375d44b8b2866ab22e50fcbb",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "5000^$5000",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_13",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^d47e510d9f754ac492588996e5691047",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "53685^e-Commerce Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_13",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^61bd6ef4463d491b85a627955b239c38",
      liqRange: {
        max: 126267,
        min: 98330,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager_10",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "4^Some College Courses",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^e956cbf4347b4b1b8dcb7a8310742aa1",
      liqRange: {
        max: 185854,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_14",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "44220^Springfield, OH",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^305062a9e8d7410e95cd020b0ee3c34d",
      liqRange: {
        max: 89341,
        min: 58488,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "24023^Test Baker",
      range: null,
      customJobTitle: "Test Baker_2",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "30460^Lexington-Fayette, KY",
      edu: {
        max: "2^High School Diploma",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^31de933e0b1349f6967e79b25d723023",
      liqRange: {
        max: 39103,
        min: 33604,
      },
      exp: {
        max: "5^6 months - 1 year",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: 28850,
        min: 10000,
      },
      customJobTitle: "Release manager_11",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^9cc335b4f05241b8906da9d001191b5d",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_12",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^a809feb536ad4132bcbef0ad29ca3c6b",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52638^Fitter",
      range: {
        max: 68475,
        min: 33887,
      },
      customJobTitle: "Fitter 1_5",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^38d3944a0fba4a51af2e9a2f23fa3669",
      liqRange: {
        max: 62526,
        min: 52974,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_14",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^aa80a3b67dda4d34bfbbd5de6029444c",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_15",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^29dade10d9b64b5ca1d6c98a3654435a",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: 95413,
        min: 45525,
      },
      customJobTitle: "Marketing 12_15",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^45c4597b2cf64289a58d74e77d79aa2a",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_16",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^626e0ff126e549d7acfdfbea3ea271fc",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester_13",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "30460^Lexington-Fayette, KY",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^56bfecf44e704491b6eac2465ed0f3cb",
      liqRange: {
        max: 88127,
        min: 66102,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_16",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^8c19b475085f4acfa054739d60a1f422",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing 12_17",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^a82d266ed3414090a50cfab3affa01f3",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: 88663,
        min: 38663,
      },
      customJobTitle: "Marketing 12_18",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^6a4802b5fc43442da24117ac6fc56ccc",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager_17",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "37860^Pensacola-Ferry Pass-Brent, FL",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^c5a48a7e172e4649a6f3b935317807bc",
      liqRange: {
        max: 63335,
        min: 52129,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager_12",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5033,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^9151348c909344aa966931ea5d697b38",
      liqRange: {
        max: 188976,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "49780^Agile Tester",
      range: null,
      customJobTitle: "Agile Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "47900^Washington-Arlington-Alexandria, DC-VA-MD-WV",
      edu: {
        max: "3^Post-Secondary Certificate",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^b8f612bd2abe4c1da52a0fbe6c409bb5",
      liqRange: {
        max: 107531,
        min: 81143,
      },
      exp: {
        max: "7^2 - 4 years",
        min: "5^6 months - 1 year",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "50005^Angular Developer",
      range: {},
      customJobTitle: "Angular Developer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 1665,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "70750^Bangor, ME",
      edu: {
        max: "3^Post-Secondary Certificate",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^9c2ba75a0b4446ba8f49604dfe85e6ff",
      liqRange: {
        max: 104322,
        min: 86029,
      },
      exp: {
        max: "7^2 - 4 years",
        min: "6^1 - 2 years",
      },
      roundTo: "1000^$1000",
      status: "Not Submitted",
    },
    {
      jobTitle: "50367^React Software Engineer",
      range: {},
      customJobTitle: "React Software Engineer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "13820^Birmingham-Hoover, AL",
      edu: {
        max: "4^Some College Courses",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^e8760afa1113449eb7242bf0aece7142",
      liqRange: {},
      exp: {
        max: "7^2 - 4 years",
        min: "5^6 months - 1 year",
      },
      roundTo: "1000^$1000",
      status: "Not Submitted",
    },
    {
      jobTitle:
        "51072^Software as a Service (SaaS) Sales Account Executive (AE)",
      range: null,
      customJobTitle:
        "Software as a Service (SaaS) Sales Account Executive (AE)",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "22900^Fort Smith, AR-OK",
      edu: {
        max: "3^Post-Secondary Certificate",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^f64bd89e4b8b45b2980f7099ab78db10",
      liqRange: {
        max: 54948,
        min: 46225,
      },
      exp: {
        max: "5^6 months - 1 year",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "4^Some College Courses",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^f528b73296a241dca98b48c448340d17",
      liqRange: {
        max: 185854,
        min: 118340,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "27374^Site Manager",
      range: {
        max: "20000",
        min: 10000,
      },
      customJobTitle: "Site manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^a04c5a044bee40ed9636e8b64a58bc52",
      liqRange: {
        max: 106402,
        min: 77592,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "50005^Angular Developer",
      range: {
        max: 164915,
        min: 116140,
      },
      customJobTitle: "Angular developer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^e5444a1d1e9844d49efab5bd0350184e",
      liqRange: {
        max: 164915,
        min: 116140,
      },
      exp: {
        max: "11^More than 10 years",
        min: "8^4 - 6 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: null,
        min: null,
      },
      customJobTitle: "Software tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^70ea76bbe5804a44b54048b088d84f6b",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53442^Quality Engineer",
      range: {
        max: "140000",
        min: "90000",
      },
      customJobTitle: "Quality Engineer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^08045ea6203a46d5a397f1f4c92d550d",
      liqRange: {
        max: 123790,
        min: 85419,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53621^Sales Analyst",
      range: {
        max: "90000",
        min: "40000",
      },
      customJobTitle: "Sales",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^c480cb88019f4ac6a7bf0d1bc29a09cd",
      liqRange: {
        max: 134904,
        min: 69189,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5007,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^96eb2c37b75c402aaa4ddc33c06c9d9b",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: 980525,
        min: 50525,
      },
      customJobTitle: "Delivery manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^506f9803be004ac89ad25f1ee2a135f5",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "24582^Analysis Tester",
      range: {},
      customJobTitle: "Analysis Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "44220^Springfield, OH",
      edu: {
        max: "2^High School Diploma",
        min: "1^Less than a High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^70b7139f21ba4bc58706a46d7d5d1e88",
      liqRange: {
        max: 42070,
        min: 35371,
      },
      exp: {
        max: "5^6 months - 1 year",
        min: "4^Less than 6 months",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "52696^Telemetry Technician",
      range: null,
      customJobTitle: "Telemetry Technician",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
        },
        {
          type: "joblevel",
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "undefined^undefined",
        min: "undefined^undefined",
      },
      id: "b12fbf2af03844de9524e578f171693f^2f84b837392d46019e750d4e1f1d1e5c",
      liqRange: {
        max: null,
        min: null,
      },
      exp: {
        max: "undefined^undefined",
        min: "undefined^undefined",
      },
      roundTo: "undefined^undefined",
      status: "Not Submitted",
    },
    {
      jobTitle: "15871^Release Manager",
      range: {
        max: "50000",
        min: "10000",
      },
      customJobTitle: "Release manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "33100^Miami-Fort Lauderdale-West Palm Beach, FL",
      edu: {
        max: "4^Some College Courses",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^bdf6a047237445a68fe0c157f3848d0c",
      liqRange: {
        max: 179281,
        min: 114242,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "27374^Site Manager",
      range: {
        max: "20000",
        min: 10000,
      },
      customJobTitle: "Site manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^8b53a935481e403c86f42e185a105e61",
      liqRange: {
        max: 106402,
        min: 77592,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "50005^Angular Developer",
      range: {
        max: "80000",
        min: "50000",
      },
      customJobTitle: "Angular developer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 4439,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^22673bbfe98d4db28cab01106bbb465a",
      liqRange: {
        max: 164915,
        min: 116140,
      },
      exp: {
        max: "11^More than 10 years",
        min: "8^4 - 6 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "52119^Software Tester",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Software tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^1e0203bd8e2e4bb9bf844d130bbf9ccb",
      liqRange: {
        max: 116229,
        min: 88002,
      },
      exp: {
        max: "10^8 - 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53442^Quality Engineer",
      range: {
        max: "140000",
        min: "90000",
      },
      customJobTitle: "Quality Engineer",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^bdab7021831645e9ab2abee976e59f68",
      liqRange: {
        max: 123790,
        min: 85419,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53621^Sales Analyst",
      range: {
        max: "90000",
        min: "40000",
      },
      customJobTitle: "Sales",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 3462,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "22900^Fort Smith, AR-OK",
      edu: {
        max: "6^Bachelor's Degree",
        min: "4^Some College Courses",
      },
      id: "b12fbf2af03844de9524e578f171693f^4d9f3553d7ce4cf6adcda8e01ac990e4",
      liqRange: {
        max: 71566,
        min: 42797,
      },
      exp: {
        max: "11^More than 10 years",
        min: "6^1 - 2 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "53334^Marketing Analytics Manager",
      range: {
        max: "80000",
        min: "30000",
      },
      customJobTitle: "Marketing",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^ea753f4880e64cf191c7f27e8933f8e0",
      liqRange: {
        max: 104896,
        min: 74339,
      },
      exp: {
        max: "11^More than 10 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "824^Delivery Manager",
      range: {
        max: "110000",
        min: "70000",
      },
      customJobTitle: "Delivery manager",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 6708,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "19100^Dallas-Fort Worth-Arlington, TX",
      edu: {
        max: "8^Master's Degree",
        min: "6^Bachelor's Degree",
      },
      id: "b12fbf2af03844de9524e578f171693f^fc7e623b4c154cee810a63b23628f011",
      liqRange: {
        max: 73596,
        min: 61648,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "7^2 - 4 years",
      },
      roundTo: null,
      status: "Not Submitted",
    },
    {
      jobTitle: "34106^Acidity Tester",
      range: null,
      customJobTitle: "Acidity Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "13140^Beaumont-Port Arthur, TX",
      edu: {
        max: "undefined^undefined",
        min: "undefined^undefined",
      },
      id: "b12fbf2af03844de9524e578f171693f^b132675c869c499082b68fc4cacedf2c",
      liqRange: {},
      exp: {
        max: "undefined^undefined",
        min: "undefined^undefined",
      },
      roundTo: "undefined^undefined",
      status: "Not Submitted",
    },
    {
      jobTitle: "1854^Developer Advocate",
      range: {
        max: 58055,
        min: 35326,
      },
      customJobTitle: "Developer Advocate",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 7498,
        },
        {
          type: "location",
          id: 8525,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "13820^Birmingham-Hoover, AL",
      edu: {
        max: "4^Some College Courses",
        min: "2^High School Diploma",
      },
      id: "b12fbf2af03844de9524e578f171693f^3ce52f27c08547a3ae301f232cb14240",
      liqRange: {
        max: 81527,
        min: 58901,
      },
      exp: {
        max: "9^6 - 8 years",
        min: "6^1 - 2 years",
      },
      roundTo: "100^$100",
      status: "Not Submitted",
    },
    {
      jobTitle: "49780^Agile Tester",
      range: {
        max: 86103,
        min: 49397,
      },
      customJobTitle: "Agile Tester",
      assignedTo: null,
      tags: [
        {
          type: "department",
          id: 5007,
        },
        {
          type: "location",
          id: 6989,
        },
        {
          type: "joblevel",
          id: 7795,
        },
      ],
      requestedBy: null,
      requestedAt: null,
      metro: "31140^Louisville/Jefferson County, KY-IN",
      edu: {
        max: "4^Some College Courses",
        min: "3^Post-Secondary Certificate",
      },
      id: "b12fbf2af03844de9524e578f171693f^9298ea9c3fe4451eab3ff101445efc74",
      liqRange: {
        max: 88358,
        min: 51652,
      },
      exp: {
        max: "7^2 - 4 years",
        min: "4^Less than 6 months",
      },
      roundTo: "500^$500",
      status: "Not Submitted",
    },
  ],
  recordType: "content",
  tags: [
    {
      text: "Human Resources",
      id: 7498,
      label: "Human Resources",
      pbCount: 18,
      type: "department",
      value: 7498,
    },
    {
      text: "Marketing",
      id: 4439,
      label: "Marketing",
      pbCount: 7,
      type: "department",
      value: 4439,
    },
    {
      text: "QA",
      id: 3462,
      label: "QA",
      pbCount: 15,
      type: "department",
      value: 3462,
    },
    {
      id: 5007,
      text: "Manager",
      label: "Manager",
      type: "department",
      pbCount: 5,
      value: 5007,
    },
    {
      id: 3202,
      text: "Human Resources_1",
      label: "Human Resources_1",
      type: "department",
      pbCount: 24,
      value: 3202,
    },
    {
      id: 5033,
      text: "Human Resources_2",
      label: "Human Resources_2",
      type: "department",
      pbCount: 28,
      value: 5033,
    },
    {
      text: "Headquarters",
      id: 8525,
      label: "Headquarters",
      pbCount: 86,
      type: "location",
      value: 8525,
    },
    {
      id: 6989,
      text: "Pune",
      label: "Pune",
      type: "location",
      pbCount: 8,
      value: 6989,
    },
    {
      text: "Level 1",
      id: 6708,
      label: "Level 1",
      pbCount: 38,
      type: "joblevel",
      value: 6708,
    },
    {
      text: "I1",
      id: 7795,
      label: "I1",
      pbCount: 52,
      type: "joblevel",
      value: 7795,
    },
    {
      id: 1665,
      text: "High",
      label: "High",
      type: "joblevel",
      pbCount: 5,
      value: 1665,
    },
  ],
  editorId: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
  creatorName: "Devashree Hingne",
  employees: "5^50 - 99",
  reminder: {
    tenantName: "Walmart Co. 25",
    endDate: null,
    creatorEmail: "",
    requestId: "2025/03/06/Azz5hCTTPUqILw5x/notification-1741249616159",
    recurForever: true,
    repetition: 0.1,
    startDate: "2025-03-06T08:27:29.842Z",
  },
  createdAt: "2025-03-05T06:46:36.218Z",
  accessType: "Private",
  tenantKey: "Azz5hCTTPUqILw5x^rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
  sortId: "content^Pay Band Hub",
  tenant: "Azz5hCTTPUqILw5x",
  editedAt: "2025-03-05T06:46:36.218Z",
  partitionId:
    "7d00980e1fb34dd29520a496cdcfd514^0b8aee4980df449c8452981140ca2c71",
  subType: "pay bands",
  category: "Pay Bands",
  description: null,
  subTypeId: "Published^pay bands",
  creatorId: "rdudhane+dev3@thinkwhycom228.onmicrosoft.com",
  type: "Pay Band Hub",
});
console.log(abc);
