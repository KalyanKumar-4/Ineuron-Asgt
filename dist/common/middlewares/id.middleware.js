"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformIdProperty = void 0;
// id is converted to _id in incoming requests
// The frontend client remain independent of mongodb database dependency
const transformIdProperty = (req, res, next) => {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.id;
    if (id) {
        req.body._id = id;
        req.body.id = undefined;
    }
    next();
};
exports.transformIdProperty = transformIdProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9taWRkbGV3YXJlcy9pZC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDhDQUE4QztBQUM5Qyx3RUFBd0U7QUFFakUsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFRLEVBQUU7O0lBQ2pILE1BQU0sRUFBRSxHQUFHLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLElBQUksMENBQUUsRUFBRSxDQUFBO0lBQ3hCLElBQUksRUFBRSxFQUFFO1FBQ0osR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQTtLQUMxQjtJQUNELElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQyxDQUFBO0FBUFksUUFBQSxtQkFBbUIsdUJBTy9CIn0=