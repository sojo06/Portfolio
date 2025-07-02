// Icons.jsx
import { GlobeIcon, MailIcon } from "lucide-react";

// ✅ Define first
const Icons = {
  globe: (props) => <GlobeIcon {...props} />,
  email: (props) => <MailIcon {...props} />,
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037..."
      />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584..."
      />
    </svg>
  ),
  youtube: (props) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>YouTube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47..." />
    </svg>
  ),
  nextjs: (props) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <title>Next.js</title>
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067..." />
    </svg>
  ),
  framermotion: (props) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Framer Motion</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
      <path d="M20 12l-8 8l-4 -4" />
    </svg>
  ),
  tailwindcss: (props) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8..." />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props} >
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798..."
      ></path>
    </svg>
  ),
};

// ✅ Export afterwards
export default Icons;
