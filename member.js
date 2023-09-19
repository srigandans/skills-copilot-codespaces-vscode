function skillsMember()
{
    return {
        restrict: 'E',
        templateUrl: 'module/skilss/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:
        {
            member: '='
        }
    };
}