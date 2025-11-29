import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import agent_pending from "../../assets/agent-pending.png";

const Rider = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map((c) => c.region);
    const regions = [...new Set(regionsDuplicate)];

    const selectedRegion = useWatch({ control, name: "region" });

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter((c) => c.region === region);
        return regionDistricts.map((d) => d.district);
    };

    const handleRiderApplication = (data) => {
        // console.log("FORM DATA:", data);
        axiosSecure.post("/riders", data)
        .then(res => {
            if(res.data.insertedId){
                alert("Your Application has been submitted. Wait for conformation!!")
                reset();
            }
        })
    };

    return (
        <div className="bg-white p-10 rounded-xl">

            <h2 className="text-4xl font-bold mb-3 text-[#003F2A]">Be a Rider</h2>
            <p className="text-gray-600 mb-10 max-w-xl">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

                {/* LEFT FORM */}
                <form onSubmit={handleSubmit(handleRiderApplication)} className="space-y-6">

                    <h3 className="text-xl font-semibold mb-5">Tell us about yourself</h3>

                    <div className="grid gap-4">

                        {/* Name */}
                        <div>
                            <label className="font-medium">Your Name</label>
                            <input
                                {...register("name", {
                                    required: "Your name is required",
                                    minLength: { value: 3, message: "Name must be at least 3 characters" },
                                })}
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* License */}
                        <div>
                            <label className="font-medium">Driving License Number</label>
                            <input
                                {...register("license", {
                                    required: "License number is required",
                                    minLength: { value: 5, message: "Invalid license number" },
                                })}
                                className="input input-bordered w-full"
                                placeholder="Driving License Number"
                            />
                            {errors.license && <p className="text-red-500 text-sm">{errors.license.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-medium">Your Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                defaultValue={user?.email}
                                className="input input-bordered w-full"
                                placeholder="Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Region */}
                        <div>
                            <label className="font-medium">Your Region</label>
                            <select
                                {...register("region", {
                                    required: "Please select a region",
                                    validate: (value) => value !== "Select your Region" || "Please select a valid region",
                                })}
                                className="select select-bordered w-full"
                            >
                                <option>Select your Region</option>
                                {regions.map((r, i) => (
                                    <option key={i} value={r}>{r}</option>
                                ))}
                            </select>
                            {errors.region && <p className="text-red-500 text-sm">{errors.region.message}</p>}
                        </div>

                        {/* District */}
                        <div>
                            <label className="font-medium">Your District</label>
                            <select
                                {...register("district", {
                                    required: "Please select a district",
                                    validate: (value) => value !== "Select your District" || "Please select a valid district",
                                })}
                                className="select select-bordered w-full"
                            >
                                <option>Select your District</option>
                                {districtsByRegion(selectedRegion).map((d, i) => (
                                    <option key={i} value={d}>{d}</option>
                                ))}
                            </select>
                            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
                        </div>

                        {/* NID */}
                        <div>
                            <label className="font-medium">NID No</label>
                            <input
                                {...register("NID", {
                                    required: "NID number is required",
                                    minLength: { value: 10, message: "NID must be at least 10 digits" },
                                    maxLength: { value: 17, message: "NID must be less than 17 digits" },
                                })}
                                className="input input-bordered w-full"
                                placeholder="NID"
                            />
                            {errors.NID && <p className="text-red-500 text-sm">{errors.NID.message}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="font-medium">Phone Number</label>
                            <input
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: "Enter a valid Bangladeshi phone number",
                                    },
                                })}
                                className="input input-bordered w-full"
                                placeholder="Phone Number"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>

                        {/* Bike Model */}
                        <div>
                            <label className="font-medium">Bike Brand Model and Year</label>
                            <input
                                {...register("bikeModel", {
                                    required: "Bike model is required",
                                })}
                                className="input input-bordered w-full"
                                placeholder="Bike Brand Model and Year"
                            />
                            {errors.bikeModel && <p className="text-red-500 text-sm">{errors.bikeModel.message}</p>}
                        </div>

                        {/* Bike Registration */}
                        <div>
                            <label className="font-medium">Bike Registration Number</label>
                            <input
                                {...register("bikeNumber", {
                                    required: "Registration number is required",
                                })}
                                className="input input-bordered w-full"
                                placeholder="Bike Registration Number"
                            />
                            {errors.bikeNumber && <p className="text-red-500 text-sm">{errors.bikeNumber.message}</p>}
                        </div>

                        {/* About */}
                        <div>
                            <label className="font-medium">Tell Us About Yourself</label>
                            <textarea
                                {...register("about", {
                                    required: "This field is required",
                                    minLength: { value: 10, message: "Write at least 10 characters" },
                                })}
                                className="textarea textarea-bordered w-full"
                                placeholder="Tell Us About Yourself"
                            ></textarea>
                            {errors.about && <p className="text-red-500 text-sm">{errors.about.message}</p>}
                        </div>

                    </div>

                    <button className="btn w-full bg-primary text-black font-semibold">
                        Apply as a Rider
                    </button>
                </form>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center items-start">
                    <img
                        src={agent_pending}
                        alt="Rider Illustration"
                        className="w-[350px] lg:w-[520px] h-[700px]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Rider;
