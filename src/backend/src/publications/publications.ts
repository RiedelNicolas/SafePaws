import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    res.status(201).json({
        message: "Publication created"
    })
});

module.exports = router;