import autores from "../models/Autor.js";

class AutorController {
    static listarAutor = async (req, res) => {
        try {
            const AutorResultado = await autores.find();
            res.status(200).json(AutorResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    };

    static cadastrarAutor = async (req, res) => {
        let autor = new autores(req.body);
        try {
            await autor.save(res.status(201).send(autor.toJSON()));
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: `${err.message} - falha ao cadastrar Autor.`,
            });
        }
    };

    static atualizarAutor = async (req, res) => {
        const id = req.params.id;
        try {
            await autores.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: "Autor atualizado com sucesso" });
        } catch (err) {
            //console.log(err);
            res.status(500).send({ message: err.message });
        }
    };

    static getAutorPorId = async (req, res) => {
        const id = req.params.id;
        try {
            const autorEncontrado = await autores.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (err) {
            res.status(400).send({
                message: `${err.message} - id não localizado.`,
            });
        }
    };

    static excluirAutor = async (req, res) => {
        const id = req.params.id;
        try {
            await autores.findByIdAndDelete(id);
            res.status(200).send({ messsage: "Autor deletado com sucesso" });
        } catch (err) {
            res.status(400).send({
                message: `${err.message} - Autor não deletado.`,
            });
        }
    };
}

export default AutorController;
