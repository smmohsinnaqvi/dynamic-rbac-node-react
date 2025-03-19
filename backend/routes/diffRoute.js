import express from "express";
import { diff } from "json-diff-ts";

const router = express.Router();

// POST route to check differences
router.post("/check-diff", (req, res) => {
  console.log("In check Diff");
  //   console.log("Request Payload:", JSON.stringify(req?.body, null, 2));

  try {
    const { oldPayBand, newPayBand } = req.body;
    // console.log(oldPayBand);
    if (!oldPayBand || !newPayBand) {
      return res
        .status(400)
        .json({ error: "Both oldPayBand and newPayBand are required" });
    }

    const result = diff(oldPayBand, newPayBand, {
      embeddedObjKeys: { tags: "type", type: "id" },
    });

    let action = "Updated";

    const statusChange = result?.find((diff) => diff.key === "status");

    if (statusChange) {
      const { oldValue, value } = statusChange;

      if (oldValue === "Not Submitted" && value === "Pending") {
        action = "Submitted";
      } else if (oldValue === "Pending" && value === "Approved") {
        action = "Approved";
      } else if (oldValue === "Pending" && value === "Rejected") {
        action = "Rejected";
      }
    }
    console.log(`the pay band has been ${action}`);

    return res.json({ difference: result });
  } catch (error) {
    console.error("Error computing diff:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
