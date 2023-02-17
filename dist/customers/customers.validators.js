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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const customers_service_1 = __importDefault(require("./services/customers.service"));
class CustomerValidators {
    constructor() {
        this.getCustomerParamsValidationRules = () => {
            return [
                (0, express_validator_1.query)('sortBy').optional().notEmpty().trim().escape(),
                (0, express_validator_1.query)('filter').optional().notEmpty().escape(),
            ];
        };
        this.createCustomerValidationRules = () => {
            return [
                (0, express_validator_1.body)('name').notEmpty().trim().escape(),
                (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
                (0, express_validator_1.body)('phone').notEmpty().trim().escape(),
                (0, express_validator_1.body)('address').exists().trim().escape(),
                (0, express_validator_1.body)('city').exists().trim().escape(),
                (0, express_validator_1.body)('zipCode').exists().trim().escape(),
            ];
        };
        this.putCustomerValidationRules = () => {
            return [
                (0, express_validator_1.body)('name').notEmpty().trim().escape(),
                (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
                (0, express_validator_1.body)('phone').notEmpty().trim().escape(),
                (0, express_validator_1.body)('address').exists().trim().escape(),
                (0, express_validator_1.body)('city').exists().trim().escape(),
                (0, express_validator_1.body)('zipCode').exists().trim().escape(),
            ];
        };
        this.patchCustomerValidationRules = () => {
            return [
                (0, express_validator_1.body)('name').optional().notEmpty().trim().escape(),
                (0, express_validator_1.body)('email').optional().isEmail().normalizeEmail(),
                (0, express_validator_1.body)('phone').optional().notEmpty().trim().escape(),
                (0, express_validator_1.body)('address').optional().trim().escape(),
                (0, express_validator_1.body)('city').optional().trim().escape(),
                (0, express_validator_1.body)('zipCode').optional().trim().escape(),
            ];
        };
        // Returning error response on validation error
        // Otherwise letting pass to next middleware
        this.validate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (errors.isEmpty()) {
                return next();
            }
            const extractedErrors = [];
            errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
            return res.status(400).json({
                errors: extractedErrors,
            });
        });
        this.validateCustomerExists = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const customer = yield customers_service_1.default.getById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.customerId);
            if (customer) {
                res.locals.customer = customer;
                next();
            }
            else {
                res.status(404).send({
                    errors: [`Customer ${req.params.customerId} not found`],
                });
            }
        });
    }
}
exports.default = new CustomerValidators();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLnZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jdXN0b21lcnMvY3VzdG9tZXJzLnZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBaUU7QUFDakUscUZBQTBEO0FBRTFELE1BQU0sa0JBQWtCO0lBQXhCO1FBQ0UscUNBQWdDLEdBQUcsR0FBRyxFQUFFO1lBQ3RDLE9BQU87Z0JBQ0wsSUFBQSx5QkFBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDckQsSUFBQSx5QkFBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRTthQUMvQyxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsa0NBQTZCLEdBQUcsR0FBRyxFQUFFO1lBQ25DLE9BQU87Z0JBQ0wsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDdkMsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRTtnQkFDeEMsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDckMsSUFBQSx3QkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFD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