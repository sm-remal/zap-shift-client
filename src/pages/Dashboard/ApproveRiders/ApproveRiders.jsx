import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { BsFillSendCheckFill } from 'react-icons/bs';
import { MdCancelScheduleSend } from 'react-icons/md';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: riders = [] } = useQuery({
        queryKey: ["riders", "pending"],
        queryFn: async () => {
            const res = await axiosSecure.get("/riders")
            return res.data
        }
    })


    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email };
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    alert(`Riders has been ${status}.`)
                }
            })
    }

    const handleApproval = (rider) => {
        updateRiderStatus(rider, "Approved")
    }

    const handelRejection = (rider) => {
        updateRiderStatus(rider, "Rejected")
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Riders Pending Approval: {riders.length}</h2>
            {/* Table  */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr key={rider._id}>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <p
                                        className={
                                            rider.status === "Approved"
                                                ? "text-green-600 font-bold"
                                                : rider.status === "Rejected"
                                                    ? "text-red-500 font-bold"
                                                    : "text-yellow-500 font-bold"
                                        }
                                    >
                                        {rider.status}
                                    </p>
                                </td>

                                <td className='flex gap-3.5'>
                                    <button
                                        
                                        className='btn btn-sm hover:bg-primary'> View
                                    </button>

                                    <button
                                        onClick={() => handleApproval(rider)}
                                        className='btn btn-sm hover:bg-primary'><BsFillSendCheckFill size={20} />
                                    </button>

                                    <button
                                        onClick={() => handelRejection(rider)}
                                        className='btn btn-sm hover:bg-primary'><MdCancelScheduleSend size={20} />
                                    </button>

                                    <button
                                        className='btn btn-sm hover:bg-primary'><RiDeleteBin5Fill size={20} />
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;