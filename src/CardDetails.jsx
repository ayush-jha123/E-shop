import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CardDetails = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCard(data); // Ensure we have an array even if products is undefined
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(card);
  return (
    <div className="max-sm:w-[90%] w-[70%] object-contain mt-4 flex flex-col ">
      <div className="flex flex-row gap-6 max-sm:flex-col">
        <div className="w-[45%]  max-sm:w-full rounded-sm shadow-lg bg-slate-100">
          <img src={card?.thumbnail} alt="Thumbnail" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[2rem] font-mono font-bold max-sm:text-[1.5rem]">{card?.title}</h1>
          <p className="font-semibold text-[1rem] font-mono ring-1 bg-green-400 w-[15%] max-sm:w-[27%]  rounded-md">
            ⭐{card?.rating}
          </p>
          <div className="flex flex-row w-full gap-6 items-center max-sm:flex-col max-sm:items-start">
            <p className="font-semibold text-[2rem] font-mono max-sm:text-[1.5rem]">
              ₹ {card?.price}
            </p>
            <p className="font-semibold text-gray-400 text-[1.5rem] font-serif max-sm:hidden">
              {card?.discountPercentage}% Off
            </p>
          </div>
          <p className="font-semibold text-gray-300 text-[1.5rem] font-mono max-sm:hidden">
            {card?.warrantyInformation}
          </p>
          <p className="font-semibold text-[1rem] font-mono ring-1 bg-yellow-400 w-[20%] text-white p-1 rounded-md max-sm:w-[50%]">
            {card?.availabilityStatus}
          </p>
          <p className=" text-[1.5rem] font-mono max-sm:text-[1.2rem]">{card?.returnPolicy}</p>
          <p className=" text-[1.5rem] font-mono max-sm:text-[1.2rem]">
            {card?.shippingInformation}
          </p>
        </div>
      </div>
      <div className="w-full mt-2">
        <p className="text-[1.5rem] max-sm:text-[1.2rem] font-mono">{card?.description}</p>
      </div>
      <div className="w-full mt-2">
        <p className="text-[2rem] font-serif font-semibold max-sm:text-[1.5rem]">Reviews:</p>
        {card?.reviews && card?.reviews?.map((review) => (
          <div
            key={`${review.reviewerEmail}-${review.date}`}
            className="ring-1 p-4 mb-4 rounded-md bg-gray-100 shadow-md"
          >
            <div className="flex flex-row gap-3">
            <p className="text-[1.5rem] font-mono max-sm:text-[1.2rem]">{review.comment}</p>
            <p className="font-semibold text-[1rem] font-mono ring-1 bg-yellow-400 w-[5%] rounded-md px-2 py-1 max-sm:w-[25%] max-sm:h-[10%]">
              ⭐{review.rating}
            </p>
            </div>
            <div className="mt-2 text-sm">
              <p>Reviewed by: {review.reviewerName}</p>
              <p>Date: {new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
