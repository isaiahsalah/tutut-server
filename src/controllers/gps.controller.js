import { Gps } from "../models/gps.js";
import { Interno } from "../models/interno.js";
import { User } from "../models/user.js";


export async function createGps(req, res) {
    try {
        const newGps = await Gps.create(req.body);
        res.status(200).json(newGps);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getGpss(req, res) {
    const { internoId } = req.params;
    try {
        const gpss = await Gps.findAll({
            include: Interno,
            where: { internoId: internoId },
            order: [["id", "DESC"]],
            
        });
        res.status(200).json(gpss);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
/*
export async function getGps(req, res) {
    const { id } = req.params;
    try {
        const gps = await Gps.findOne({
            where: { id },
        });
        res.json(gps);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/*
export async function updateGps(req, res) {
    const { id } = req.params;
    try {
        const gps = await Gps.findOne({
            where: { id },
        });

        gps.set(req.body);

        await gps.save();

        res.status(200).json(gps);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteGps(req, res) {
    const { id } = req.params;
    try {
        await Gps.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}*/


