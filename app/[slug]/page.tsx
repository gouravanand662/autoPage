"use client";

import { supabase } from "../lib/supabase";
import PageUI from "./PageUI";

type Business = {
  slug: string;
  name: string;
  city: string;
  phone: string;
  description: string;
};

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("slug", slug)
    .limit(1);

  if (error) {
    return <h1>Error</h1>;
  }

  if (!data || data.length === 0) {
    return <h1>Not found</h1>;
  }

  // 🔥 IMPORTANT LINE
  const business: Business = data[0];

  return <PageUI data={business} />;
}
