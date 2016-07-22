using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/delegationBoardItem")]
    public class DelegationBoardItemController : ApiController
    {
        public DelegationBoardItemController(IDelegationBoardItemService delegationBoardItemService)
        {
            _delegationBoardItemService = delegationBoardItemService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DelegationBoardItemAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DelegationBoardItemAddOrUpdateRequestDto dto) { return Ok(_delegationBoardItemService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DelegationBoardItemAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DelegationBoardItemAddOrUpdateRequestDto dto) { return Ok(_delegationBoardItemService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DelegationBoardItemDto>))]
        public IHttpActionResult Get() { return Ok(_delegationBoardItemService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DelegationBoardItemDto))]
        public IHttpActionResult GetById(int id) { return Ok(_delegationBoardItemService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_delegationBoardItemService.Remove(id)); }

        protected readonly IDelegationBoardItemService _delegationBoardItemService;


    }
}
