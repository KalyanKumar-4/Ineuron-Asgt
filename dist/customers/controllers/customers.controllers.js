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
const customers_service_1 = __importDefault(require("../services/customers.service"));
class CustomerController {
    getAllCustomers(req, res) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            // Options used for pagination, sorting, searching
            const options = {
                limit: +((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.limit),
                page: +((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.page),
                sortBy: (_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.sortBy,
                filterParams: (_e = (_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.filter) === null || _e === void 0 ? void 0 : _e.split(',')
            };
            const customers = yield customers_service_1.default.getAll(options);
            res.status(200).json(customers);
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield customers_service_1.default.getById(req.params.customerId);
            res.status(200).json(customer);
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield customers_service_1.default.create(req.body);
            res.status(201).json({ id: userId });
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customers_service_1.default.patchById(req.params.customerId, req.body);
            res.status(204).json();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customers_service_1.default.putById(req.params.customerId, req.body);
            res.status(204).json();
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield customers_service_1.default.deleteById(req.params.customerId);
            res.status(204).json();
        });
    }
}
exports.default = new CustomerController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY3VzdG9tZXJzL2NvbnRyb2xsZXJzL2N1c3RvbWVycy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLHNGQUEyRDtBQUUzRCxNQUFNLGtCQUFrQjtJQUNkLGVBQWUsQ0FBQyxHQUFRLEVBQUUsR0FBcUI7OztZQUNqRCxrREFBa0Q7WUFDbEQsTUFBTSxPQUFPLEdBQXdCO2dCQUNqQyxLQUFLLEVBQUUsQ0FBQyxDQUFBLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssMENBQUUsS0FBSyxDQUFBO2dCQUN6QixJQUFJLEVBQUUsQ0FBQyxDQUFBLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssMENBQUUsSUFBSSxDQUFBO2dCQUN2QixNQUFNLEVBQUUsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsS0FBSywwQ0FBRSxNQUFNO2dCQUMxQixZQUFZLEVBQUUsTUFBQSxNQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxLQUFLLDBDQUFFLE1BQU0sMENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUMvQyxDQUFBO1lBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTs7S0FDbEM7SUFFSyxlQUFlLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDN0QsTUFBTSxRQUFRLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLE1BQU0sR0FBRyxNQUFNLDJCQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3hDLENBQUM7S0FBQTtJQUdLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLDJCQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNqRCxNQUFNLDJCQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLDJCQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUMxQixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQSJ9