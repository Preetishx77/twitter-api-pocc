import { getTweets, getUserData } from "../../src/utils/twitterApi";

export default async function handler(req, res) {
  const userData = await getUserData(req.query.username);
  console.log("userData", userData);
  const tweets = await getTweets(userData.data.id);
  res.status(200).json({
    userData: userData.data,
    tweets: tweets.data
  });
}
