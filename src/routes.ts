import express from "express";
import xmlparser from "express-xml-bodyparser";

//importação dos Controllers

import VendorController from "./controllers/VendorController";
import ItensController from "./controllers/ItensController";
import importXMLcontroller from "./controllers/ImportXMLcontroller";
import UserController from "./controllers/UserController";
import OrcController from "./controllers/OrcController";
import ReportsController from "./controllers/ReportsController";
import ImportXMLcontroller from "./controllers/ImportXMLcontroller";
import ImportCsvController from "./controllers/ImportCsvController";

const Routes = express();

// Usuarios
Routes.get('/users', UserController.index);

// CFOP
Routes.get('/cfop', importXMLcontroller.index);

// Fornecedores
Routes.get('/vendors', VendorController.index)
    .post('/vendors', VendorController.create)
    .put('/vendors', VendorController.update)
    .delete('/vendors/:id', VendorController.delete);

// Produtos
Routes.get('/itens', ItensController.index)
    .post('/itens', ItensController.create)
    .put('/itens/:id', ItensController.update)
    .delete('/itens/:id', ItensController.delete);

// Orçamentos
Routes.get('/orcamentos', OrcController.index)
    .post('/orcamentos', OrcController.create)
    .put('/orcamentos/:id', OrcController.update)
    .delete('/orcamentos/:id', OrcController.delete);

// Relatorios
Routes.get('/reports', ReportsController.index);

// XML
Routes.get('/xml', ImportXMLcontroller.index)
    .post('/xml', ImportXMLcontroller.create);

// CSV
Routes.post('/csv', ImportCsvController.create);

// NF-e e NFC-e

export default Routes;

