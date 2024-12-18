export const paginatePosts = (posts, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    const postsToDisplay = posts.slice(start, start + pageSize);
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < Math.ceil(posts.length / pageSize) ? currentPage + 1 : null;
  
    return { postsToDisplay, prevPage, nextPage };
  };
  