"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("./swagger.json"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const customers_routes_1 = __importDefault(require("./customers/customers.routes"));
const id_middleware_1 = require("./common/middlewares/id.middleware");
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use((0, helmet_1.default)()); // security middleware
app.use(express_1.default.json()); // Adding body parser
app.use((0, cors_1.default)()); // Enabling CORS middleware
app.use(id_middleware_1.transformIdProperty); // converting 'id' to '_id' for mongoose
router.use('/customers', customers_routes_1.default);
app.use('/v1', router);
app.use('/v1/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixzREFBNkI7QUFDN0IsNEVBQTBDO0FBQzFDLGdFQUFpRDtBQUNqRCxnREFBdUI7QUFDdkIsb0RBQTJCO0FBQzNCLG9GQUEwRDtBQUMxRCxzRUFBeUU7QUFHekUsTUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFBO0FBQzFDLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxDQUFBLENBQUMsc0JBQXNCO0FBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMscUJBQXFCO0FBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFBLENBQUMsMkJBQTJCO0FBQzNDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQW1CLENBQUMsQ0FBQSxDQUFDLHdDQUF3QztBQUdyRSxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSwwQkFBZSxDQUFDLENBQUE7QUFFekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUl2RSxrQkFBZSxHQUFHLENBQUEifQ==