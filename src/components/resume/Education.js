import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    > 
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-black">
          <ResumeCard
            title="BS in Information Technology"
            subTitle="Central Philippines State University (2020 - 2024)"
            result="Average"
            des="My coursework and hands-on projects provided me with a strong foundation in visual storytelling, brand identity creation, and web technologies."
          />
          <ResumeCard
            title="Sr. HighSchool"
            subTitle="Fellowship Baptsit College (2014 - 2020)"
            result="Average"
            des="During my high school years, I actively participated in various extracurricular activities and clubs that allowed me to explore and develop my creative skills."
          />
          <ResumeCard
            title="Primary School"
            subTitle="Esteban R. Abada Memorial School - West (2008 - 2014)"
            result="Average"
            des=" Even at a young age, I was fascinated by the power of visuals and storytelling. I participated in art classes and school projects that allowed me to explore my interest in design and technology. "
          />
        </div>
      </div>
      {/* part Two */}


    </motion.div>
  );
}

export default Education