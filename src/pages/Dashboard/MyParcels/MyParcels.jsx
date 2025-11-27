import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaRegEdit } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    // const {data : parcels = []} = useQuery({
    //     queryKey: ["myParcels", user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/parcels?email=${user.email}`);
    //         return res.data;
    //     }
    // })

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ["myParcels", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });

    const handleParcelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {

                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h2>All My Parcels: {parcels.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Parcel Name</th>
                                <th>Parcel Type</th>
                                <th>Weight (Kg)</th>
                                <th>Date & Time</th>
                                <th>Cost</th>
                                <th>Payment</th>
                                <th>Delivery Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((parcel, index) =>
                                    <tr key={parcel._id}>
                                        <th>{index + 1}</th>
                                        <td>{parcel.parcelName}</td>
                                        <td>{parcel.parcelType}</td>
                                        <td>{parcel.parcelWeight}</td>
                                        <td>{parcel.createdAt}</td>
                                        <td>{parcel.cost}</td>
                                        <td>
                                            {
                                            parcel.paymentStatus === "paid" ? 
                                            <span className='text-green-500 font-medium'>Paid</span> :
                                            <Link to={`/dashboard/payment/${parcel._id}`} className='btn btn-sm bg-primary'>
                                                pay
                                            </Link>
                                            
                                            }
                                        </td>
                                        <td>{parcel.deliveryStatus}</td>
                                        <td className='flex gap-4'>
                                            <button className='btn btn-square hover:bg-primary'><FaRegEdit /></button>
                                            <button className='btn btn-square hover:bg-primary'><FaMagnifyingGlass /></button>
                                            <button
                                                onClick={() => handleParcelDelete(parcel._id)}
                                                className='btn btn-square hover:bg-primary'><FaRegTrashCan /></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyParcels;