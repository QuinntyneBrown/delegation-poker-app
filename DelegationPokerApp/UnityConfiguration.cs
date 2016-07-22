using DelegationPokerApp.Configuration;
using DelegationPokerApp.Data;
using DelegationPokerApp.Services;
using DelegationPokerApp.Utilities;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace DelegationPokerApp
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer().AddNewExtension<Interception>();
            container.RegisterType<IDbContext, DataContext>();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ILoggerFactory, LoggerFactory>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ILogger, Logger>();

            container.RegisterType<IAppPropertyService, AppPropertyService>();
            container.RegisterType<IDelegationBoardService, DelegationBoardService>();
            container.RegisterType<IDelegationBoardItemService, DelegationBoardItemService>();
            container.RegisterType<IDelegationLevelService, DelegationLevelService>();
            container.RegisterType<IDigitalAssetService, DigitalAssetService>();
            container.RegisterType<IRoleService, RoleService>();
            container.RegisterType<ISituationService, SituationService>();
            container.RegisterType<ITeamService, TeamService>();
            container.RegisterType<ITeamMemberService, TeamMemberService>();
            container.RegisterType<IUserService, UserService>();

            container.RegisterInstance(AuthConfiguration.LazyConfig);            
            return container;
        }
    }
}
