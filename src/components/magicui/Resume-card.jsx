import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full text-left focus:outline-none"
    >
      <Card
        className={cn(
          "flex md:w-[50%] transition-all duration-300 ease-in-out flex-row ml-auto mr-auto ",
          "bg-black",
          "border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:border-white/20"
        )}
      >
        {/* Avatar Section */}
        <div className="flex-none px-4 py-4">
          <Avatar className="border border-white/10 md:size-20 m-auto bg-white/10">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback className="text-white">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content Section */}
        <div className="flex-grow py-4 pr-6 items-center flex-col group text-white">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-2">
              <h3 className="inline-flex items-center justify-center font-semibold text-sm sm:text-base text-white">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        key={index}
                        className="bg-white/10 text-white border border-white/20"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-2 transform transition-transform duration-300 ease-out",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-gray-400 text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="mt-1 text-xs text-gray-300">{subtitle}</div>
            )}
          </CardHeader>

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 text-sm text-gray-300 leading-relaxed"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </button>
  );
};
