"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_js_1 = require("./app.controller.js");
const app_service_js_1 = require("./app.service.js");
const products_module_js_1 = require("./modules/products/products.module.js");
const customers_module_js_1 = require("./modules/customers/customers.module.js");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_js_1 = require("../data-source.js");
const config_1 = require("@nestjs/config");
const orders_module_js_1 = require("./modules/orders/orders.module.js");
const order_service_module_js_1 = require("./services/order-service/order-service.module.js");
const payment_service_module_js_1 = require("./services/payment-service/payment-service.module.js");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [products_module_js_1.ProductsModule, customers_module_js_1.CustomersModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot(data_source_js_1.AppDataSource.options),
            orders_module_js_1.OrdersModule,
            order_service_module_js_1.OrderServiceModule,
            payment_service_module_js_1.PaymentServiceModule
        ],
        controllers: [app_controller_js_1.AppController],
        providers: [app_service_js_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map