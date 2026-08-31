export const navItems = [
  { label: "Home", href: "/", disabled: false },
  { label: "Workflows", href: "/workflows", disabled: false },
  { label: "Lessons", href: "/lessons", disabled: false },
  { label: "Playgrounds", href: "/playgrounds", disabled: true },
  { label: "Community", href: "/community", disabled: false },
  { label: "Events", href: "/events", disabled: false },
  { label: "Profile", href: "/profile", disabled: false },
] as const;

export const footerColumns = [
  {
    title: "Discover",
    links: [
      { label: "Home", href: "/" },
      { label: "Lessons", href: "/lessons" },
      { label: "Workflows", href: "/workflows" },
      { label: "Playgrounds", href: "/playgrounds" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Learning Paths",
    links: [
      { label: "Beginner Workflows", href: "/lessons" },
      { label: "Policy-Gated Deploys", href: "/workflows" },
      { label: "Incident Automation", href: "/workflows" },
      { label: "Auto Rollbacks", href: "/workflows" },
      { label: "Multi-Repo Releases", href: "/workflows" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.superplane.com/" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "Workflow Templates", href: "/workflows" },
      { label: "Integrations", href: "/playgrounds" },
      { label: "Changelog", href: "/events" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Superplane", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Discord", href: "/" },
      { label: "Contact", href: "/profile" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Discord", href: "/" },
      { label: "X / Twitter", href: "/" },
      { label: "LinkedIn", href: "/" },
    ],
  },
] as const;
