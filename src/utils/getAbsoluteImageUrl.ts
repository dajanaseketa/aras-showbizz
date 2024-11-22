export function getAbsoluteImageUrl(relativeUrl: string, imageSize?: string) {
  if (!relativeUrl) {
    return "/images/movie-image-placeholder.png";
  }
  const baseUrl = "https://image.tmdb.org/t/p/";
  const size = imageSize ?? "w500";

  return `${baseUrl}${size}${relativeUrl}`;
}
