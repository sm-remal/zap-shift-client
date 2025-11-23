import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

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

    const { data: parcels = [] } = useQuery({
        queryKey: ["myParcels", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });


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
                                <th>Payment Status</th>
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
                                        <td>paid</td>
                                        <td>paid</td>
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