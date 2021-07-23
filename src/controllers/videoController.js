export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Vided",
      rating: 5,
      comments: 2,
      createAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" });

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};
