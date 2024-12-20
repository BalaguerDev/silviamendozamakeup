export const paginatePosts = (posts, currentPage, pageSize) => {
  const totalPages = Math.ceil(posts.length / pageSize);
  const start = (currentPage - 1) * pageSize;

  return {
    postsToDisplay: posts.slice(start, start + pageSize),
    prevPage: currentPage > 1 ? currentPage - 1 : null,
    nextPage: currentPage < totalPages ? currentPage + 1 : null,
  };
};