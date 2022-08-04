import React from "react";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const register = async (req, res, next) => {
  const { email, password } = req.body;

  const newRefreshToken = jwt.sign({ email }, REFRESH_TOKEN_SECRET, "36h");

  try {
    const createdUser = await User.create({
      ...req.body,
      password: await bcrypt.hash(password, 10),
      refreshToken: newRefreshToken,
    });

    const { _id: id, ...rest } = createdUser._doc;

    res.cookie("refresh_token", newRefreshToken, {
      httpOnly: true,
    });

    const newAccessToken = jwt.sign({ email, id }, ACCESS_TOKEN_SECRET, "2h");

    res.status(200).json({
      user: { id, accessToken: newAccessToken, ...rest },
    });
  } catch (error) {
    console.log(error);
  }
};
