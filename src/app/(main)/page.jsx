import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import CategoryList from "@/components/homepage/news/CategoryList";
import { secondsToMinutes } from "date-fns";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("category/01");
}
