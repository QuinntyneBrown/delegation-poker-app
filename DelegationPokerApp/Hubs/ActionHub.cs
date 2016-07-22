using DelegationPokerApp.Dtos;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Slack.Hubs
{
    [HubName("actionHub")]
    public class ActionHub : Hub
    {
        public void Send(ActionDto dto)
        {
            Clients.Others.broadcastMessage(dto);
        }
    }
}