using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/delegationBoard")]
    public class DelegationBoardController : ApiController
    {
        public DelegationBoardController(IDelegationBoardService delegationBoardService)
        {
            _delegationBoardService = delegationBoardService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DelegationBoardAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DelegationBoardAddOrUpdateRequestDto dto) { return Ok(_delegationBoardService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DelegationBoardAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DelegationBoardAddOrUpdateRequestDto dto) { return Ok(_delegationBoardService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DelegationBoardDto>))]
        public IHttpActionResult Get() { return Ok(_delegationBoardService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DelegationBoardDto))]
        public IHttpActionResult GetById(int id) { return Ok(_delegationBoardService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_delegationBoardService.Remove(id)); }

        protected readonly IDelegationBoardService _delegationBoardService;


    }
}
