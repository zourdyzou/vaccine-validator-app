import type { NextPage } from 'next';
import Head from 'next/head';

import DashboardLayout from '@/screens/layout/layout';

const PlacesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <DashboardLayout>
        <div className="m-4 mt-10 flex wf flex-wrap gap-5">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-2xl uppercase text-left">
                <tr className="bg-teal-700 text-white">
                  <th scope="col" className="py-3 px-6">
                    ID Card
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Phone number
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Vaccine Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    address
                  </th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="py-4 px-6">Sliver</td>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">$2999</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="py-4 px-6">White</td>
                  <td className="py-4 px-6">Laptop PC</td>
                  <td className="py-4 px-6">$1999</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="py-4 px-6">Black</td>
                  <td className="py-4 px-6">Accessories</td>
                  <td className="py-4 px-6">$99</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="py-4 px-6">Gray</td>
                  <td className="py-4 px-6">Phone</td>
                  <td className="py-4 px-6">$799</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch 5
                  </th>
                  <td className="py-4 px-6">Red</td>
                  <td className="py-4 px-6">Wearables</td>
                  <td className="py-4 px-6">$999</td>
                  <td className="py-4 px-6">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default PlacesPage;
