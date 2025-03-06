import FavoriteToogleButton from "@/components/card/FavoriteToogleButton";
import PropertyRating from "@/components/card/PropertyRating";
import BookingCalendar from "@/components/properties/BookingCalendar";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import Description from "@/components/properties/Description";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyDetails from "@/components/properties/PropertyDetails";
import ShareButton from "@/components/properties/ShareButton";
import UserInfo from "@/components/properties/UserInfo";
import { fetchPropertyDetails } from "@/utils/actions";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import React from "react";
import Amenities from "@/components/properties/Amenities";
import DynamicMap from "@/components/properties/DynamicMap";
import SubmitReview from "@/components/reviews/SubmitReview";
import PropertyReviews from "@/components/reviews/PropertyReviews";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect("/");
  const { baths, bedrooms, beds, guests } = property;

  const details = {
    baths,
    bedrooms,
    beds,
    guests,
  };

  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

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
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex fap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingCalendar />
        </div>
      </section>
      <SubmitReview propertyId={property.id} />
      <PropertyReviews propertyId={property.id} />
    </section>
  );
}

export default PropertyDetailsPage;
