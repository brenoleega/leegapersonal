import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = async (req, res) => {
        try {
            const livrosResultado = await livros.find().populate("autor");
            res.status(200).json(livrosResultado);
        } catch (err) {
            res.status(500).json(err);
        }
    };

    static cadastrarLivro = async (req, res) => {
        let livro = new livros(req.body);
        try {
            await livro.save(res.status(201).send(livro.toJSON()));
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: `${err.message} - falha ao cadastrar livro.`,
            });
        }
    };

    static atualizarLivro = async (req, res) => {
        const id = req.params.id;
        try {
            await livros.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({ message: "Livro atualizado com sucesso" });
        } catch (err) {
            //console.log(err);
            res.status(500).send({ message: err.message });
        }
    };

    static getLivroPorId = async (req, res) => {
        const id = req.params.id;
        try {
            const livroEncontrado = await livros
                .findById(id)
                .populate("autor", "nome");
            res.status(200).json(livroEncontrado);
        } catch (err) {
            res.status(400).send({
                message: `${err.message} - id não localizado.`,
            });
        }
    };

    static excluirLivro = async (req, res) => {
        const id = req.params.id;
        try {
            await livros.findByIdAndDelete(id);
            res.status(200).send({ messsage: "Livro deletado com sucesso" });
        } catch (err) {
            res.status(400).send({
                message: `${err.message} - Livro não deletado.`,
            });
        }
    };

    static listarLivroPorEditora = async (req, res) => {
        const editora = req.query.editora;
        try {
            const livrosEncontrados = await livros.find({ editora: editora });
            res.status(200).json(livrosEncontrados);
        } catch (err) {
            res.status(400).send({
                message: `${err.message} - Livro não encontrado.`,
            });
        }
    };
}

export default LivroController;
