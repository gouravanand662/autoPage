import { supabase } from "../lib/supabase";
import PageUI from "./PageUI";

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

  if (!data || data.length === 0) {
    return <h1>Not foundddd</h1>;
  }

  return <PageUI data={data[0]} />;
}
