const catchAsync = require("../util/catchAsync.js");
const AppError = require("../util/appError.js");
const Music = require("../models/Music.js");

exports.getAllMusic = catchAsync(async (req, res, next) => {
  const music = await Music.find();

  res.status(200).json({
    status: "success",
    n: music.length,
    data: music,
  });
});

exports.addNewMusic = catchAsync(async (req, res, next) => {
  const music = await Music.create({
    title: req.body.title,
    artist: req.body.artist,
    music: req.file,
  });

  res.status(200).json({
    status: "success",
    data: music,
  });
});

exports.deleteMusic = catchAsync(async (req, res, next) => {
  const music = await Music.findByIdAndDelete(req.params.musicId);

  if (!music) return next(new AppError("No music found with that Id", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
