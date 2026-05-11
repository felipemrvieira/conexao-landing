import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "conexao-landing";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repositoryName}` : undefined,
  assetPrefix: isGithubActions ? `/${repositoryName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repositoryName}` : "",
  },
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/escola-conexao-logo.png",
        search: "?v=20260511-1122",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
