describe("situation", () => {

    var situationComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.situation");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        situationComponent = $controller("situationComponent", { situationActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<situation></situation>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(situationComponent).toBeDefined();
    });
})
