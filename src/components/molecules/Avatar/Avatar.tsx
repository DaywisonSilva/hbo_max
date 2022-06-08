/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";

import { avatarContainer, avatarIcon, avatarLegend } from "./Avatar.styles";

type Data = {
  data: any;
};

type Items = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export default function Avatar({ movieId }: { movieId: number }) {
  const [castCreditsName, setCastCreditsName] = useState<string>();
  const [castCreditsCastPic, setCastCreditsCastPic] = useState<string>();

  useEffect(() => {
    (async () => {
      const response: Data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const profilePath: Items = response.data?.cast[0];
      const profileName: Items = response.data?.cast[0];

      setCastCreditsCastPic(profilePath.profile_path);
      setCastCreditsName(profileName.name);
    })();
  }, []);

  console.log(castCreditsName);

  return (
    <div className={avatarContainer({})}>
      <img
        className={avatarIcon({})}
        alt="asdasd"
        src={`https://images.tmdb.org/t/p/original${castCreditsCastPic}`}
      />
      <p className={avatarLegend({})}> {`castCreditsName`}</p>
    </div>
  );
}
