import React from "react";
import StatsContainer from "@/components/admin/StatsContainer";
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import { Suspense } from "react";

function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}

export default AdminPage;
