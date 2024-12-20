const fetchData = async (url, handleError = true) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    if (handleError) {
      console.error('Error fetching data:', error);
    }
    return [];
  }
};

export const fetchAllPosts = async (apiUrl) => {
  const data = await fetchData(apiUrl);
  return data?.data || [];
};


export const fetchPosts = async (url) => fetchData(url, false);


export const getStaticPaths = async () => {
  const posts = await fetchAllPosts(`${API_BASE_URL}/Blogs?populate=image`);
  const pageSize = 1;
  const totalPages = Math.ceil(posts.length / pageSize);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths };
};