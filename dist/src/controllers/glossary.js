"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGlossary = exports.updateGlossary = exports.postGlosary = exports.getGlossaryByName = exports.getGlossaryById = exports.getGlossary = void 0;
const glossary_1 = require("../models/glossary");
const getGlossary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const glossary = yield glossary_1.Glossary.find();
        res.status(200).json(glossary);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getGlossary = getGlossary;
const getGlossaryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const glossary = yield glossary_1.Glossary.findById(id);
        res.status(200).json(glossary);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getGlossaryById = getGlossaryById;
const getGlossaryByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    try {
        const glossary = yield glossary_1.Glossary.find({ name });
        if (!glossary.length) {
            return res.status(400).json({ message: 'the search returned no results' });
        }
        res.status(200).json(glossary);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getGlossaryByName = getGlossaryByName;
const postGlosary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const glossary = new glossary_1.Glossary({ name, description });
        yield glossary.save();
        res.status(200).json(glossary);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.postGlosary = postGlosary;
const updateGlossary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const glossary = yield glossary_1.Glossary.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(glossary);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateGlossary = updateGlossary;
const deleteGlossary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield glossary_1.Glossary.findByIdAndDelete(id);
        res.status(200).json({ message: 'definition deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteGlossary = deleteGlossary;
//# sourceMappingURL=glossary.js.map