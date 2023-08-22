const showPage = (req, res) => {
  const originalUrl = req.originalUrl.split("/")[1];
  res.status(200).render(originalUrl, { title: `${originalUrl} page` });
};

export default { showPage };
