"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const common_config_1 = require("../common.config");
class MongooseService {
    constructor() {
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        this.connect = () => {
            mongoose_1.default
                .connect(common_config_1.mongoDbConnectionString, this.mongooseOptions)
                .then(() => {
                console.log('MongoDB is connected');
            })
                .catch((err) => {
                console.log('MongoDB connection was unsuccessful');
                console.log(err);
            });
        };
        this.connect();
    }
    getMongoose() {
        return mongoose_1.default;
    }
    generateObjectId() {
        return mongoose_1.default.Types.ObjectId();
    }
    generateFilterConfig(filterParams, allowedKeys = {}) {
        const filterConfig = [];
        try {
            if (filterParams.length) {
                filterParams.forEach(filter => {
                    if (!filter)
                        return;
                    filter = filter.trim(); // removing whitespace
                    const [key, value] = filter === null || filter === void 0 ? void 0 : filter.split(':');
                    if (key in allowedKeys) { //only allowed fields are filterable
                        filterConfig.push({ [key]: { $regex: value, $options: 'i' } });
                    }
                });
            }
        }
        catch (err) {
            console.log('Error processing filter config');
        }
        return filterConfig;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQWdDO0FBQ2hDLG9EQUEwRDtBQUUxRCxNQUFNLGVBQWU7SUFPakI7UUFOUSxvQkFBZSxHQUFHO1lBQ3RCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsZ0JBQWdCLEVBQUUsS0FBSztTQUMxQixDQUFDO1FBb0NGLFlBQU8sR0FBRyxHQUFHLEVBQUU7WUFDWCxrQkFBUTtpQkFDSCxPQUFPLENBQUMsdUNBQXVCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtnQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQTNDRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLGtCQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sa0JBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEMsQ0FBQztJQUdELG9CQUFvQixDQUFDLFlBQTJCLEVBQUUsV0FBVyxHQUFHLEVBQUU7UUFDOUQsTUFBTSxZQUFZLEdBQW1CLEVBQUUsQ0FBQTtRQUN2QyxJQUFJO1lBQ0EsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFNO29CQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBLENBQUMsc0JBQXNCO29CQUM3QyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3ZDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxFQUFFLG9DQUFvQzt3QkFDMUQsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7cUJBQ2pFO2dCQUNMLENBQUMsQ0FBQyxDQUFBO2FBQ0w7U0FDSjtRQUNELE9BQU8sR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1NBQ2hEO1FBRUQsT0FBTyxZQUFZLENBQUE7SUFDdkIsQ0FBQztDQWFKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9