import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gjvqbyzqimrczhliovnp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/carsbg/**",
      },
    ],

    domains: ["lh3.googleusercontent.com"],
  },
};

export default withFlowbiteReact(nextConfig);
