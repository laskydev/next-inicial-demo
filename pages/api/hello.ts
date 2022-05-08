// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

interface People {
  name: string;
  age: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<People>
) {
  res.status(200).json({
    name: "Ed Fortuna",
    age: 22,
  });
}
