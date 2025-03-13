import express from "express";
import { diff } from "json-diff-ts";

const router = express.Router();

// POST route to check differences
router.post("/check-diff", (req, res) => {
  console.log("In check Diff");
  //   console.log("Request Payload:", JSON.stringify(req?.body, null, 2));

  try {
    const { oldPayBand, newPayBand } = req.body;
    console.log(oldPayBand);
    if (!oldPayBand || !newPayBand) {
      return res
        .status(400)
        .json({ error: "Both oldPayBand and newPayBand are required" });
    }

    const result = diff(oldPayBand, newPayBand, {
      embeddedObjKeys: { tags: "type", type: "id" },
    });

    return res.json({ difference: result });
  } catch (error) {
    console.error("Error computing diff:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
