"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
let AppService = class AppService {
    supabase;
    constructor() {
        this.supabase = (0, supabase_js_1.createClient)('https://fwwlwjfsluxgxuosdfvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3d2x3amZzbHV4Z3h1b3NkZnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4NDgwOTcsImV4cCI6MjA4NDQyNDA5N30.-Ea4ngAG3yq3FoeLtZjMnVoqvfOrrmv6fqVfuymyIBM');
    }
    async getMessages() {
        const { data, error } = await this.supabase
            .from('paddock_messages')
            .select('*')
            .order('created_at', { ascending: false });
        if (error)
            throw new Error(error.message);
        return data;
    }
    async addMessage(driverName, message) {
        const { data, error } = await this.supabase
            .from('paddock_messages')
            .insert([{ driver_name: driverName, message }]);
        if (error)
            throw new Error(error.message);
        return data;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
//# sourceMappingURL=app.service.js.map