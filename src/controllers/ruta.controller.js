import { Ruta } from "../models/ruta.js";

export async function getRutas(req, res) {
    try {
        const Rutas = await Ruta.findAll({
            order: [["id", "DESC"]],
        });
        res.status(200).json(Rutas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createRuta(req, res) {
    try {
        const newRuta = await Ruta.create(req.body);
        res.status(200).json(newRuta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function updateRuta(req, res) {
    const { id } = req.params;
    try {
        const editRuta = await Ruta.findOne({
            where: { id },
        });
        editRuta.set(req.body);
        await editRuta.save();
        res.status(200).json(editRuta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteRuta(req, res) {
    const { id } = req.params;
    try {
        await Ruta.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getRuta(req, res) {
    const { id } = req.params;
    try {
        const viewRuta = await Ruta.findOne({
            where: { id },
        });
        res.json(viewRuta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/////////////////////////////////////////////////////////////////

export async function getRutasLinea(req, res) {
    const { id } = req.params;
    try {
        const Rutas = await Ruta.findAll({
            order: [["id", "DESC"]],
            where: { lineaId: id }
        });
        res.status(200).json(Rutas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function updateStateRuta(req, res) {
    const { id } = req.params;
    const { lineaId } = req.params;
    try {
        /*const editRuta = await Ruta.findOne({
            where: { id },
        });*/
        await Ruta.update({ status: false }, { where: { status: true, lineaId: lineaId } })
        /*.then((e) => {
            Ruta.update({ status: true }, { where: { id: id, lineaId: lineaId } }).then((e) => {
                res.status(200).json(e);
            })
        })*/
        await Ruta.update({ status: true }, { where: { id: id, lineaId: lineaId } }).then((e) => {
            res.status(200).json(e);
        })
        //await Ruta.update({ status: false }, { where: { id: id } })
        /*editRuta.set({ status: req.body.status });
        await editRuta.save();*/

        //res.status(200).json(editRuta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
