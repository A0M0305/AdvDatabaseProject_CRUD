//these will allow me to render to different files.
exports.homeRoutes=(req,res) => {
    res.render("home");
}

exports.add_user=(req,res) => {
    res.render("add_user");
}

exports.update_user=(req,res) => {
    res.render("update_user");
}