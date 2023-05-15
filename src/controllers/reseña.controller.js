import { Reseña } from "../models/reseña.js";
import { User } from "../models/user.js";

export async function getReseñas(req, res) {
    try {
        const Reseñas = await Reseña.findAll({
            include:  User,
            order: [["id", "DESC"]],
        });
        res.status(200).json(Reseñas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createReseña(req, res) {
    try {
        const newReseña = await Reseña.create(req.body);
        res.status(200).json(newReseña);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function updateReseña(req, res) {
    const { id } = req.params;
    try {
        const editReseña = await Reseña.findOne({
            where: { id },
        });
        editReseña.set(req.body);
        await editReseña.save();
        res.status(200).json(editReseña);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteReseña(req, res) {
    const { id } = req.params;
    try {
        await Reseña.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getReseña(req, res) {
    const { id } = req.params;
    try {
        const viewReseña = await Reseña.findOne({
            include:  User,
            where: { id },
        });
        res.json(viewReseña);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
