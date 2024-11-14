import React, { useState } from "react";
import { motion } from "framer-motion";
import { addItemToLs, getItemFromLs } from "../../../utils/ls";
import dispatchables from "../../../utils/dispatchables";
import Reviews from "../../../components/xp/Reviews";
import { riderParentVariant } from "../../../constants/variants";
import LoadBooking from "./LoadBooking";
import Btn from "@/components/btn/Btn";
import RiderPicture from "./RiderPicture";
import Rate from "./Rate";
import { BookRide } from "../services/BookRide";

const RiderInfo = () => {
  const { showAlert, loading, unloading } = dispatchables();

  const [waiting, setWaiting] = useState(false);
  const [rider, setRider] = useState(getItemFromLs("rider") || null);

  const submitBooking = async () => {
    loading();
    const bookData = getItemFromLs("book-data");
    try {
      await BookRide(bookData);
      unloading();
      showAlert("Wait a moment");
      setWaiting(true);
    } catch (error) {
      unloading();
      showAlert(`Error Booking Ride`);
    }
  };

  return (
    <>
      {waiting ? (
        <LoadBooking setRider={setRider} setWaiting={setWaiting} />
      ) : (
        <motion.div
          initial="out"
          animate="enter"
          exit="leave"
          transition={{ duration: 0.65, type: "just" }}
          variants={riderParentVariant}
          className="relative"
        >
          <motion.div className="md:flex md:gap-x-6 lg:gap-x-[102px] mt-7">
            <RiderPicture
              fullname={rider?.fullname}
              photo={rider.photo}
              submitBooking={submitBooking}
            />

            <motion.div className="w-full max-w-[588px] pt-3">
              <motion.div className="w-full max-w-96 h-fit md:h-[174px]">
                <div>
                  <p className="text-2xl">
                    License plate: {rider?.plate_number || 'NL'}
                  </p>
                  <p className="mt-3 text-2xl md:mt-4">
                    Keke Color: {rider?.color || "NL"}
                  </p>
                </div>

                <Rate
                  rate={rider?.rating || 4}
                  statik
                  className="mt-2 md:mt-4 lg:mt-10"
                  size="size-[58px]"
                />
              </motion.div>

              <motion.div className="md:mt-6 lg:mt-10 ">
                <Reviews />

                <div className="mt-4 md:hidden">
                  <Btn
                    styling="w-full btn btn--lg btn--primary"
                    text="Request Ride"
                    onClick={submitBooking}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default RiderInfo;
