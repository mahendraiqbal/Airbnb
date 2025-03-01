import FavoriteToogleButton from "@/components/card/FavoriteToogleButton";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import ShareButton from "@/components/properties/ShareButton";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";
import React from "react";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToogleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  );
}

export default PropertyDetailsPage;
