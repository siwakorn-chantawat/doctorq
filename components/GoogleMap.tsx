import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function GoogleMap() {
  return (
    <GoogleMapsEmbed
      apiKey="XYZ"
      height={200}
      width="100%"
      mode="place"
      q="Doctor+Q+Clinic"
    />
  );
}
