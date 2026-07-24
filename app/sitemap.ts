import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/ch777-download",
    "/ch777-login",
    "/deposit-guide",
    "/withdrawal-guide",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
    "/responsible-gaming",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/ch777-download" || route === "/ch777-login"
          ? 0.9
          : 0.7,
  }));
}
