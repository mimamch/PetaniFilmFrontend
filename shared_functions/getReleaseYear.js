export const getReleaseYear = (releaseDate) =>
  releaseDate?.split("-")[0] || "-";
