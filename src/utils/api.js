export async function fetchPosts(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }