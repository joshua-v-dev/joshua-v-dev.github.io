import type { NextApiRequest, NextApiResponse } from "next";

const Routes = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};
export default Routes;
