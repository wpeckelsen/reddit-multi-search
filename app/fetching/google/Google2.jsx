const fetchGoogleResults = async (combinedSearchTerm, index = 1) => {
  try {
    const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY; // Use NEXT_PUBLIC_ prefix for client-side env vars
    const cx = process.env.NEXT_PUBLIC_GOOGLE_CX;
    
    const url = `https://www.googleapis.com/customsearch/v1?q=${combinedSearchTerm}&key=${key}&cx=${cx}&start=${index}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return { data: data.items, totalResults: data.searchInformation.totalResults };
  } catch (error) {
    throw new Error(error.message || "Something went wrong fetching Google SERP results.");
  }
};

export default fetchGoogleResults;
