import axios from "axios";
import { toast } from "react-toastify";
import { NEXT_PUBLIC_PETANI_FILM_BASE_URL } from "../shared_variables/env";

export const deleteMovieByTmdbId = async (tmdbId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios.delete(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/delete-movie-by-tmdb-id/${tmdbId}`
      );
      // toast.error(error.message);
      return resolve(true);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return reject(false);
    }
  });
};
