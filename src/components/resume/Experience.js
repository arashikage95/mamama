import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-black">
          <ResumeCard
            title="Golden Arches Development Corporation (McDonald’s)"
            subTitle="Service Crew"
            result="Kabankalan City"
            des="Provides Costumer Service, Serve Food."
          />
          <ResumeCard
            title="Passfast International Cargo and Logistics (Delivery Services)"
            subTitle="Delivery Rider"
            result="Kabankalan City"
            des="Provides Costumer Service, Delivery."
          />
          <ResumeCard
            title="Delivery Rider"
            subTitle="Food Panda"
            result="Kabankalan City"
            des="Provides Costumer Service, Delivery."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NEGROS OCCIDENTAL ELECTRIC COOPERATIVE, INC (NOCECO)"
            subTitle="Trainee – Mechanical Engineering Department"
            result="Kabankalan City"
            des="Yeah"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
