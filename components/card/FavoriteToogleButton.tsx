import React from "react";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToogleForm from "./FavoriteToogleForm";

async function FavoriteToogleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ propertyId });
  return <FavoriteToogleForm favoriteId={favoriteId} propertyId={propertyId} />;
}

export default FavoriteToogleButton;
