export default async function getFacts(url) {
  const response = await fetch(url).then((response) => response.json());
  return response;
}
