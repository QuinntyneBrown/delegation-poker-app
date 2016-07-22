describe("team", () => {

    var teamComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.team");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        teamComponent = $controller("teamComponent", { teamActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<team></team>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(teamComponent).toBeDefined();
    });
})
