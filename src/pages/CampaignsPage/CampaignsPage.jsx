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

