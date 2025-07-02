import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  return (
   <Card
  className={cn(
    "flex flex-col overflow-hidden  border-white/20 hover:shadow-lg transition-all duration-300 ease-out h-full",
    "bg-black text-white", // Added here
    className
  )}
>
  <a href={href || "#"} className="block cursor-pointer">
    {video && (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
      />
    )}
    {image && (
      <img
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-40 w-full overflow-hidden object-fit  object-top bg-white"
      />
    )}
  </a>

  <CardHeader className="px-2">
    <div className="space-y-1">
      <CardTitle className="mt-1 text-base">{title}</CardTitle>
      <time className="font-sans text-xs">{dates}</time>
      <div className="hidden font-sans text-xs underline print:visible">
        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
      <p className="prose max-w-full text-pretty font-sans text-xs text-[#A3A3A3]">
        {description}
      </p>
    </div>
  </CardHeader>

  <CardContent className="mt-auto flex flex-col px-2">
    {tags && tags.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            className="px-1 py-0 text-[13px] bg-gray-800 text-white"
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </div>
    )}
  </CardContent>

  <CardFooter className="px-2 pb-2">
    {links && links.length > 0 && (
      <div className="flex flex-row flex-wrap items-start gap-1">
        {links.map((link, idx) => (
          <a href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
            <Badge
              key={idx}
              className="flex gap-2 px-2 py-1 text-[15px] bg-white text-black pointer-events-none"
            >
              {link.icon}
              {link.type}
            </Badge>
          </a>
        ))}
      </div>
    )}
  </CardFooter>
</Card>
  );
}