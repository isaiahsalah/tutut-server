import { Control } from "../models/control.js";
import { User } from "../models/user.js";
import { Linea } from "../models/linea.js";


///////////////////////////////////////////////////////////
export async function getControls(req, res) {
    try {
        const Controls = await Control.findAll({
            include:  User,
            include:  Linea,
            order: [["id", "DESC"]],
        });
        res.status(200).json(Controls);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createControl(req, res) {
    try {
        const newControl = await Control.create(req.body);
        res.status(200).json(newControl);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateControl(req, res) {
    const { id } = req.params;
    try {
        const editControl = await Control.findOne({
            where: { id },
        });

        editControl.set(req.body);

        await editControl.save();

        res.status(200).json(editControl);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteControl(req, res) {
    const { id } = req.params;
    try {
        await Control.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getControl(req, res) {
    const { id } = req.params;
    try {
        const viewControl = await Control.findOne({
            include:  User,
            include:  Linea,
            where: { id },
        });
        res.json(viewControl);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

////////////////////////////////////////////////////////////////////////

export async function getControlsLinea(req, res) {
    const { id } = req.params;
    try {
        const Controls = await Control.findAll({
            include:  User,
            order: [["id", "DESC"]],
            where: { lineaId:id },
        });
        res.status(200).json(Controls);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}