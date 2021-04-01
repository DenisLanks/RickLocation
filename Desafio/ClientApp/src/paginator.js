"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paginator = /** @class */ (function () {
    function Paginator() {
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.currentIndex = 0;
        this.pages = [];
        this.source = [];
    }
    Paginator.prototype.update = function () {
        if (this.source.length > 0) {
        }
    };
    Paginator.prototype.paginate = function () {
        return this.source.slice(this.page.start, this.page.end);
    };
    return Paginator;
}());
exports.default = Paginator;
//# sourceMappingURL=paginator.js.map