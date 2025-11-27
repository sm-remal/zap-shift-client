import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const SendParcel = () => {
  const { register,
    handleSubmit,
    control,
    // formState: { errors } 
  } = useForm();
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()



  const serviceCenters = useLoaderData()
  const regionsDuplicate = serviceCenters.map(c => c.region)
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" })
  const receiverRegion = useWatch({ control, name: "receiverRegion" })

  const districtsByRegion = region => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }


  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "Document"
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight) || 0;


    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    }
    else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      }
      else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge
      }
    }
    data.cost = cost;
    console.log(cost)

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree"
    }).then((result) => {
      if (result.isConfirmed) {

        // Save to the parcel info to the Database

        axiosSecure.post("/parcels", data)
          .then(res => {
            console.log('After saving parcel', res.data)
            if (res.data.insertedId) {
              navigate("/dashboard/my-parcels")
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Parcel has created. Please pay!!",
                showConfirmButton: false,
                timer: 2000
              });
            }
          })
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-10 my-16 rounded-xl shadow">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-6">Send A Parcel</h2>

      {/* Section Title */}
      <h4 className="text-lg font-semibold mb-4">Enter your parcel details</h4>

      {/* Parcel Type */}
      <div className="flex gap-6 mb-8">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Document"
            {...register("parcelType")}
            defaultChecked
            className="radio"
          />
          Document
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="Non-Document"
            {...register("parcelType")}
            className="radio"
          />
          Non-Document
        </label>
      </div>

      {/* Form Start */}
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel Info */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <input
            {...register("parcelName")}
            className="input input-bordered w-full"
            placeholder="Parcel Name"
          />

          <input
            {...register("parcelWeight")}
            className="input input-bordered w-full"
            placeholder="Parcel Weight (KG)"
          />
        </div>

        {/* Sender + Receiver Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sender Details */}
          <div>
            <h3 className="font-bold mb-4">Sender Details</h3>

            <div className="grid gap-4">

              {/* ========== Sender Name ========== */}
              <input
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                placeholder="Sender Name"
              />

              {/* ========== Sender Email ========== */}
              <input
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input input-bordered w-full"
                placeholder="Sender Email"
              />

              {/* ========== Sender Address ========== */}
              <input
                {...register("senderAddress")}
                className="input input-bordered w-full"
                placeholder="Address"
              />

              {/* ========== Sender Contact ========== */}
              <input
                {...register("senderPhone")}
                className="input input-bordered w-full"
                placeholder="Sender Phone No"
              />


              {/* ========== Sender Region ========== */}
              <select
                {...register("senderRegion")}
                className="select select-bordered w-full"
              >
                <option>Select your Region</option>
                {
                  regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                }


                {/* ========== Sender District ========== */}
              </select>

              <select
                {...register("senderDistrict")}
                className="select select-bordered w-full"
              >
                <option>Select your District</option>
                {
                  districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                }


              </select>

              {/* ========== Sender Textarea ========== */}
              <textarea
                {...register("pickupInstruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Pickup Instruction"
              ></textarea>
            </div>
          </div>

          {/* Receiver Details */}
          <div>
            <h3 className="font-bold mb-4">Receiver Details</h3>

            <div className="grid gap-4">
              {/* ========== Receiver Name ========== */}
              <input
                {...register("receiverName")}
                className="input input-bordered w-full"
                placeholder="Receiver Name"
              />

              {/* ========== Receiver Email ========== */}
              <input
                {...register("receiverEmail")}
                className="input input-bordered w-full"
                placeholder="Receiver Email"
              />

              {/* ========== Receiver Address ========== */}
              <input
                {...register("receiverAddress")}
                className="input input-bordered w-full"
                placeholder="Receiver Address"
              />

              {/* ========== Receiver Contact ========== */}
              <input
                {...register("receiverContact")}
                className="input input-bordered w-full"
                placeholder="Receiver Contact No"
              />

              {/* ========== Receiver Region ========== */}
              <select
                {...register("receiverRegion")}
                className="select select-bordered w-full"
              >
                <option>Select your Region</option>
                {
                  regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                }
              </select>

              {/* ========== Receiver District ========== */}
              <select
                {...register("receiverDistrict")}
                className="select select-bordered w-full"
              >
                <option>Select your District</option>
                {
                  districtsByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                }
              </select>

              {/* ========== Receiver Textarea ========== */}
              <textarea
                {...register("deliveryInstruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Delivery Instruction"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Pickup Time Note */}
        <p className="text-sm text-gray-500 mt-4 mb-8">
          * PickUp Time 4pm–7pm Approx.
        </p>

        {/* Submit Button */}
        <button className="btn bg-[#c1ff64] px-10">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
