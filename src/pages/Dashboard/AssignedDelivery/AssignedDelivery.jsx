import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AssignedDelivery = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ["parcels", user.email, "driver_assigned"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
            return res.data
        }
    })

    const handelDeliveryStatusUpdate = (parcel, status) => {

        let message = `Parcel status is updated with ${status.split("_").join(" ")}`

        const statusInfo = { deliveryStatus: status };
        axiosSecure.patch(`parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Parcels Pending Pickup: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Confirm</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td className='flex gap-3.5'>
                                    {
                                        parcel.deliveryStatus === "driver_assigned"
                                        ? <>
                                            <button
                                                onClick={() => handelDeliveryStatusUpdate(parcel, "rider_arriving")}
                                                className='btn btn-primary text-black'>
                                                Accept
                                            </button>
                                            <button className='btn btn-warning text-black'>Accept</button>
                                        </> : <span>Accepted</span>
                                    }
                                </td>
                                <td className=''>
                                    <button
                                        onClick={() => handelDeliveryStatusUpdate(parcel, "parcel_picked_up")}
                                        className='btn btn-primary text-black'>
                                        Mark as Picked Up
                                    </button>
                                    <button
                                        onClick={() => handelDeliveryStatusUpdate(parcel, "parcel_delivered")}
                                        className='btn btn-primary text-black mx-2'>
                                        Mark as Delivered
                                    </button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AssignedDelivery;