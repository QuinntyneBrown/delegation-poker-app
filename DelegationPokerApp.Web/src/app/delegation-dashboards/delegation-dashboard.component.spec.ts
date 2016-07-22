describe("delegationDashboard", () => {

    var delegationDashboardComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.delegationDashboard");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        delegationDashboardComponent = $controller("delegationDashboardComponent", { delegationDashboardActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<delegation-dashboard></delegation-dashboard>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(delegationDashboardComponent).toBeDefined();
    });
})
