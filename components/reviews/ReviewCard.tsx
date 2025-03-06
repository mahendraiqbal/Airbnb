import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import Image from "next/image";
type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="realtive">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt="profile"
            className="rounded-full object-cover"
            width={12}
            height={12}
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardHeader>
        <Comment comment={reviewInfo.comment} />
      </CardHeader>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}

export default ReviewCard;
