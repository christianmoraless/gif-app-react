






export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=M8TaKTrOQtNlyvewjU7be3zXxH0mZGEs&q=${category}&limit=20`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    // de esta manera desestructuro la informacion que venga de un array de objetos
    const gifs = data.map(img => ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}