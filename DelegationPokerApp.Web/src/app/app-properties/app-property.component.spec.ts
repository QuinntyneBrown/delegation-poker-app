describe("appProperty", () => {

    var appPropertyComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.appProperty");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        appPropertyComponent = $controller("appPropertyComponent", { appPropertyActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<app-property></app-property>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(appPropertyComponent).toBeDefined();
    });
})
