const input = document.querySelector("#search");
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", searchInput);

async function searchInput(event) {
    event.preventDefault();
    const userSearch = searchForm.elements.query.value;
    const config = { params: { q: userSearch } };
    const request = await axios.get(
        ` https://api.tvmaze.com/search/shows`,
        config
    );
    displayShows(request.data);
    searchForm.elements.query.value = "";
}

function displayShows(results) {
    for (let result of results) {
        console.log(result);
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
