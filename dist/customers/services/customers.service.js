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
const customer_dao_1 = __importDefault(require("../daos/customer.dao"));
// Maintains communication between controller and DAO
class CustomerService {
    getAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(customer_dao_1.default.getCustomers(options));
        });
    }
    create(resource) {
        return Promise.resolve(customer_dao_1.default.createCustomer(resource));
    }
    putById(id, resource) {
        return Promise.resolve(customer_dao_1.default.updateCustomerById(id, resource));
    }
    patchById(id, resource) {
        return Promise.resolve(customer_dao_1.default.updateCustomerById(id, resource));
    }
    getById(id) {
        return Promise.resolve(customer_dao_1.default.getCustomerById(id));
    }
    deleteById(id) {
        return Promise.resolve(customer_dao_1.default.deleteCustomerById(id));
    }
}
exports.default = new CustomerService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jdXN0b21lcnMvc2VydmljZXMvY3VzdG9tZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3RUFBOEM7QUFNOUMscURBQXFEO0FBRXJELE1BQU0sZUFBZTtJQUNYLE1BQU0sQ0FBQyxPQUE0Qjs7WUFDckMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDN0QsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFDLFFBQTJCO1FBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBVSxFQUFFLFFBQXdCO1FBQ3hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFFRCxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQTBCO1FBQzVDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBVTtRQUNkLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNqQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsc0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlELENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUEifQ==