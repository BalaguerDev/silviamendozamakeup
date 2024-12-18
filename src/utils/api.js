// api.js
export const fetchPosts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchAllPosts = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return [];
  }
};

export async function getStaticPaths() {
  const posts = await fetchAllPosts(`${API_BASE_URL}/Blogs?populate=image`);
  const pageSize = 1;
  const totalPages = Math.ceil(posts.length / pageSize);

  const paths = [];

  // Generar las rutas para cada página
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ params: { page: i.toString() } });
  }

  return { paths };
}