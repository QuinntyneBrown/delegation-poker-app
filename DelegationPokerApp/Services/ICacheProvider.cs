using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DelegationPokerApp.Services
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
