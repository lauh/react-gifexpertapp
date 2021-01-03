export const getGifs = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=25&api_key=kKIJBEI8DmfKh13Anc4LywZ6PZQw8mI7`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  console.log(gifs);
  return gifs;
};
