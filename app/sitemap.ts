import { MetadataRoute } from "next";
import episodesData from "@/data/episodes.json";
import newslettersData from "@/data/newsletters.json";
import articlesData from "@/data/articles.json";
import { models } from "@/data/models";

interface DatedEntry {
  slug: string;
  date: string;
}

const episodes = episodesData as unknown as DatedEntry[];
const newsletters = newslettersData as unknown as DatedEntry[];
const articles = articlesData as unknown as DatedEntry[];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thorft.com";
  const today = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/brad-roth`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/team`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/models`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/podcast`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: today, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/insights`, lastModified: today, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/press`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/funds`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/analyze`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/disclosures`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
  ];

  const modelPages: MetadataRoute.Sitemap = models.map((m) => ({
    url: `${baseUrl}/models/${m.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const podcastPages: MetadataRoute.Sitemap = episodes.map((ep) => ({
    url: `${baseUrl}/podcast/${ep.slug}`,
    lastModified: new Date(ep.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = newsletters.map((n) => ({
    url: `${baseUrl}/blog/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const insightsPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...modelPages, ...podcastPages, ...blogPages, ...insightsPages];
}
