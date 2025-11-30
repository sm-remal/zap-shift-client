import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';

const UsersManagement = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`);
            return res.data
        }
    })


    const handleMakeUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} marked as an admin.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: "admin" };
                axiosSecure.patch(`/users/${user._id}`, roleInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.displayName} marked as an admin`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    const handleRemoveUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} will be removed from admin.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove!"
        }).then((result) => {
            if (result.isConfirmed) {
                const roleInfo = { role: "user" };
                axiosSecure.patch(`/users/${user._id}`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.displayName} removed from admin`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Photo" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td>
                                    {user.role === "admin" ?
                                        <button
                                            onClick={() => handleRemoveUser(user)}
                                            className='btn bg-red-500 text-white'>
                                            <FiShieldOff size={20} />
                                        </button>
                                        : <button
                                            onClick={() => handleMakeUser(user)}
                                            className='btn bg-green-600 text-white'>
                                            <FaUserShield size={20} />
                                        </button>
                                    }
                                </td>
                                <th>
                                    Actions
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;