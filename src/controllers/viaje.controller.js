import { Viaje } from "../models/viaje.js";
import { User } from "../models/user.js";
import { Interno } from "../models/interno.js";
import { Linea } from "../models/linea.js";


/*
export async function getViajeUser(req, res) {
    const { id } = req.params;
    try {
        const viaje = await Viaje.findOne({
            include: User,
            where: { id },
            order: [["id", "DESC"]],
        });
        res.json(viaje);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function getViajeInternos(req, res) {

    const { id } = req.params;
    try {
        const viaje = await Viaje.findOne({
            include: [
                { model: Interno, include: User }
            ],
            where: { id },
            order: [["id", "DESC"]],
        });
        res.json(viaje);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}*/


///////////////////////////////////////////////////////////
export async function getViajes(req, res) {
    try {
        const viajes = await Viaje.findAll({
            include: [
                { model: User},
                { model: Interno, include: Linea}
            ],
            order: [["id", "DESC"]],
            
        });
        res.status(200).json(viajes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createViaje(req, res) {
    try {
        const newViaje = await Viaje.create(req.body);
        res.status(200).json(newViaje);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateViaje(req, res) {
    const { id } = req.params;
    try {
        const viaje = await Viaje.findOne({
            where: { id },
        });

        viaje.set(req.body);

        await viaje.save();

        res.status(200).json(viaje);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteViaje(req, res) {
    const { id } = req.params;
    try {
        await Viaje.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getViaje(req, res) {
    const { id } = req.params;
    try {
        const viaje = await Viaje.findOne({
            include: [
                { model: User},
                { model: Interno}
            ],
            where: { id },
        });
        res.json(viaje);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
