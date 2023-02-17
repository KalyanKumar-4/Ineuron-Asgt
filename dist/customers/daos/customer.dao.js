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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const customers_sort_by_enum_1 = require("../enums/customers-sort-by.enum");
const customers_filter_enum_1 = require("../enums/customers-filter.enum");
// Used for controller-mongodb interaction
class CustomerDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.customerSchema = new this.Schema({
            _id: String,
            name: String,
            email: String,
            phone: String,
            address: String,
            city: String,
            zipCode: String,
        }, {
            timestamps: true,
            toJSON: {
                transform: function (doc, ret) {
                    ret.id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                }
            }
        });
        this.Customer = mongoose_service_1.default.getMongoose().model('Customers', this.customerSchema);
    }
    createCustomer(customerData) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerId = mongoose_service_1.default.generateObjectId(); // Using string type id instead of ObjectId
            const customer = new this.Customer(Object.assign({ _id: customerId }, customerData));
            yield customer.save();
            return customerId;
        });
    }
    getCustomers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let { limit, page } = options;
            const { sortBy, filterParams } = options;
            let sortConfig = {}, filterConfig = [];
            // setting default values   
            limit = limit ? limit : 100;
            page = page ? page : 1;
            // Allowing sorting only with the keys in enum
            if (sortBy && sortBy in customers_sort_by_enum_1.CustomersSortByEnum) {
                sortConfig = { [sortBy]: 1 }; // assigning value of sortBy as Object key
            }
            if (filterParams) {
                // Used for sorting resources based on key:value passed in http request as query params
                filterConfig = mongoose_service_1.default.generateFilterConfig(filterParams, customers_filter_enum_1.CustomersFilterByEnum);
            }
            const query = this.Customer.find()
                .limit(limit)
                .skip(limit * (page - 1));
            if (filterConfig.length > 0)
                query.or(filterConfig); //Building conditional query
            if (sortConfig)
                query.sort(sortConfig);
            return query.exec();
        });
    }
    getCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Customer.findOne({ _id: customerId }).exec();
        });
    }
    updateCustomerById(customerId, customerData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingCustomer = yield this.Customer.findOneAndUpdate({ _id: customerId }, { $set: customerData }, { new: true }).exec();
            return existingCustomer;
        });
    }
    deleteCustomerById(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Customer.deleteOne({ _id: customerId }).exec();
        });
    }
}
exports.default = new CustomerDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY3VzdG9tZXJzL2Rhb3MvY3VzdG9tZXIuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsOEZBQW9FO0FBRXBFLDRFQUFxRTtBQUNyRSwwRUFBc0U7QUFFdEUsMENBQTBDO0FBRTFDLE1BQU0sV0FBVztJQUFqQjtRQUNJLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQTtRQUU3QyxtQkFBYyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QixHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsTUFBTTtTQUNsQixFQUFFO1lBQ0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO29CQUN6QixHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUE7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQztvQkFDZixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ25CLENBQUM7YUFDSjtTQUNKLENBQUMsQ0FBQTtRQUVGLGFBQVEsR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBaUVwRixDQUFDO0lBL0RTLGNBQWMsQ0FBQyxZQUErQjs7WUFDaEQsTUFBTSxVQUFVLEdBQUcsMEJBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBLENBQUMsMkNBQTJDO1lBQ2pHLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEs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