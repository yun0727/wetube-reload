export const trending = (req, res) => {
  const videos = [1,2,3,4,5,6
  ];
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};