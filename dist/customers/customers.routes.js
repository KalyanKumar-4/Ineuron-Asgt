"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customers_controllers_1 = __importDefault(require("./controllers/customers.controllers"));
const customers_validators_1 = __importDefault(require("./customers.validators"));
const router = express_1.default.Router();
router.route(`/`)
    .get(customers_validators_1.default.getCustomerParamsValidationRules(), // Rules are  returned as array, no validation done 
customers_validators_1.default.validate, // It calls the actual validation method on the returned rules
customers_controllers_1.default.getAllCustomers // At last controller function takes over
)
    .post(customers_validators_1.default.createCustomerValidationRules(), customers_validators_1.default.validate, customers_controllers_1.default.createCustomer);
router.route(`/:customerId`)
    .all(customers_validators_1.default.validateCustomerExists) // making sure resource exists for all request in this endpoint
    .get(customers_controllers_1.default.getCustomerById)
    .put(customers_validators_1.default.putCustomerValidationRules(), customers_validators_1.default.validate, customers_controllers_1.default.put)
    .patch(customers_validators_1.default.patchCustomerValidationRules(), customers_validators_1.default.validate, customers_controllers_1.default.patch)
    .delete(customers_controllers_1.default.deleteCustomer);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2N1c3RvbWVycy9jdXN0b21lcnMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLGdHQUFvRTtBQUNwRSxrRkFBdUQ7QUFFdkQsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUNaLEdBQUcsQ0FDQSw4QkFBa0IsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLG9EQUFvRDtBQUMzRyw4QkFBa0IsQ0FBQyxRQUFRLEVBQUUsOERBQThEO0FBQzNGLCtCQUFrQixDQUFDLGVBQWUsQ0FBQyx5Q0FBeUM7Q0FDL0U7S0FDQSxJQUFJLENBQ0QsOEJBQWtCLENBQUMsNkJBQTZCLEVBQUUsRUFDbEQsOEJBQWtCLENBQUMsUUFBUSxFQUMzQiwrQkFBa0IsQ0FBQyxjQUFjLENBQ3BDLENBQUE7QUFFTCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztLQUN2QixHQUFHLENBQUMsOEJBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQywrREFBK0Q7S0FDOUcsR0FBRyxDQUFDLCtCQUFrQixDQUFDLGVBQWUsQ0FBQztLQUN2QyxHQUFHLENBQ0EsOEJBQWtCLENBQUMsMEJBQTBCLEVBQUUsRUFDL0MsOEJBQWtCLENBQUMsUUFBUSxFQUMzQiwrQkFBa0IsQ0FBQyxHQUFHLENBQUM7S0FDMUIsS0FBSyxDQUNGLDhCQUFrQixDQUFDLDRCQUE0QixFQUFFLEVBQ2pELDhCQUFrQixDQUFDLFFBQVEsRUFDM0IsK0JBQWtCLENBQUMsS0FBSyxDQUMzQjtLQUNBLE1BQU0sQ0FBQywrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUU5QyxrQkFBZSxNQUFNLENBQUEifQ==