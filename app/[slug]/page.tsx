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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("slug", slug)
    .limit(1);

  console.log("SLUG:", slug);
  console.log("DATA:", data);
  console.log("ERROR:", error);

  // ❌ if error
  if (error) {
    return <h1>Error loading data</h1>;
  }

  // ❌ if no data
  if (!data || data.length === 0) {
    return <h1>Not found</h1>;
  }

  // ✅ Now safe
  const business = data[0] as Business;

  return <PageUI data={business} />;
}
