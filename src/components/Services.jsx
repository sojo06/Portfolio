import React, { forwardRef } from "react";
import Sectiontitle from "./Sectiontitle";
import { cir01, cir02 } from "@/constants/assets";
import { services } from "@/constants";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/constants/motion";

const Service = forwardRef(({ icon: Icon, title, description}, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-start gap-y-4 rounded-xl border border-solid border-[#D4D4D8] p-6 transition-colors hover:border-[#3379FF]"
    >
      <div className="flex size-[70px] items-center justify-center rounded-full bg-[#FFB514]/5 text-[#FFB514]">
        <Icon size={28} />

      </div>
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-base font-normal text-[#71717A]">{description}</p>
    </div>
  );
});
// Service.displayName = "Service";
// Service.prototype = {
//   icon: PropTypes.object,
//   title: PropTypes.string,
//   description: PropTypes.string,
// };
const ServiceMotion = motion(Service);
function Services() {
  return (
    <section className="bg-black">
      <div className="w-full max-w-screen-xl mx-auto px-4 relative flex flex-col items-center gap-y-9">
        <img
          src={cir02}
          className=" relative top-235 left-150 z-10 -translate-y-14 "
        />
        <img
          src={cir01}
          className="relative right-150 translate-y-14 "
        />

        <Sectiontitle title="SERVICES" sub="What I Can Do For You" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceMotion
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
