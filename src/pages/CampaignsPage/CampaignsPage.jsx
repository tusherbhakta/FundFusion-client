// import { useEffect, useState } from "react";
// import axios from "axios";
// import SortButton from "../../components/SortButton/SortButton";
// import CampaignCard from "../../components/CampaignCard/CampaignCard";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
// import { Helmet } from 'react-helmet';
// import SearchCampaign from "../../components/SearchCampaign/SearchCampaign";



// const CampaignsPage = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [sortedCampaigns, setSortedCampaigns] = useState([]);
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     axios
//       .get(`${apiBaseUrl}/campaigns`)
//       .then((response) => {
//         setCampaigns(response.data);
//         setSortedCampaigns(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//   }, []);

//   const handleSort = () => {
//     const sorted = [...campaigns].sort((a, b) => {
//       return sortOrder === "asc"
//         ? a.minDonation - b.minDonation
//         : b.minDonation - a.minDonation;
//     });
//     setSortedCampaigns(sorted);
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   return (
//     <div className="pt-10 pb-16 px-4 max-w-7xl mx-auto">
//       <Helmet>
//         <title>FundFusion | All Campaigns</title>
//       </Helmet>
//       <div className=" ">
//         <SectionTitle title="All Campaigns" subtitle="Explore and support the active campaigns." />
//         <div className="flex max-w-5xl mx-auto flex-col md:flex-row items-center justify-between gap-3 mt-4">
//           <SearchCampaign campaigns={campaigns} setSortedCampaigns={setSortedCampaigns} />
//           <SortButton handleSort={handleSort} sortOrder={sortOrder} />
//         </div>
//         <CampaignCard campaigns={sortedCampaigns} />
//       </div>
//     </div>
//   );
// };

// export default CampaignsPage;

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CampaignTable from "../../components/CampaignTable/CampaignTable"; // Reuse or create this component
import { Link } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching campaigns: ", error);
      });
  }, []);

  console.log(campaigns)

  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <div className="flex justify-center items-center">
            <img
              src={value}
              alt="Campaign"
              className="w-20 h-20 object-cover rounded-md border border-gray-300"
            />
          </div>
        ),
      },
      {
        Header: "Campaign Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ value }) => <span className="line-clamp-1">{value}</span>,
      },
      {
        Header: "Minimum Donation",
        accessor: "minDonation",
        Cell: ({ value }) => <span>${value}</span>,
      },
      {
        Header: "Deadline",
        accessor: "deadline",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Creator",
        accessor: "userName",
        Cell: ({ value }) => <span>{value}</span>,
      },
      {
        Header: "Details",
        accessor: "_id",
        Cell: ({ value }) => (
          <Link
            to={`/campaigns/${value}`}
            className="text-white rounded hover:underline px-4 py-2 bg-indigo-500"
          >
            View Details
          </Link>
        ),
      },
    ],
    []
  );

  return (
    <div className="py-10">
      <Helmet>
        <title>FundFusion | All Campaigns</title>
      </Helmet>
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            title="All Campaigns"
            subtitle="Browse through and support various campaigns."
          />
        </div>
        {campaigns.length > 0 ? (
          <CampaignTable campaigns={campaigns} columns={columns} />
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No campaigns available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;

