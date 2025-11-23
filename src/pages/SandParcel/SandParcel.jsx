import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                {...register("senderName")}
                className="input input-bordered w-full"
                placeholder="Sender Name"
              />

              <input
                {...register("senderAddress")}
                className="input input-bordered w-full"
                placeholder="Address"
              />

              <input
                {...register("senderPhone")}
                className="input input-bordered w-full"
                placeholder="Sender Phone No"
              />

              <select
                {...register("senderDistrict")}
                className="select select-bordered w-full"
              >
                <option>Select your District</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
              </select>

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
              <input
                {...register("receiverName")}
                className="input input-bordered w-full"
                placeholder="Receiver Name"
              />

              <input
                {...register("receiverAddress")}
                className="input input-bordered w-full"
                placeholder="Receiver Address"
              />

              <input
                {...register("receiverContact")}
                className="input input-bordered w-full"
                placeholder="Receiver Contact No"
              />

              <select
                {...register("receiverDistrict")}
                className="select select-bordered w-full"
              >
                <option>Select your District</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
              </select>

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
