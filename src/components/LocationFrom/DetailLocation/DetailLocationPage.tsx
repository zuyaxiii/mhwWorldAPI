import React from "react";
import {
  IMonsterHunterWorldLocationCamp,
  IMonsterHunterWorldLocationMapZone,
} from "../../../interface/LocationInterface/mhwinterfaceLocationDetail";
import { Link, useNavigate, useParams } from "react-router-dom";

interface LocationCardProps {
  locations: IMonsterHunterWorldLocationMapZone;
  camps: IMonsterHunterWorldLocationCamp[];
}

const DetailLocationPage: React.FC<LocationCardProps> = ({
  locations,
  camps,
}) => {
  const { locationId } = useParams<{ locationId: string }>();
  const navigate = useNavigate();

  const currentLocationId = locationId ? parseInt(locationId, 10) : 0;

  const goToNextLocation = () => {
    const nexLocationId = currentLocationId + 1;
    navigate(`/LocationDetailing/${nexLocationId}`);
  };

  const goToPreviousLocation = () => {
    if (currentLocationId > 1) {
      const previousLocationId = currentLocationId - 1;
      navigate(`/LocationDetailing/${previousLocationId}`);
    }
  };

  return (
    <div className="max-h-screen min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto px-6 bg-[url('./images/monster-hunter-world-iceborne-background.jpg')] bg-repeat-y bg-cover">
        <div className="relative overflow-hidden sm:rounded-lg ">
          <div className="overflow-x-auto shadow-md sm:rounded-lg w-6/12 mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg p-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-2xl font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {locations.name}
                <div className="images mb-4 flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="object-cover rounded-lg shadow-md"
                      src={`/imageLocation/${locations.name}.jpg`}
                      alt={`${locations.name}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/imageLocation/default.jpg";
                      }}
                    />
                  </div>
                </div>
              </caption>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto grid grid-cols-2 gap-6 mt-6">
        <div className="w-9/12 mx-auto">
          <div className="relative overflow-auto shadow-lg sm:rounded-lg h-auto">
            <table className="w-full max-w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-lg">
                    Zone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {locations.zoneCount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-9/12 mx-auto">
          <div className=" relative overflow-auto shadow-md sm:rounded-lg h-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Camps
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Zone
                  </th>
                </tr>
              </thead>
              <tbody>
                {camps.length > 0 ? (
                  camps.map((camp, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {camp.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {camp.zone}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200">
                    <td
                      colSpan={2}
                      className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                    >
                      No camps available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        </div>
  

        <div className="navigation-buttons flex justify-between mt-4 w-10/12 mx-auto">
          <button
            onClick={goToPreviousLocation}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
          >
            Back
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to={`/Location`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to Location List
            </Link>
            <Link
              to={`/`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Back to Home
            </Link>
          </div>
          <button
            onClick={goToNextLocation}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailLocationPage;
