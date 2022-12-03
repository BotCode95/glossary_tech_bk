"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const glossary_1 = require("../controllers/glossary");
const router = (0, express_1.Router)();
router.get('/', glossary_1.getGlossary);
router.get('/search', glossary_1.getGlossaryByName);
router.get('/:id', glossary_1.getGlossaryById);
router.post('/', glossary_1.postGlosary);
router.put('/:id', glossary_1.updateGlossary);
router.delete('/:id', glossary_1.deleteGlossary);
exports.default = router;
//# sourceMappingURL=glossary.js.map