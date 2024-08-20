"use client";
import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function SubscriptionsPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const res = await axios("/api/email");
      const data = await res.data;
      setEmails(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteEmail = async (email) => {
    try {
      const deleted = await axios.delete("/api/email", {
        data: {
          email: email,
        },
      });
      if (deleted.data.success) {
        toast.success("Email deleted!");
        fetchEmails();
      } else {
        toast.error("Something went wrong deleting email!");
      }
    } catch (error) {
      toast.error("Something went wrong deleting email!");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className=" px-5 sm:px-16 pt-16 pb-10">
      <h1 className="my-5 text-2xl font-medium text-gray-600">Subscriptions</h1>
      <div className="w-full h-[80vh]  overflow-y-scroll scrollbar-hide">
        <table className="w-[500px] border border-gray-300 rounded-lg">
          <thead className="text-gray-500 text-left border-b border-gray-200">
            <tr>
              <th className="py-2 px-4">Email</th>
              <th className=" w-[100px] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {emails.length > 0 &&
              emails.map((email, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-4"> {email.email}</td>
                  <td className="text-center">
                    <X
                      onClick={() => deleteEmail(email.email)}
                      className="mx-auto cursor-pointer text-gray-400 hover:text-gray-600 transition"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SubscriptionsPage;
