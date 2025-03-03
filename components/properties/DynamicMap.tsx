"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicMap = dynamic(() => import("./PropertyMap"), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
});

export default DynamicMap;
